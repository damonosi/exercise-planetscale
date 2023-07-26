const Legend = ({ className }: { className?: string }) => {
  return (
    <div
      className={`border border-black w-fit px-7 shadow-2xl shadow-orange-600 py-2 rounded-3xl ${className}`}
      id="history-legend"
    >
      <ol className="w-fit  grid grid-cols-2 gap-5 py-6 list-inside list-disc marker:text-xl ">
        <li className="marker:text-red-300 items-center text-red-300">
          0 - 50
        </li>
        <li className="marker:text-yellow-300 text-yellow-300">50 -100</li>
        <li className="marker:text-green-300 text-green-300">100 - 200</li>
        <li className="marker:text-green-700 text-green-700">200 +</li>
      </ol>
    </div>
  );
};

export default Legend;
