import React, { useState } from "react";
import SelectField2 from "../../../common/SelectField2";
import InputField2 from "../../../common/InputField2";
import InputFiedWithRupeeIcon from "../../../common/InputFieldWithRuppeeIcon";
import CapitalGain from "./CapitalGain";
import DeductionSection from "./DeductionSection";

const houseStatus = [
  { id: 1, value: "owned", label: "Owned" },
  { id: 2, value: "rented", label: "Rented" },
];

const financialYear = [
  { id: 1, value: "2023-24", label: "2023-24" },
  { id: 2, value: "2024-25", label: "2024-25" },
];

const ageRanage = [
  { id: 1, value: "below60", label: "Below 60" },
  { id: 2, value: "between60and80", label: "Between 60 and 80" },
  { id: 3, value: "above80", label: "Above 80" },
];

const cityType = [
  { id: 1, value: "metro", label: "Metro" },
  { id: 2, value: "non-metro", label: "Non-Metro" },
];

const earningType = [
  { id: 1, value: "salaried", label: "Salaried" },
  { id: 2, value: "seftEmployed", label: "selfEmployed" },
];

const IncomeTaxCalculator = () => {
  const [data, setData] = useState({});
  const [inputValues, setInputValues] = useState({});
  const [deductionData, setDeductionData] = useState({});

  return (
    <div className="px-3 md:px-22 lg:px-32 py-3 pt-10 md:pt-24 flex flex-col bg-white-light">
      <h1 className="text-3xl mb-2 font-medium max-sm:text-center">
        Income Tax Calculator
      </h1>
      <div className="bg-white shadow-medium-shadow p-5 md:p-10 flex flex-col rounded-md">
        {/* Basic Details section  */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">Basic Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10">
            <SelectField2
              label={"Financial Year"}
              options={financialYear}
              placeholder={"Select Financial Year"}
              data={data}
              setData={setData}
              required={true}
            />
            <SelectField2
              label={"My Age is"}
              options={ageRanage}
              placeholder={""}
              data={data}
              setData={setData}
              required={true}
            />
            <SelectField2
              label={"My City is"}
              options={cityType}
              placeholder={""}
              data={data}
              setData={setData}
              required={true}
            />
            <SelectField2
              label={"My House is"}
              options={houseStatus}
              placeholder={""}
              data={data}
              setData={setData}
              required={true}
            />
            <SelectField2
              label={"My earning comes from"}
              options={earningType}
              placeholder={""}
              data={data}
              setData={setData}
              required={true}
            />
          </div>
        </div>
        <hr
          className="text text-[#b3b3b3] mt-10 mb-5"
          style={{ height: "3px" }}
        />

        {/* Income details section  */}
        <div>
          <div className="flex items-center">
            <h2 className="text-2xl font-semibold mb-2">Income Details</h2>
            <div className="flex gap-5 ml-10">
              <div className="flex items-center gap-1">
                <input
                  type="radio"
                  id="monthly"
                  name="income-plan"
                  value="monthly"
                  checked={true}
                />
                <label htmlFor="monthly">Monthly </label>
              </div>
              <div className="flex items-center gap-1">
                <input
                  type="radio"
                  id="annual"
                  name="income-plan"
                  value="annual"
                />
                <label htmlFor="annual">Annual </label>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10">
            <InputFiedWithRupeeIcon
              label="My Basic salary"
              id="basicSalary"
              // placeholder="₹"
              data={data}
              setData={setData}
              required={true}
              type="number"
              maxLimit={10}
            />
          </div>
        </div>
        {/*other Income details section  */}
        <div className="mt-10">
          <div className="flex items-center">
            <h2 className="text-2xl font-semibold mb-2">
              Other Income Details
            </h2>
            <div className="flex gap-5 ml-10">
              <div className="flex items-center gap-1">
                <input
                  type="radio"
                  id="monthly"
                  name="other-income-plan"
                  value="monthly"
                  checked={true}
                />
                <label htmlFor="monthly">Monthly </label>
              </div>
              <div className="flex items-center gap-1">
                <input
                  type="radio"
                  id="annual"
                  name="other-income-plan"
                  value="annual"
                />
                <label htmlFor="annual">Annual </label>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10">
            <InputField2
              label="Income from interest on savings"
              id="interestIncome"
              placeholder="₹"
              data={data}
              setData={setData}
              required={true}
            />
            <InputField2
              label="Interest on deposits"
              id="depositInterest"
              placeholder="₹"
              data={data}
              setData={setData}
              required={true}
            />
            <InputField2
              label="Income from rentals"
              id="retalsIncome"
              placeholder="₹"
              data={data}
              setData={setData}
              required={true}
            />
            <InputField2
              label="Income from any other source"
              id="otherSourceIncome"
              placeholder="₹"
              data={data}
              setData={setData}
              required={true}
            />
          </div>
        </div>
        <hr className="text text-[#b3b3b3] mt-10" style={{ height: "3px" }} />
        {/* Exclusions section  */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-2">Exclusions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-10">
            <InputFiedWithRupeeIcon
              label="HRA recieved"
              id="hraRecieved"
              // placeholder="₹"
              data={data}
              setData={setData}
              required={true}
              type="number"
              maxLimit={10}
            />
            <InputFiedWithRupeeIcon
              label="Special allowance"
              id="specialAllowance"
              data={data}
              setData={setData}
              required={true}
              type="number"
              maxLimit={10}
            />
            <InputFiedWithRupeeIcon
              label="Dearness allowance"
              id="dearnessAllowance"
              data={data}
              setData={setData}
              required={true}
              type="number"
              maxLimit={10}
            />
            <InputFiedWithRupeeIcon
              label="EPF contribution by self"
              id="epfContribution"
              data={data}
              setData={setData}
              required={true}
              type="number"
              maxLimit={10}
            />
          </div>
        </div>
        <hr className="text text-[#b3b3b3] mt-10" style={{ height: "3px" }} />
        {/* Exclusions section  */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-2">Capital Gains</h2>
          <CapitalGain
            inputValues={inputValues}
            setInputValues={setInputValues}
          />
        </div>
        <hr className="text text-[#b3b3b3] mt-10" style={{ height: "3px" }} />
        {/* Deduction section  */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-2">Deductions</h2>
          <DeductionSection
            inputValues={deductionData}
            setInputValues={setDeductionData}
          />
        </div>
        <div className="flex justify-center items-center">
          <button className="btn-dark text-2xl">Calculate Now</button>
        </div>
      </div>
    </div>
  );
};

export default IncomeTaxCalculator;
