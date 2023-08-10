"use client";
import CategoriesDisplay from "./CategoriesDisplay";
import CategorySelector from "./CategorySelector";
const ExerciseCategory = () => {
  return (
    <section className="flex flex-col justify-between w-96  gap-6">
      <CategorySelector />
      <CategoriesDisplay />
    </section>
  );
};

export default ExerciseCategory;
