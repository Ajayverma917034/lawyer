import React, { useState } from "react";
import ProgressBar from "../../components/contract/ProgressBar";
import FormStepper from "../../components/contract/FormStepper";

const CreateContract = () => {
  const [formData, setFormData] = useState({});
  const [progress, setProgress] = useState(0);

  const handleFormDataChange = (data) => {
    setFormData(data);
    // Calculate progress based on filled fields
    const filledFieldsCount = Object.values(data).filter(
      (value) => value.trim() !== ""
    ).length;
    setProgress((filledFieldsCount / getTotalFieldsCount()) * 100);
  };

  const getTotalFieldsCount = () => {
    // Sum of all fields in all steps
    return steps.reduce((total, step) => total + step.fields.length, 0);
  };

  // Define your steps here
  const steps = [
    {
      title: "Step 1",
      fields: [
        { name: "field1", label: "Field 1" },
        { name: "field2", label: "Field 2" },
      ],
    },
    {
      title: "Step 2",
      fields: [
        { name: "field3", label: "Field 3" },
        { name: "field4", label: "Field 4" },
      ],
    },
    // Add more steps as needed
  ];

  return (
    <div className="w-full bg-white-light min-h-screen px-3 md:px-22 lg:px-28 pt-10 grid grid-cols-7">
      <div className="col-span-3">
        <h2 className="text-3xl font-medium">Remote Work Agreement</h2>
        <div className="min-h-[20rem] shadow-light-shadow mt-2 p-2">
          <FormStepper steps={steps} onFormDataChange={handleFormDataChange} />
        </div>
      </div>
      <div className="pl-8 col-span-4">
        <div>
          <ProgressBar progress={progress} />
        </div>
        <div
          className="shadow-light-shadow mt-3 min-h-[10rem]"
          style={{ maxHeight: "calc(100vh - 4rem)" }}
        >
          {/* Display form data here */}
          {Object.entries(formData).map(([fieldName, value]) => (
            <div key={fieldName}>
              <p>
                {fieldName}: {value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CreateContract;
