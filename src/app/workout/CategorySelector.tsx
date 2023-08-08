"use client";
import Arrow from "@/components/svgs/Arrow";
import { setCategory } from "@/redux/features/selectedCategorySlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

import { useState } from "react";

const CategorySelector = () => {
  const [categoryIndex, setCategoryIndex] = useState(0);
  const categoryArray = ["endurance", "strength", "balance", "flexibility"];
  const category = useAppSelector((state) => state.categoryReducer.value);

  const dispatch = useAppDispatch();
  function handlePrevious() {
    if (categoryIndex === 0) {
      setCategoryIndex(3);
      dispatch(setCategory(`${categoryArray[categoryIndex]}`));
    } else {
      setCategoryIndex(categoryIndex - 1);
      dispatch(setCategory(`${categoryArray[categoryIndex]}`));
    }
  }

  function handleNext() {
    if (categoryIndex === 3) {
      setCategoryIndex(0);
      dispatch(setCategory(`${categoryArray[0]}`));
    } else {
      setCategoryIndex(categoryIndex + 1);
      dispatch(setCategory(`${categoryArray[categoryIndex]}`));
    }
  }

  return (
    <div className="flex w-full items-center justify-between">
      <button onClick={handlePrevious}>
        <Arrow />
      </button>
      <span className="uppercase">{category}</span>
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
