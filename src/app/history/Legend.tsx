const Legend = () => {
  return (
    <div
      className="border border-black w-fit px-7 py-6 rounded-3xl bg-gray-600"
      id="history-legend"
    >
      <h1 className="text-lg text-yellow-100">Legend</h1>
      <ol className="w-fit  grid grid-cols-2 gap-5 py-6 list-inside list-disc marker:text-xl ">
        <li className="marker:text-red-300 items-center text-red-300">
          0 - 50 exercises
        </li>
        <li className="marker:text-yellow-300 text-yellow-300">
          50 -100 exercises
        </li>
        <li className="marker:text-green-300 text-green-300">
          100 - 200 exercises
        </li>
        <li className="marker:text-green-700 text-green-700">
          200 + exercises
        </li>
      </ol>
    </div>
  );
};

export default Legend;
