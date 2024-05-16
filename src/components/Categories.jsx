import { useEffect, useState } from "react";
import catagoryData from "../api/catagories.json";
import Category from "./ui/Category";
function Categories() {
  const [catagories, setCategories] = useState([]);
  useEffect(() => {
    setCategories(catagoryData);
  }, []);
  return (
    <div className="bg-white py-4 ">
      <div className="container mx-auto ">
        <h3 className="text-sm font-semibold mb-3">Katagoriler</h3>
        <div className="grid 2xl:grid-cols-12  xl:grid-cols-10 lg:grid-cols-8 md:grid-cols-6 sm:grid-cols-4 grid-cols-2 ">
          {catagories &&
            catagories.map((category, index) => (
              <Category key={index} catagory={category} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Categories;
