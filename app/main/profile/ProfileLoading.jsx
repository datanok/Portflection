import React from "react";

function ProfileLoading() {
  return (
    <div class="w-full mx-auto max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div class="animate-pulse flex flex-col items-center pb-10">
        <div class="w-24 h-24 mb-3 bg-gray-300 rounded-full"></div>
        <div class="w-32 h-6 mb-2 bg-gray-300 rounded"></div>
        <div class="w-20 h-4 bg-gray-300 rounded"></div>
        <div class="flex mt-4 md:mt-6 space-x-4">
          <div class="w-24 h-8 bg-gray-300 rounded"></div>
          <div class="w-24 h-8 bg-gray-300 rounded"></div>
        </div>
      </div>
    </div>
  );
}

export default ProfileLoading;
