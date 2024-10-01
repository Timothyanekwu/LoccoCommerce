const CategoryNav = () => {
  const category = [
    "Automobile",
    "Baby Products",
    "Books, Movies and Music",
    "Computing",
    "Electronics",
    "Fashion",
    "Gaming",
    "Garden & Outdoors",
    "Grocery",
    "Health & Beauty",
    "Home & Office",
    "Industrial & Scientific",
    "Musical Instruments",
    "Pet Supplies",
    "Phones & Tablets",
    "Sporting Goods",
    "Toys & Games",
  ];
  return (
    <div className="w-full bg-[#D2D2D2] h-12 mt-4 flex items-center overflow-auto">
      {category.map((item, index) => {
        return (
          <span
            className="min-w-max text-sm h-full flex justify-center items-center px-2"
            key={index}
          >
            {item}
          </span>
        );
      })}
    </div>
  );
};

export default CategoryNav;
