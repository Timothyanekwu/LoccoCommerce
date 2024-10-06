"use client";

import { createContext, useEffect, useState, useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import axios from "axios";

const DataContext = createContext();

export const Data = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [currProduct, setCurrProduct] = useState(null);
  const [selectedOption, setSelectedOption] = useState("");
  const [discOption, setDiscOption] = useState("");
  const [sortView, setSortView] = useState(false);
  // const [qty, setQty] = useState(1);
  const [selectStates, setSelectState] = useState("");
  const [localGovt, setLocalGovt] = useState("");
  const [noteView, setAddView] = useState(false);
  const [addNote, setAddNote] = useState("");
  const [payType, setPayType] = useState("");
  const [deviceWidth, setDeviceWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );
  // checkout
  const [locat, setLocat] = useState({
    name: "",
    surname: "",
    address: "",
    phone: "",
    addPhone: "",
    info: "",
  });
  const [locations, setLocations] = useState([]);
  const [locatView, setLocatView] = useState(false);

  const callTimeout = useRef(null);
  const searchParams = useSearchParams();
  const router = useRouter();

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

  // ------------- FUNCTIONS -------------

  const handleCat = (item) => {
    const setParams = new URLSearchParams(searchParams.toString());
    setParams.set("category", item.toLowerCase());
    router.push(`/?${setParams.toString()}`, undefined, { shallow: true });
  };

  const handlePrice = (msg, value) => {
    const setParams = new URLSearchParams(searchParams.toString());
    setParams.set("priceRange", value);
    router.push(`/?${setParams.toString()}`, undefined, { shallow: true });
    setSelectedOption(msg);
  };

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

  const handleSearch = (e) => {
    e.preventDefault();
    if (!search) return;
    const setParams = new URLSearchParams(searchParams.toString());
    setParams.set("query", search);
    router.push(`/?${setParams.toString()}`, undefined, {
      shallow: true,
    });
  };

  const handleSort = (opt) => {
    const setParams = new URLSearchParams(searchParams.toString());
    setParams.set("sortBy", opt);
    router.push(`/?${setParams.toString()}`, undefined, {
      shallow: true,
    });

    setSortView(false);
  };

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

  const cartDelete = async (id) => {
    await axios.delete(`http://localhost:5500/products/cartData/${id}`);

    setCart((prev) => prev.filter((item) => item._id !== id));
  };

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
        // qty,
        // setQty,
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
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
