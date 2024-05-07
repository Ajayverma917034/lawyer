import React, { useState } from "react";

const CapitalGain = ({ inputValues, setInputValues }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleCheckboxChange = (option) => {
    const updatedOptions = [...selectedOptions];
    const index = updatedOptions.indexOf(option);

    if (index === -1) {
      updatedOptions.push(option);
    } else {
      updatedOptions.splice(index, 1);
    }

    setSelectedOptions(updatedOptions);

    // Reset input values for this option when it's unchecked
    if (!updatedOptions.includes(option)) {
      const newInputValues = { ...inputValues };
      delete newInputValues[option];
      setInputValues(newInputValues);
    }
  };

  const handleInputChange = (e, option) => {
    setInputValues({ ...inputValues, [option]: e.target.value });
  };

  return (
    <div className=" p-0 md:p-4 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
        <div className="flex items-start justify-start">
          <label htmlFor="checkbox1" className="flex items-center">
            <input
              type="checkbox"
              id="checkbox1"
              className="mr-2 mt-2"
              checked={selectedOptions.includes("Option 1")}
              onChange={() => handleCheckboxChange("Option 1")}
            />
          </label>
          <div className="">
            <p className="font-semibold text-xl text-black">
              Equity Investment
            </p>
            <span className="text- text-gray-dark">
              Profits from brief investments in equity.
            </span>
            <div className="flex gap-5 mt-3 flex-wrap">
              <div className="flex flex-col max-sm:w-full">
                <label htmlFor="option1_Field1" className="font-medium">
                  Short term (&lt; 1 Year)
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    ₹
                  </span>
                  <input
                    type="number"
                    name="option1_Field1"
                    className="p-2 md:p-3 !pl-6 max-md:text-base bg-white border-2 border-[#b3b3b3] rounded-md outline-none max-sm:w-full"
                    value={inputValues["Option 1_Field1"] || ""}
                    onChange={(e) => handleInputChange(e, "Option 1_Field1")}
                    disabled={!selectedOptions.includes("Option 1")}
                  />
                </div>
              </div>
              <div className="flex flex-col max-sm:w-full">
                <label htmlFor="option1_Field1" className="font-medium">
                  Short term (&lt; 1 Year)
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    ₹
                  </span>
                  <input
                    type="number"
                    name="option1_Field1"
                    className="p-2 md:p-3 !pl-6 max-md:text-base bg-white border-2 border-[#b3b3b3] rounded-md outline-none max-sm:w-full"
                    value={inputValues["Option 1_Field1"] || ""}
                    onChange={(e) => handleInputChange(e, "Option 1_Field1")}
                    disabled={!selectedOptions.includes("Option 1")}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* second section  */}
        <div className="flex items-start justify-start">
          <label htmlFor="checkbox1" className="flex items-center">
            <input
              type="checkbox"
              id="checkbox1"
              className="mr-2 mt-2"
              checked={selectedOptions.includes("Option 1")}
              onChange={() => handleCheckboxChange("Option 1")}
            />
          </label>
          <div className="">
            <p className="font-semibold text-xl text-black">Debt investments</p>
            <span className="text- text-gray-dark">
              Profits from brief investments in equity.
            </span>
            <div className="flex gap-5 mt-3 flex-wrap">
              <div className="flex flex-col max-sm:w-full">
                <label htmlFor="option1_Field1" className="font-medium">
                  Short term (&lt; 1 Year)
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    ₹
                  </span>
                  <input
                    type="number"
                    name="option1_Field1"
                    className="p-2 md:p-3 !pl-6 max-md:text-base bg-white border-2 border-[#b3b3b3] rounded-md outline-none max-sm:w-full"
                    value={inputValues["Option 1_Field1"] || ""}
                    onChange={(e) => handleInputChange(e, "Option 1_Field1")}
                    disabled={!selectedOptions.includes("Option 1")}
                  />
                </div>
              </div>
              <div className="flex flex-col max-sm:w-full">
                <label htmlFor="option1_Field1" className="font-medium">
                  Short term (&lt; 1 Year)
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    ₹
                  </span>
                  <input
                    type="number"
                    name="option1_Field1"
                    className="p-2 md:p-3 !pl-6 max-md:text-base bg-white border-2 border-[#b3b3b3] rounded-md outline-none max-sm:w-full"
                    value={inputValues["Option 1_Field1"] || ""}
                    onChange={(e) => handleInputChange(e, "Option 1_Field1")}
                    disabled={!selectedOptions.includes("Option 1")}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* third section  */}
        <div className="flex items-start justify-start">
          <label htmlFor="checkbox1" className="flex items-center">
            <input
              type="checkbox"
              id="checkbox1"
              className="mr-2 mt-2"
              checked={selectedOptions.includes("Option 1")}
              onChange={() => handleCheckboxChange("Option 1")}
            />
          </label>
          <div className="">
            <p className="font-semibold text-xl text-black">Unlisted shares</p>
            <span className="text- text-gray-dark">
              Profits from brief investments in equity.
            </span>
            <div className="flex gap-5 mt-3 flex-wrap">
              <div className="flex flex-col max-sm:w-full">
                <label htmlFor="option1_Field1" className="font-medium">
                  Short term (&lt; 1 Year)
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    ₹
                  </span>
                  <input
                    type="number"
                    name="option1_Field1"
                    className="p-2 md:p-3 !pl-6 max-md:text-base bg-white border-2 border-[#b3b3b3] rounded-md outline-none max-sm:w-full"
                    value={inputValues["Option 1_Field1"] || ""}
                    onChange={(e) => handleInputChange(e, "Option 1_Field1")}
                    disabled={!selectedOptions.includes("Option 1")}
                  />
                </div>
              </div>
              <div className="flex flex-col max-sm:w-full">
                <label htmlFor="option1_Field1" className="font-medium">
                  Short term (&lt; 1 Year)
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    ₹
                  </span>
                  <input
                    type="number"
                    name="option1_Field1"
                    className="p-2 md:p-3 !pl-6 max-md:text-base bg-white border-2 border-[#b3b3b3] rounded-md outline-none max-sm:w-full"
                    value={inputValues["Option 1_Field1"] || ""}
                    onChange={(e) => handleInputChange(e, "Option 1_Field1")}
                    disabled={!selectedOptions.includes("Option 1")}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* forth section  */}
        <div className="flex items-start justify-start">
          <label htmlFor="checkbox1" className="flex items-center">
            <input
              type="checkbox"
              id="checkbox1"
              className="mr-2 mt-2"
              checked={selectedOptions.includes("Option 1")}
              onChange={() => handleCheckboxChange("Option 1")}
            />
          </label>
          <div className="">
            <p className="font-semibold text-xl text-black">
              Real estate or Land
            </p>
            <span className="text- text-gray-dark">
              Profits from brief investments in equity.
            </span>
            <div className="flex gap-5 mt-3 flex-wrap">
              <div className="flex flex-col max-sm:w-full">
                <label htmlFor="option1_Field1" className="font-medium">
                  Short term (&lt; 1 Year)
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    ₹
                  </span>
                  <input
                    type="number"
                    name="option1_Field1"
                    className="p-2 md:p-3 !pl-6 max-md:text-base bg-white border-2 border-[#b3b3b3] rounded-md outline-none max-sm:w-full"
                    value={inputValues["Option 1_Field1"] || ""}
                    onChange={(e) => handleInputChange(e, "Option 1_Field1")}
                    disabled={!selectedOptions.includes("Option 1")}
                  />
                </div>
              </div>
              <div className="flex flex-col max-sm:w-full">
                <label htmlFor="option1_Field1" className="font-medium">
                  Short term (&lt; 1 Year)
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    ₹
                  </span>
                  <input
                    type="number"
                    name="option1_Field1"
                    className="p-2 md:p-3 !pl-6 max-md:text-base bg-white border-2 border-[#b3b3b3] rounded-md outline-none max-sm:w-full"
                    value={inputValues["Option 1_Field1"] || ""}
                    onChange={(e) => handleInputChange(e, "Option 1_Field1")}
                    disabled={!selectedOptions.includes("Option 1")}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional options can be added similarly */}
      </div>
    </div>
  );
};

export default CapitalGain;
