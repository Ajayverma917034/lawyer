import React, { useState } from "react";

const FormStepper = ({ steps, onFormDataChange }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    onFormDataChange({ ...formData, [name]: value }); // Update parent component
  };

  return (
    <div>
      <div className="flex gap-3">
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
      </div>
      <form>
        {steps[currentStep].fields.map((field, index) => (
          //   <div key={index} className="flex flex-col">
          //     {/* Render your form fields here */}
          //     <label>{field.label}</label>
          //     <input
          //       type="text"
          //       name={field.name}
          //       placeholder={field.label}
          //       value={formData[field.name] || ""}
          //       onChange={handleFieldChange}
          //     />
          //   </div>

          <div className="flex flex-col gap-1">
            <label
              htmlFor="id"
              className="text-base md:text-[14px] text-black font-normal"
            >
              {field.label}
            </label>
            <input
              type="text"
              className="p-2 md:p-3 max-md:text-base bg-white text-gray-dark focus:outline-none outline-none rounded-md border-2 border-[#b3b3b3]"
              name={field.name}
              //   id={field.name}
              onChange={handleFieldChange}
              value={formData[field.name] || ""}
              //   placeholder=}
              //   required={required}
            />
          </div>
        ))}
        <div>
          {/* Next button */}
          {currentStep < steps.length - 1 && (
            <button type="button" onClick={handleNext}>
              Next
            </button>
          )}
          {/* Previous button */}
          {currentStep > 0 && (
            <button type="button" onClick={handlePrev}>
              Previous
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default FormStepper;
