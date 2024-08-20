import React from "react";

const Progreso = ({ steps, currentStep }) => {
  return (
    <div className="flex justify-between items-center w-full">
      {steps.map((step, index) => (
        <div key={index} className="relative flex-1">
          <div className="flex items-center justify-center">
            <div
              className={`rounded-full h-8 w-8 flex items-center justify-center
                ${
                  index + 1 <= currentStep
                    ? "bg-primarycolor text-white transition-colors duration-200"
                    : "bg-blue-50 text-blue-600"
                }
              `}
            >
              {index + 1}
            </div>
          </div>
          {index !== steps.length - 1 && (
            <div
              className={`absolute top-1/2 transform -translate-y-1/2 h-1 w-full mx-4 transition-colors duration-200 
                ${
                  index + 1 < currentStep
                    ? "bg-primarycolor"
                    : "bg-blue-50"
                }
              `}
              style={{ left: "50%", right: "-50%" }}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Progreso;
