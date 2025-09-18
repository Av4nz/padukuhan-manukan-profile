import React from "react";

const PopulationCard = ({ title, value }) => {
  return (
    <div className="bg-primary-900 text-white rounded-2xl shadow-md p-6 flex flex-col items-center justify-center">
      <h3 className="text-lg font-medium mb-2 text-center">{title}</h3>
      <p className="text-3xl font-bold">{value}</p>
    </div>
  );
};

export default PopulationCard;
