import React from "react";

function MainImage({ template }) {
  return (
    <div className="bg-white rounded-lg  p-5 flex flex-col gap-2 border-2 border-gray-200 overflow-hidden h-[50vh]  m-auto items-center justify-center">
      
      <img
        src={`${import.meta.env.VITE_BACKEND_URL}/api/images/${template.image}`}
        alt="Main Image"
        className="w-full h-full rounded-lg object-contain"
      />
    </div>
  );
}

export default MainImage;
