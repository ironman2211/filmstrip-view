import React, { useState, useEffect } from "react";
import Filmstrip from "./components/Filmstrip";
import MainImage from "./components/MainImage";
import Metadata from "./components/Metadata";

function App() {
  const [templates, setTemplates] = useState([]);
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/templates`)
      .then((res) => res.json())
      .then((data) => {
        setTemplates(data);
        setSelectedTemplate(data[0]);
      });
  }, []);

  const handleThumbnailClick = (template) => {
    setSelectedTemplate(template);
  };

  return (
    <div className="bg-gradient-to-tr from-cyan-50 to-blue-50 h-screen ">
      {selectedTemplate && (
        <div className="flex flex-col gap-4 w-[95%] md:w-[90%]  m-auto items-center justify-center py-5 ">
          <MainImage template={selectedTemplate} />
          <Metadata template={selectedTemplate} />

          <Filmstrip
            templates={templates}
            onThumbnailClick={handleThumbnailClick}
          />
        </div>
      )}
    </div>
  );
}

export default App;
