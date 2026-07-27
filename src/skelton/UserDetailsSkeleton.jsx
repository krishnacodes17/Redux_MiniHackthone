import React from "react";

function UserDetailsSkeleton() {
  return (
    <section className="max-w-6xl mx-auto px-5 py-10 animate-pulse">

      <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

        {/* Header */}
        <div className="h-52 bg-gray-300 flex items-end justify-center">

          <div className="w-36 h-36 rounded-full bg-gray-200 mb-[-60px]" />

        </div>

        {/* Body */}
        <div className="pt-24 px-8 pb-10">

          {/* Name */}
          <div className="flex flex-col items-center">

            <div className="h-8 w-56 bg-gray-300 rounded" />

            <div className="h-5 w-32 bg-gray-200 rounded mt-4" />

          </div>

          {/* Details */}
          <div className="grid md:grid-cols-2 gap-10 mt-12">

            {/* Left */}
            <div className="space-y-8">

              {[1, 2, 3].map((item) => (
                <div key={item} className="flex gap-4 items-center">

                  <div className="w-10 h-10 rounded-full bg-gray-300" />

                  <div className="flex-1">

                    <div className="h-4 w-24 bg-gray-200 rounded mb-3" />

                    <div className="h-5 w-52 bg-gray-300 rounded" />

                  </div>

                </div>
              ))}

            </div>

            {/* Right */}
            <div className="space-y-8">

              {[1, 2].map((item) => (
                <div key={item} className="flex gap-4">

                  <div className="w-10 h-10 rounded-full bg-gray-300 mt-1" />

                  <div className="flex-1">

                    <div className="h-4 w-28 bg-gray-200 rounded mb-3" />

                    <div className="h-5 w-full bg-gray-300 rounded mb-2" />

                    <div className="h-5 w-2/3 bg-gray-300 rounded mb-2" />

                    <div className="h-5 w-1/2 bg-gray-300 rounded" />

                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default UserDetailsSkeleton;