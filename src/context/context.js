"use client";

import { createContext, useEffect, useState, useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import axios from "axios";

const DataContext = createContext();

export const Data = ({ children }) => {
  // ----------------------- STATE MANAGEMENT -----------------------------
  // containers
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [locations, setLocations] = useState([]);
  const [orders, setOrders] = useState([]);

  // toggle views
  const [sortView, setSortView] = useState(false);
  const [noteView, setAddView] = useState(false);
  const [locatView, setLocatView] = useState(false);
  const [accView, setAccView] = useState(false);

  // marketplace states
  const [search, setSearch] = useState("");
  const [currProduct, setCurrProduct] = useState(null);
  const [selectedOption, setSelectedOption] = useState("");
  const [discOption, setDiscOption] = useState("");
  const [selectStates, setSelectState] = useState("");

  // order states
  const [currOrder, setCurrOrder] = useState({});

  //product page states
  const [localGovt, setLocalGovt] = useState("");

  // checkout states
  const [addNote, setAddNote] = useState("");
  const [payType, setPayType] = useState("");
  const [locationId, setLocationId] = useState(null);
  const [locat, setLocat] = useState({
    name: "",
    surname: "",
    address: "",
    phone: "",
    addPhone: "",
    info: "",
  });

  //other states
  const [deviceWidth, setDeviceWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );

  // ------------------------- GLOBAL CONSTANTS -----------------------------
  const callTimeout = useRef(null);
  const searchParams = useSearchParams();
  const router = useRouter();

  // ------------------------- USE-EFFECT HOOK ------------------------------
  useEffect(() => {
    const handleResize = () => {
      setDeviceWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // fetch products from the database
  useEffect(() => {
    const getData = async () => {
      try {
        const result = await axios.get(
          `http://localhost:5500/products?${searchParams.toString()}`
        );
        setProducts(result.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData();
  }, [searchParams]);

  // fetch cart products from the database
  useEffect(() => {
    const getData = async () => {
      try {
        const result = await axios.get(
          "http://localhost:5500/products/cartData"
        );
        setCart(result.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData();
  }, []);

  //fetch locations from the database
  useEffect(() => {
    const locationFetch = async () => {
      const res = await axios.get("http://localhost:5500/products/locations");
      setLocations(res.data);
    };

    locationFetch();
  }, []);

  // orders fetch from database
  useEffect(() => {
    const ordersFetch = async () => {
      const res = await axios.get("http://localhost:5500/products/orders");
      setOrders(res.data);
    };
    ordersFetch();
    console.log(orders);
  }, []);

  // --------------------- FUNCTIONS AND HANDLERS ----------------------

  //categories filter handler
  const handleCat = (item) => {
    const setParams = new URLSearchParams(searchParams.toString());
    setParams.set("category", item.toLowerCase());
    router.push(`/?${setParams.toString()}`, undefined, { shallow: true });
  };

  // price filter handler
  const handlePrice = (msg, value) => {
    const setParams = new URLSearchParams(searchParams.toString());
    setParams.set("priceRange", value);
    router.push(`/?${setParams.toString()}`, undefined, { shallow: true });
    setSelectedOption(msg);
  };

  // discounts filter handler
  const handleDisc = (item) => {
    const setParams = new URLSearchParams(searchParams.toString());
    setParams.set("discount", item.toString());
    router.push(`/?${setParams.toString()}`, undefined, { shallow: true });
    setDiscOption(item);
  };

  const clearFilter = () => {
    const setParams = new URLSearchParams(searchParams.toString());
    setParams.delete("priceRange");
    router.push(`/?${setParams.toString()}`, undefined, {
      shallow: true,
    });

    setSelectedOption(false);
  };

  // product search handler
  const handleSearch = (e) => {
    e.preventDefault();
    if (!search) return;
    const setParams = new URLSearchParams(searchParams.toString());
    setParams.set("query", search);
    router.push(`/?${setParams.toString()}`, undefined, {
      shallow: true,
    });
  };

  // product sort handler
  const handleSort = (opt) => {
    const setParams = new URLSearchParams(searchParams.toString());
    setParams.set("sortBy", opt);
    router.push(`/?${setParams.toString()}`, undefined, {
      shallow: true,
    });

    setSortView(false);
  };

  // product add to cart
  const addCart = async () => {
    const item = cart.find((item) => item.name === currProduct.name);

    if (!item) {
      const response = await axios.post(
        "http://localhost:5500/products/cartData",
        {
          name: currProduct.name,
          img: currProduct.img[0],
          qty: currProduct.qty,
          price: currProduct.price * currProduct.qty,
        }
      );

      const result = response.data;
      setCart((prev) => [...prev, result]);

      alert("Product added to cart successfully!!!");
    } else {
      const response = await axios.patch(
        `http://localhost:5500/products/cartData/${item._id}`,
        {
          price: currProduct.price * (item.qty + currProduct.qty),
          qty: item.qty + currProduct.qty,
        }
      );

      const result = response.data;

      // Update the cart state
      setCart((prevCart) =>
        prevCart.map((cartItem) =>
          cartItem._id === result._id ? result : cartItem
        )
      );
      alert("Cart product updated successfully!!!");
    }
  };

  const cartUpdate = (e, id) => {
    const index = cart.findIndex((item) => item._id == id);

    // database Update function inside the cartupdate function that is called inside the if statements
    // this is called where the function makes the most recent update to the state, which is inside the setCart handler
    const dbUpdate = (qty, price) => {
      if (callTimeout.current) {
        clearTimeout(callTimeout.current);
      }

      // Set a new timeout
      callTimeout.current = setTimeout(async () => {
        try {
          await axios.patch(`http://localhost:5500/products/cartData/${id}`, {
            qty: qty,
            price: price,
          });
          console.log("Patch request made");
        } catch (error) {
          console.error("Error updating cart data:", error);
        }
        // }
      }, 1500);
    };

    if (e.target.id === "add") {
      setCart((prevCart) => {
        const updatedCart = [...prevCart];
        updatedCart[index] = {
          ...updatedCart[index],
          qty: updatedCart[index].qty + 1,
          price:
            (updatedCart[index].price / updatedCart[index].qty) *
            (updatedCart[index].qty + 1),
          /* for the price: divide the last instance of the price by the last instance of the qty,
             to get the initial price of the product, and then, multiply this initial price by the new qty
             (i.e (updatedCart[index].qty + 1)). Note: the same method is applied for the minus handler */
        };

        dbUpdate(updatedCart[index].qty, updatedCart[index].price);
        return updatedCart;
      });
    } else if (e.target.id === "minus") {
      setCart((prevCart) => {
        const updatedCart = [...prevCart];
        updatedCart[index] = {
          ...updatedCart[index],
          qty:
            updatedCart[index].qty > 1
              ? updatedCart[index].qty - 1
              : updatedCart[index].qty,

          price:
            updatedCart[index].qty > 1
              ? (updatedCart[index].price / updatedCart[index].qty) *
                (updatedCart[index].qty - 1)
              : updatedCart[index].price,
          // for explanation, check the add handler above
        };

        dbUpdate(updatedCart[index].qty, updatedCart[index].price);

        return updatedCart;
      });
    }
  };

  // delete from cart
  const cartDelete = async (id) => {
    await axios.delete(`http://localhost:5500/products/cartData/${id}`);

    setCart((prev) => prev.filter((item) => item._id !== id));
  };

  // add customer location
  const addLocation = (e) => {
    switch (e.target.id) {
      case "name":
        setLocat((prev) => ({ ...prev, name: e.target.value }));
        break;
      case "surname":
        setLocat((prev) => ({ ...prev, surname: e.target.value }));
        break;
      case "address":
        setLocat((prev) => ({ ...prev, address: e.target.value }));

        break;
      case "info":
        setLocat((prev) => ({ ...prev, info: e.target.value }));

        break;
      case "phone":
        setLocat((prev) => ({ ...prev, phone: e.target.value }));

        break;
      case "addPhone":
        setLocat((prev) => ({ ...prev, addPhone: e.target.value }));

        break;

      default:
        setLocat((prev) => prev);
        break;
    }
  };

  // customer location submit
  const locationSubmit = async () => {
    await axios.post("http://localhost:5500/products/locations", {
      name: locat.name,
      surname: locat.surname,
      fullAddress: locat.address,
      additionalInfo: locat.info,
      phoneNo: locat.phone,
      additionalPhone: locat.addPhone,
    });

    setLocations((prev) => [...prev, locat]);

    setLocat({
      name: "",
      surname: "",
      address: "",
      phone: "",
      addPhone: "",
      info: "",
    });

    setLocatView(false);
  };

  const placeOrder = async () => {
    const location = locations.find((location) => location._id === locationId);

    const res = await axios.post("http://localhost:5500/products/orders", {
      customerFullName: `${location.name} ${location.surname}`,
      customerPhone: location.phoneNo,
      customerAddress: location.fullAddress,
      orderNumber: Math.round(Math.random() * 10000000000), // You might want a more reliable ID
      products: [...cart],
      payMethod: payType,
      totalPrice: cart.reduce((prev, curr) => prev + curr.price, 0),
    });

    setOrders((prev) => [...prev, res.data]);
    setCart([]);

    router.push("/");
  };

  return (
    <DataContext.Provider
      value={{
        products,
        currProduct,
        setCurrProduct,
        cart,
        setCart,
        deviceWidth,
        handleCat,
        handlePrice,
        selectedOption,
        discOption,
        handleDisc,
        clearFilter,
        search,
        setSearch,
        handleSearch,
        sortView,
        setSortView,
        handleSort,
        addCart,
        selectStates,
        setSelectState,
        localGovt,
        setLocalGovt,
        cartUpdate,
        cartDelete,
        addLocation,
        locat,
        locations,
        setLocations,
        locationSubmit,
        locatView,
        setLocatView,
        noteView,
        setAddView,
        addNote,
        setAddNote,
        payType,
        setPayType,
        locationId,
        setLocationId,
        placeOrder,
        orders,
        accView,
        setAccView,
        currOrder,
        setCurrOrder,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
