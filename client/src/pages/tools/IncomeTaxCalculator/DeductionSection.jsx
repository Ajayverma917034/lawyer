import React, { useState } from "react";

const DeductionSection = ({ inputValues, setInputValues }) => {
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

  console.log(inputValues);
  return (
    <div className="px-0 md:p-4 w-full sm:ml-0 md:ml-10 lg:ml-16">
      <div className="grid grid-cols-1 gap-5 md:gap-10 w-full">
        {/* Basic Deductions - 80C deductions (max. allowed 1.5L) */}
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
          <div>
            <p className="font-semibold text-xl text-black">
              Basic Deductions - 80C deductions (max. allowed 1.5L)
            </p>
            <span className="text-base text-gray-dark">
              Amount invested in PPF, VPF, FDs, ELSS funds, Term insurance, LIC,
              etc.
            </span>
            <div className="flex flex-col">
              {/* 1 a  */}
              <div className="flex gap-5 md:gap-20 lg:gap-32 mt-3 flex-wrap">
                {/* 1 */}
                <div className="flex flex-col max-sm:w-full">
                  <label htmlFor="option1_Field1" className="font-medium">
                    PPF (Public provident fund)
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
                {/* 2 */}
                <div className="flex flex-col max-sm:w-full">
                  <label htmlFor="option1_Field1" className="font-medium">
                    Fixed Deposit
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
              {/* 1 b  */}
              <div className="flex gap-5 md:gap-20 lg:gap-32 mt-3 flex-wrap">
                {/* 1 */}
                <div className="flex flex-col max-sm:w-full">
                  <label htmlFor="option1_Field1" className="font-medium">
                    ELSS mutual funds
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

                {/* 2 */}
                <div className="flex flex-col max-sm:w-full">
                  <label htmlFor="option1_Field1" className="font-medium">
                    Term insurance
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
        </div>
        {/* Health insurance premium - 80D */}
        <div className="flex items-start justify-start">
          <label htmlFor="checkbox2" className="flex items-center">
            <input
              type="checkbox"
              id="checkbox2"
              className="mr-2 mt-2"
              checked={selectedOptions.includes("Option 2")}
              onChange={() => handleCheckboxChange("Option 2")}
            />
          </label>
          <div>
            <p className="font-semibold text-xl text-black">
              Health insurance premium - 80D
            </p>
            <span className="text-base text-gray-dark">
              For self, family, parents
            </span>
            <div className="flex gap-5 md:gap-20 lg:gap-32 mt-3 flex-wrap">
              {/* 1 */}
              <div className="flex flex-col max-sm:w-full">
                <label htmlFor="option2_Field1" className="font-medium">
                  Premium for (self/family)
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    ₹
                  </span>
                  <input
                    type="number"
                    name="option2_Field1"
                    className="p-2 md:p-3 !pl-6 max-md:text-base bg-white border-2 border-[#b3b3b3] rounded-md outline-none max-sm:w-full"
                    value={inputValues["Option 2_Field1"] || ""}
                    onChange={(e) => handleInputChange(e, "Option 2_Field1")}
                    disabled={!selectedOptions.includes("Option 1")}
                  />
                </div>
              </div>
              {/* 2 */}
              <div className="flex flex-col max-sm:w-full">
                <label htmlFor="option2_Field2" className="font-medium">
                  Premium for parents
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    ₹
                  </span>
                  <input
                    type="number"
                    name="option2_Field2"
                    className="p-2 md:p-3 !pl-6 max-md:text-base bg-white border-2 border-[#b3b3b3] rounded-md outline-none max-sm:w-full"
                    value={inputValues["Option 2_Field2"] || ""}
                    onChange={(e) => handleInputChange(e, "Option 2_Field2")}
                    disabled={!selectedOptions.includes("Option 2")}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* NPS investment - 80CCD(1B) (max. 50,000) */}
        <div className="flex items-start justify-start">
          <label htmlFor="checkbox3" className="flex items-center">
            <input
              type="checkbox"
              id="checkbox3"
              className="mr-2 mt-2"
              checked={selectedOptions.includes("Option 3")}
              onChange={() => handleCheckboxChange("Option 3")}
            />
          </label>
          <div>
            <p className="font-semibold text-xl text-black">
              NPS investment - 80CCD(1B) (max. 50,000)
            </p>
            <span className="text-base text-gray-dark">
              This is over and above the investment limit of 1.5 lacs unders
              section 80C
            </span>
            <div className="flex gap-5 md:gap-20 lg:gap-32 mt-3 flex-wrap">
              <div className="flex flex-col max-sm:w-full">
                <label htmlFor="option3_Field1" className="font-medium">
                  Premium for (self/family)
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    ₹
                  </span>
                  <input
                    type="number"
                    name="option3_Field1"
                    className="p-2 md:p-3 !pl-6 max-md:text-base bg-white border-2 border-[#b3b3b3] rounded-md outline-none max-sm:w-full"
                    value={inputValues["Option 3_Field1"] || ""}
                    onChange={(e) => handleInputChange(e, "Option 3_Field1")}
                    disabled={!selectedOptions.includes("Option 3")}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interests on loans - 80E/80EEA */}
        <div className="flex items-start justify-start">
          <label htmlFor="checkbox4" className="flex items-center">
            <input
              type="checkbox"
              id="checkbox4"
              className="mr-2 mt-2"
              checked={selectedOptions.includes("Option 4")}
              onChange={() => handleCheckboxChange("Option 4")}
            />
          </label>
          <div>
            <p className="font-semibold text-xl text-black">
              Interests on loans - 80E/80EEA
            </p>
            <span className="text-base text-gray-dark">
              Interest on Education loan, Home loan
            </span>
            <div className="flex gap-5 md:gap-20 lg:gap-32 mt-3 flex-wrap">
              {/* 1 */}
              <div className="flex flex-col max-sm:w-full">
                <label htmlFor="option4_Field1" className="font-medium">
                  Interest on education loan
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    ₹
                  </span>
                  <input
                    type="number"
                    name="option4_Field1"
                    className="p-2 md:p-3 !pl-6 max-md:text-base bg-white border-2 border-[#b3b3b3] rounded-md outline-none max-sm:w-full"
                    value={inputValues["Option 4_Field1"] || ""}
                    onChange={(e) => handleInputChange(e, "Option 4_Field1")}
                    disabled={!selectedOptions.includes("Option 4")}
                  />
                </div>
              </div>
              {/* 2 */}
              <div className="flex flex-col max-sm:w-full">
                <label htmlFor="option4_Field2" className="font-medium">
                  Premium for (self/family)
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    ₹
                  </span>
                  <input
                    type="number"
                    name="option4_Field2"
                    className="p-2 md:p-3 !pl-6 max-md:text-base bg-white border-2 border-[#b3b3b3] rounded-md outline-none max-sm:w-full"
                    value={inputValues["Option 4_Field2"] || ""}
                    onChange={(e) => handleInputChange(e, "Option 4_Field2")}
                    disabled={!selectedOptions.includes("Option 4")}
                  />
                </div>
              </div>
              {/* 3 */}
              <div className="flex flex-col max-sm:w-full">
                <label htmlFor="option4_Field3" className="font-medium">
                  Rented property home loan
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    ₹
                  </span>
                  <input
                    type="number"
                    name="option4_Field3"
                    className="p-2 md:p-3 !pl-6 max-md:text-base bg-white border-2 border-[#b3b3b3] rounded-md outline-none max-sm:w-full"
                    value={inputValues["Option 4_Field3"] || ""}
                    onChange={(e) => handleInputChange(e, "Option 4_Field3")}
                    disabled={!selectedOptions.includes("Option 4")}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Donation to charities - 80G */}
        <div className="flex items-start justify-start">
          <label htmlFor="checkbox5" className="flex items-center">
            <input
              type="checkbox"
              id="checkbox5"
              className="mr-2 mt-2"
              checked={selectedOptions.includes("Option 5")}
              onChange={() => handleCheckboxChange("Option 5")}
            />
          </label>
          <div>
            <p className="font-semibold text-xl text-black">
              Donation to charities - 80G
            </p>
            <span className="text-base text-gray-dark">
              Mention those eligible for tax deduction
            </span>
            <div className="flex gap-5 md:gap-20 lg:gap-32 mt-3 flex-wrap">
              <div className="flex flex-col max-sm:w-full">
                <label htmlFor="option5_Field1" className="font-medium">
                  Donations made to charity
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    ₹
                  </span>
                  <input
                    type="number"
                    name="option5_Field1"
                    className="p-2 md:p-3 !pl-6 max-md:text-base bg-white border-2 border-[#b3b3b3] rounded-md outline-none max-sm:w-full"
                    value={inputValues["Option 5_Field1"] || ""}
                    onChange={(e) => handleInputChange(e, "Option 5_Field1")}
                    disabled={!selectedOptions.includes("Option 5")}
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

export default DeductionSection;
