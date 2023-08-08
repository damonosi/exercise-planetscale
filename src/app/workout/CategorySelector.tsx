"use client";
import Arrow from "@/components/svgs/Arrow";

import { useState } from "react";

const CategorySelector = () => {
  const [category, setCategory] = useState(0);
  const categoryArray = ["endurance", "strength", "balance", "flexibility"];

  function handlePrevious() {
    if (category === 0) {
      setCategory(3);
    } else {
      setCategory(category - 1);
    }
  }

  function handleNext() {
    if (category === 3) {
      setCategory(0);
    } else {
      setCategory(category + 1);
    }
  }
  return (
    <div className="flex w-full items-center justify-between">
      <button onClick={handlePrevious}>
        <Arrow />
      </button>
      <span className="uppercase">{categoryArray[category]}</span>
      <button
        onClick={handleNext}
        className="rotate-180"
      >
        <Arrow />
      </button>
    </div>
  );
};
export default CategorySelector;
