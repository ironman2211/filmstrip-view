import React, { useState } from "react";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { useMediaQuery } from 'react-responsive';

function Filmstrip({ templates, onThumbnailClick }) {
  const [startIndex, setStartIndex] = useState(0);

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 700px)' });

  let templateCountScreenSize = 4; 

  if (isTabletOrMobile) {
    templateCountScreenSize = 1; 
  }

  const handleNextClick = () => {
    if (startIndex + templateCountScreenSize < templates.length) {
      setStartIndex(startIndex + templateCountScreenSize);
    }
  };

  const handlePreviousClick = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - templateCountScreenSize);
    }
  };

  return (
    <div className="flex flex-row gap-5 m-auto items-center justify-center">
      <button
        onClick={handlePreviousClick}
        disabled={startIndex === 0}
        className="bg-white rounded-full shadow-lg p-3 flex flex-col"
      >
        <GrFormPrevious size={20} />
      </button>
      <div className="flex flex-row gap-5 flex-wrap w-full overflow-x-auto">
        {templates.slice(startIndex, startIndex + templateCountScreenSize).map((template) => (
          <div key={template.id} className="flex-shrink-0 max-w-xs sm:max-w-none">
            <img
              className="hover:cursor-pointer border-4 hover:border-red-500 hover:border-opacity-50 hover:shadow-lg"
              src={`${import.meta.env.VITE_BACKEND_URL}/api/images/${template.thumbnail}`}
              alt={template.description}
              onClick={() => onThumbnailClick(template)}
            />
          </div>
        ))}
      </div>
      <button
        onClick={handleNextClick}
        disabled={startIndex + templateCountScreenSize >= templates.length}
        className="bg-white rounded-full shadow-lg p-3 flex flex-col"
      >
        <GrFormNext />
      </button>
    </div>
  );
}

export default Filmstrip;
