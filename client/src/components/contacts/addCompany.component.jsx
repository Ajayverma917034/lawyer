import { Dialog } from "@mui/material";
import React, { useState } from "react";
import InputField2 from "../../common/InputField2";
import SelectField2 from "../../common/SelectField2";
import TextField2 from "../../common/TextField2";
import { UploadFile } from "@mui/icons-material";

const AddCompany = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(!open);
  };

  const categoryType = [
    {
      key: 1,
      value: "person",
      label: "Person",
    },
    {
      key: 2,
      value: "employ",
      label: "Employ",
    },
  ];
  const [data, setData] = useState({
    name: "",
    nickName: "",
    category: "",
    website: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",

    subCategory: "",
    companyLegalType: "",
    companyGroup: "",
    nationality: "",
    reference: "",
    document: [],
  });

  const companyCategory = [
    {
      key: 1,
      value: "private",
      label: "Private",
    },
    {
      key: 2,
      value: "public",
      label: "Public",
    },
  ];

  const handleSave = (e) => {
    e.preventDefault();

    console.log(data);
    // api call here
    setOpen(!open);
  };
  return (
    <Dialog
      onClose={handleClose}
      open={open}
      className=""
      disableScrollLock={true}
    >
      <h2 className="text-xl md:text-2xl font-medium mt-4 text-center">
        Add New Company Contacts
      </h2>
      <form
        className="p-3 md:px-10 flex gap-2 flex-col max-md:min-w-[80vw] md:min-w-[35rem]"
        onSubmit={handleSave}
      >
        <div className="grid grid-cols-1">
          <InputField2
            label="Name"
            id="name"
            placeholder=""
            data={data}
            setData={setData}
            required={true}
          />
        </div>
        <div className="grid grid-cols-1">
          <InputField2
            label="Nick Name"
            id="nickName"
            placeholder=""
            data={data}
            setData={setData}
            required={true}
          />
        </div>
        <div className="grid grid-cols-1  mt-3">
          <SelectField2
            label="Category"
            id="category"
            data={data}
            setData={setData}
            options={companyCategory}
            required={true}
            placeholder={"-- choose --"}
          />
        </div>

        <div className="grid grid-cols-1  mt-3">
          <InputField2
            label="Website"
            id="website"
            data={data}
            setData={setData}
            required={true}
          />
        </div>
        <div className="grid grid-cols-1  mt-3">
          <InputField2
            label="Email"
            id="email"
            data={data}
            setData={setData}
            required={true}
          />
        </div>
        <div className="grid grid-cols-1  mt-3">
          <InputField2
            label="Phone"
            id="phone"
            data={data}
            setData={setData}
            required={true}
          />
        </div>

        <div className="grid grid-cols-1  mt-3">
          <InputField2
            label="Address"
            id="address"
            data={data}
            setData={setData}
            required={true}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-3 gap-4">
          <InputField2
            label="City"
            id="city"
            data={data}
            setData={setData}
            required={true}
          />
          <InputField2
            label="State"
            id="state"
            data={data}
            setData={setData}
            required={true}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 mt-3 gap-4">
          <InputField2
            label="Zip Code"
            id="zipCode"
            data={data}
            setData={setData}
            required={true}
          />
          <InputField2
            label="Country"
            id="country"
            data={data}
            setData={setData}
            required={true}
          />
        </div>

        <hr className="border-1 border-gray-light mt-3" />
        <h2 className="text-xl md:text-xl font-medium mt-4">Company Details</h2>
        <div className="grid grid-cols-1  mt-3">
          <SelectField2
            label="Sub Category"
            id="subCategory"
            data={data}
            setData={setData}
            options={categoryType}
            required={true}
            placeholder={"-- choose --"}
          />
        </div>
        <div className="grid grid-cols-1  mt-3">
          <SelectField2
            label="Company Legal Type"
            id="companyLegalType"
            data={data}
            setData={setData}
            options={categoryType}
            required={true}
            placeholder={"-- choose --"}
          />
        </div>
        <div className="grid grid-cols-1  mt-3">
          <SelectField2
            label="Company Group"
            id="companyGroup"
            data={data}
            setData={setData}
            options={categoryType}
            required={true}
            placeholder={"-- choose --"}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 mt-3 gap-4">
          <InputField2
            label="Nationality"
            id="nationality"
            data={data}
            setData={setData}
            required={true}
          />
          <SelectField2
            label="Reference"
            id="reference"
            data={data}
            setData={setData}
            options={categoryType}
            required={true}
            placeholder={"-- choose --"}
          />
        </div>

        <div className="mt-5">
          <label className="text-xl required">Company Document</label>
          <label
            htmlFor="relatedDocument"
            className="border border-dashed rounded-md flex justify-center items-center min-h-24 flex-col"
          >
            <UploadFile className="text-3xl text-blue" />
            <p className="text-base">Upload Documents</p>
          </label>
          <input
            type="file"
            name="relatedDocument"
            id="relatedDocument"
            className="hidden"
            accept="image/png, image/jpg, image/jpeg, image/webp"
          />
        </div>
        <div>
          <button
            className="outlline-none border-none bg-blue text-white py-1 px-3 rounded-md text-2xl mt-4"
            type="submit"
          >
            Save
          </button>
        </div>
      </form>
    </Dialog>
  );
};

export default AddCompany;
