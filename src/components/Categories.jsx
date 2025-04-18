import React from "react";
import { assets, categories } from "../assets/assets";
import { useAppContext } from "../context/AppContxt";

const Categories = () => {
  const { navigate } = useAppContext();
  return (
    <div className="mt-16 ">
      <p className="text-2xl md:text-3xl font-medium">Catogories</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 mt-6 gap-6 ">
        {categories.map((items, index) => (
          <div
            key={index}
            className="group cursor-pointer py-5 px-3 gap-2 rounded-lg flex flex-col justify-center items-center"
            style={{ backgroundColor: items.bgColor }}
            onClick={() => {
              navigate(`/products/${items.path.toLowerCase()}`);
              scrollTo(0, 0);
            }}
          >
            <img
              src={items.image}
              alt={items.text}
              className="group-hover:scale-110 transition max-w-28 "
            />
            <p className="text-sm font-medium">{items.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
