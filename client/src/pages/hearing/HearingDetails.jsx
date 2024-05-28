import React, { useState } from "react";
import { Delete } from "@mui/icons-material";
import CollapseComponent from "../../components/dashboard/details-pages/CollapseComponent";

const HearingDetails = () => {
  const [value, setValue] = useState(50);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const data = {
    general_info: {
      title: "Title Name",
      firstName: "Harshit",
      lastName: "Kaushal",
      category: "Person",
      jobTitle: "Developer",
      email: "harshit@gmail.com",
      subCategory: "Lawyer",
      website: "www.harshit.com",
      phone: "1234567890",
    },
    address: {
      address: "123, abc street",
      city: "New Delhi",
      state: "Delhi",
      country: "India",
      zip: "110001",
    },
    personal_info: {
      middleName: "Kumar",
      motherName: "",
      dob: "",
      additionalId: "",
      IdRefNumber: "",
    },
    documents: [
      { id: 1, name: "Document1.pdf" },
      { id: 2, name: "Document2.pdf" },
    ],
    visibility: {
      isPublic: true,
    },
  };

  const formatData = (data) => {
    if (data.length === 0) return "Not Available";
    return data;
  };

  return (
    <div>
      <div className="px-4 sm:px-6 md:px-10 lg:px-24 bg-white-light justify-between py-5 flex items-center sticky top-[66px] z-[50]">
        <h1 className="text-2xl">T000003: Hearing</h1>
        <div className="flex items-center gap-2">
          <div className="flex  gap-4 pr-4">
            <button className="btn-white">Cancel</button>
            <button className="btn-white">Done</button>
            <button className="btn-white">In Progress</button>
            <button className="btn-white">On Hold</button>
            <button className="btn-white">Export</button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 p-4 rounded-md bg-white px-10">
        <div className="flex flex-col   col-span-2 md:p-6 gap-4">
          <CollapseComponent title="General Info">
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 ml-5">
              <div className="flex flex-col gap-y-4">
                <p className="text-[18px] text-gray-text">
                  Type:{" "}
                  <span className="text-black text-[16px] font-medium">
                    {data.general_info.title}
                  </span>
                </p>
                <p className="text-[18px] text-gray-text">
                  Title:{" "}
                  <span className="text-black text-[16px] font-medium">
                    {data.general_info.firstName}
                  </span>
                </p>
                <p className="text-[18px] text-gray-text">
                  Priority:{" "}
                  <span className="text-black text-[16px] font-medium">
                    {data.general_info.lastName}
                  </span>
                </p>
                <p className="text-[18px] text-gray-text">
                  Related Matter:{" "}
                  <span className=" cursor-pointer text-black text-[16px] font-medium">
                    {data.general_info.category}{" "}
                  </span>
                </p>
                <p className="text-[18px] text-gray-text">
                  Related Contract/Document:{" "}
                  <span className="text-black text-[16px] font-medium">
                    {data.general_info.jobTitle}
                  </span>
                </p>
              </div>

              <div className="flex flex-col gap-y-5">
                <a
                  href={`mailto:${data.general_info.email}`}
                  target="_blank"
                  className="text-[18px] text-gray-text"
                >
                  Workflow Status:{" "}
                  <span className="text-black text-[16px] font-medium">
                    {data.general_info.email}
                  </span>
                </a>
                <p className="text-[18px] text-gray-text">
                  Location:{" "}
                  <span className="text-black text-[16px] font-medium">
                    {" "}
                    {data.general_info.subCategory}
                  </span>
                </p>
              </div>
            </div>
          </CollapseComponent>

          <hr className="mt-5 text-gray-light" />

          <CollapseComponent title="Description">
            <p className="text-[16px] px-4 text-gray">
              Lorem, facere, minus odio cum fugit ipsum laboriosam. Dolore?
              asperiores. Nostrum eius maxime autem repudiandae dolor voluptas
              quidem a officiis! Dignissimos ratione voluptas veritatis?
            </p>
          </CollapseComponent>
          <hr className="mt-5 text-gray-light" />

          <CollapseComponent title="Attachments">
            <div className="mt-2 ml-3 flex gap-5">
              {data.documents &&
                data.documents.map((item, index) => (
                  <span className="text-blue cursor-pointer" key={index}>
                    {item.name}
                  </span>
                ))}
            </div>
          </CollapseComponent>
          <hr className="mt-5 text-gray-light" />

          <CollapseComponent title="Worksheet">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 px-8 py-2">
                <p className="text-[18px] font-medium text-gray">{value}%</p>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={value}
                  onChange={handleChange}
                  className="w-full h-3 bg-blue-500 rounded-lg appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #3b82f6 ${value}%, #d1d5db ${value}%)`,
                  }}
                />
              </div>
              <div className="flex justify-between items-center gap-4 px-4 py-3 bg-gray-light">
                <div className="flex gap-4">
                  <input type="checkbox" className="w-8" />
                  <p className="text-[18px] font-medium text-black">
                    Item cheaklist
                  </p>
                </div>
                <Delete className="text-red " />
              </div>
              <input
                type="text"
                placeholder="Start Typing"
                className="border-2 border-gray-light w-full px-4 py-3 text-[18px] mr-10"
              />
              <div className="flex gap-4">
                <button className="btn-dark">Add</button>
                <button className="font-semibold text-[16px]">Cencel</button>
              </div>
            </div>
          </CollapseComponent>
          <hr className="mt-5 text-gray-light" />

          <CollapseComponent title="Matter Attachments">
            <div className="mt-2 ml-3 flex gap-5">
              {data.documents &&
                data.documents.map((item, index) => (
                  <span className="text-blue cursor-pointer" key={index}>
                    {item.name}
                  </span>
                ))}
            </div>
          </CollapseComponent>
          <hr className="mt-5 text-gray-light" />

          <CollapseComponent title="Comments">
            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Start Typing"
                className="border-2 border-gray-light w-full px-4 py-3 text-[18px] mr-10"
              />
              <div className="flex gap-4">
                <button className="btn-dark">Add</button>
                <button className="font-semibold text-[16px]">Cencel</button>
              </div>
            </div>
          </CollapseComponent>
        </div>

        <div className="bg-white border-t mt-4 md:mt-0 md:border-t-0 md:border-l border-gray-light md:p-4">
          <CollapseComponent title="People">
            <p className="text-[18px] text-gray-text ml-3 mt-3">
              Assigned to:{" "}
              <span className="text-black text-[16px] font-medium">
                {data.address.address}
              </span>
            </p>
            <div className="grid grid-cols-1 ml-3 mt-4 gap-y-4">
              <p className="text-[18px] text-gray-text">
                Requested by:{" "}
                <span className="text-black text-[16px] font-medium">
                  {data.address.city}
                </span>
              </p>
              <p className="text-[18px] text-gray-text">
                Created by:{" "}
                <span className="text-black text-[16px] font-medium">
                  {data.address.state}
                </span>
              </p>
              <p className="text-[18px] text-gray-text">
                Modified by:{" "}
                <span className="text-black text-[16px] font-medium">
                  {data.address.state}
                </span>
              </p>
              <p className="text-[18px] text-gray-text">
                Shared with:{" "}
                <span className="text-black text-[16px] font-medium">
                  {data.address.state}
                </span>
              </p>
              <p className="text-[18px] text-gray-text">
                Contributor:{" "}
                <span className="text-black text-[16px] font-medium">
                  {data.address.state}
                </span>
              </p>
            </div>
          </CollapseComponent>
          <hr className="mt-5 text-gray-light" />
          <CollapseComponent title="Dates">
            <p className="text-[18px] text-gray-text ml-3 mt-3">
              Due Date:{" "}
              <span className="text-black text-[16px] font-medium">
                {data.address.address}
              </span>
            </p>
            <div className="grid grid-cols-1 ml-3 mt-4 gap-y-4">
              <p className="text-[18px] text-gray-text">
                Created On:{" "}
                <span className="text-black text-[16px] font-medium">
                  {data.address.city}
                </span>
              </p>
              <p className="text-[18px] text-gray-text">
                Modified On:{" "}
                <span className="text-black text-[16px] font-medium">
                  {data.address.state}
                </span>
              </p>
            </div>
          </CollapseComponent>
        </div>
      </div>
    </div>
  );
};

export default HearingDetails;
