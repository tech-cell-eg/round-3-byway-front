const CourseReviewResults = () => {
  return (
    <div className="flex flex-nowrap md:flex-wrap sm:flex-wrap gap-4 my-8">
      {/* Total Reviews */}
      <div className="bg-white shadow-sm border border-gray-300 rounded-xl p-4 text-center">
        <p className="text-gray-500 text-sm mb-2">Total Reviews</p>
        <p className="text-2xl font-bold text-gray-900">1000</p>
      </div>

      {/* 1 star reviews */}
      <div className="bg-white shadow-sm border border-gray-300  rounded-xl p-4 text-center">
        <p className="text-gray-500 text-sm mb-2">1 star reviews</p>
        <div className="flex items-center justify-center gap-2">
          <p className="text-2xl font-bold text-gray-900">100</p>
          <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
            1.0
          </span>
        </div>
      </div>

      {/* 2 star reviews */}
      <div className="bg-white shadow-sm border border-gray-300  rounded-xl p-4 text-center">
        <p className="text-gray-500 text-sm mb-2">2 star reviews</p>
        <div className="flex items-center justify-center gap-2">
          <p className="text-2xl font-bold text-gray-900">100</p>
          <span className="bg-yellow-700 text-white text-xs px-2 py-0.5 rounded-full">
            2.0
          </span>
        </div>
      </div>

      {/* 3 star reviews */}
      <div className="bg-white shadow-sm border border-gray-300  rounded-xl p-4 text-center">
        <p className="text-gray-500 text-sm mb-2">3 star reviews</p>
        <div className="flex items-center justify-center gap-2">
          <p className="text-2xl font-bold text-gray-900">100</p>
          <span className="bg-yellow-400 text-white text-xs px-2 py-0.5 rounded-full">
            3.0
          </span>
        </div>
      </div>

      {/* 4 star reviews */}
      <div className="bg-white shadow-sm border border-gray-300  rounded-xl p-4 text-center">
        <p className="text-gray-500 text-sm mb-2">4 star reviews</p>
        <div className="flex items-center justify-center gap-2">
          <p className="text-2xl font-bold text-gray-900">100</p>
          <span className="bg-green-400 text-white text-xs px-2 py-0.5 rounded-full">
            4.0
          </span>
        </div>
      </div>

      {/* 5 star reviews */}
      <div className="bg-white shadow-sm border border-gray-300  rounded-xl p-4 text-center">
        <p className="text-gray-500 text-sm mb-2">5 star reviews</p>
        <div className="flex items-center justify-center gap-2">
          <p className="text-2xl font-bold text-gray-900">100</p>
          <span className="bg-green-600 text-white text-xs px-2 py-0.5 rounded-full">
            5.0
          </span>
        </div>
      </div>
    </div>
  );
};

export default CourseReviewResults;
