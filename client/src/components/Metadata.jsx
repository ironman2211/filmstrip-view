import React from "react";

function Metadata({ template }) {
  return (
    <div className=" rounded-lg p-3 flex flex-col gap-2 w-[95%] md:w-[60%]  m-auto ">
      <div className="flex flex-row gap-2 w-full justify-between">
        <p>ID: {template.id}</p>
        <b className="text-yellow-600  ">Cost: {template.cost} $ </b>
      </div>
      <p className="text-2xl font-bold text-cyan-800">{template.title}</p>
      <h2 className="text-sm text-gray-600">{template.description}</h2>
    </div>
  );
}

export default Metadata;
