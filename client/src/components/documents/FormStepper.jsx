import React, { useState } from "react";

const FormStepper = ({
  steps,
  onFormDataChange,
  print,
  progress,
  setProgress,
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
    updateProgress(currentStep + 1);
  };

  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
    updateProgress(currentStep - 1);
  };

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    onFormDataChange({ ...formData, [name]: value });
  };

  const handleFinish = () => {};
  const handleDownload = () => {
    print();
  };

  const updateProgress = (step) => {
    const progress = (step / steps.length) * 100;
    setProgress(progress);
  };

  return (
    <div className="flex flex-col min-h-[35rem] h-full justify-between">
      {/* <div className="flex">
        {steps?.map((step, index) => (
          <div key={index}>
            <p
              className={`${
                index === currentStep ? "font-medium" : "hidden"
              } text-2xl text-blue mb-3`}
            >
              {step.title}
            </p>
          </div>
        ))}
      </div> */}
      <form className="flex flex-col justify-between h-full">
        {steps[currentStep].fields.map((field, index) => (
          <div className="flex flex-col mt-3" key={index}>
            <label
              htmlFor={field.name}
              className="text-base md:text-[14px] text-black font-normal"
            >
              {field.label}
            </label>
            {field.type === "date" && (
              <input
                type="date"
                className="p-2 md:p-3 max-md:text-base bg-white text-gray-dark focus:outline-none outline-none rounded-md border-2 border-[#b3b3b3]"
                name={field.name}
                onChange={handleFieldChange}
                value={formData[field.name] || ""}
              />
            )}
            {field.type === "email" && (
              <input
                type="email"
                className="p-2 md:p-3 max-md:text-base bg-white text-gray-dark focus:outline-none outline-none rounded-md border-2 border-[#b3b3b3]"
                name={field.name}
                onChange={handleFieldChange}
                value={formData[field.name] || ""}
              />
            )}
            {field.type === "number" && (
              <input
                type="number"
                className="p-2 md:p-3 max-md:text-base bg-white text-gray-dark focus:outline-none outline-none rounded-md border-2 border-[#b3b3b3]"
                name={field.name}
                onChange={handleFieldChange}
                value={formData[field.name] || ""}
              />
            )}
            {field.type === "text" && (
              <input
                type="text"
                className="p-2 md:p-3 max-md:text-base bg-white text-gray-dark focus:outline-none outline-none rounded-md border-2 border-[#b3b3b3]"
                name={field.name}
                onChange={handleFieldChange}
                value={formData[field.name] || ""}
              />
            )}
            {field.type === "textarea" && (
              <textarea
                className="p-2 md:p-3 max-md:text-base bg-white text-gray-dark focus:outline-none outline-none rounded-md border-2 border-[#b3b3b3]"
                name={field.name}
                onChange={handleFieldChange}
                value={formData[field.name] || ""}
                style={{ whiteSpace: "pre-line" }}
              />
            )}
            {field.type === "tel" && (
              <input
                type="tel"
                className="p-2 md:p-3 max-md:text-base bg-white text-gray-dark focus:outline-none outline-none rounded-md border-2 border-[#b3b3b3]"
                name={field.name}
                onChange={handleFieldChange}
                value={formData[field.name] || ""}
              />
            )}
            {/* Add more conditions for other field types if needed */}
          </div>
        ))}
      </form>
      <div className="flex mt-5 justify-between">
        <button
          type="button"
          className="btn-dark disabled:cursor-not-allowed
             disabled:bg-opacity-60"
          disabled={currentStep <= 0}
          onClick={handlePrev}
        >
          Prev
        </button>
        {/* Next button */}
        <button
          type="button"
          className="btn-dark disabled:cursor-not-allowed
             disabled:bg-opacity-60"
          disabled={currentStep >= steps.length - 1}
          onClick={handleNext}
        >
          Next
        </button>
      </div>

      {/* Finish and Download buttons */}
      {/* {currentStep === steps.length - 1 && (
        <div className="flex mt-5 justify-between">
          <button
            type="button"
            className="btn-dark disabled:cursor-not-allowed
               disabled:bg-opacity-60"
            onClick={handleFinish}
          >
            Finish
          </button>
          <button
            type="button"
            className="btn-dark disabled:cursor-not-allowed
               disabled:bg-opacity-60"
            onClick={handleDownload}
          >
            Download
          </button>
        </div>
      )} */}
    </div>
  );
};

export default FormStepper;
