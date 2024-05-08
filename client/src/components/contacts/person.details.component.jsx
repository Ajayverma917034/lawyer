import { Shortcut } from "@mui/icons-material";
import React from "react";
import CollapseComponent from "../../common/collapse.component";

const PersonDetails = () => {
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
    <div className="px-3 md:px-22 lg:px-28 flex flex-col py-10 bg-white-light min-h-screen">
      <div className="flex justify-between mb-3">
        <h1 className="text-2xl md:text-3xl font-semibold">ID: Person Name</h1>
        <div>
          <button className="btn-dark flex items-center gap-2 text-xl">
            Edit <Shortcut />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 p-4 rounded-md bg-white">
        <div className="col-span-2 md:p-6">
          <CollapseComponent title="General Info">
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 ml-5">
              <div className="flex flex-col gap-y-4">
                <p className="text-[18px] text-gray-text">
                  Title:{" "}
                  <span className="text-black text-[16px] font-medium">
                    {data.general_info.title}
                  </span>
                </p>
                <p className="text-[18px] text-gray-text">
                  First Name:{" "}
                  <span className="text-black text-[16px] font-medium">
                    {data.general_info.firstName}
                  </span>
                </p>
                <p className="text-[18px] text-gray-text">
                  Last Name:{" "}
                  <span className="text-black text-[16px] font-medium">
                    {data.general_info.lastName}
                  </span>
                </p>
                <p className="text-[18px] text-gray-text">
                  Category:{" "}
                  <span className=" cursor-pointer text-black text-[16px] font-medium">
                    {data.general_info.category}{" "}
                  </span>
                </p>
                <p className="text-[18px] text-gray-text">
                  Job Title:{" "}
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
                  Email:{" "}
                  <span className="text-black text-[16px] font-medium">
                    {data.general_info.email}
                  </span>
                </a>
                <p className="text-[18px] text-gray-text">
                  Sub Category:{" "}
                  <span className="text-black text-[16px] font-medium">
                    {" "}
                    {data.general_info.subCategory}
                  </span>
                </p>
                <p className="text-[18px] text-gray-text">
                  Website:{" "}
                  {data.general_info.website.length === 0 ? (
                    <span className="text-black text-[16px] font-medium">
                      {formatData(data.general_info.website)}
                    </span>
                  ) : (
                    <a
                      href={data.general_info.website}
                      target="_blank"
                      className="text-blue text-[16px] font-medium"
                    >
                      {formatData(data.general_info.website)}
                    </a>
                  )}
                </p>
                <p className="text-[18px] text-gray-text">
                  Phone:{" "}
                  <span className="text-black text-[16px] font-medium">
                    {" "}
                    {data.general_info.phone}
                  </span>
                </p>
              </div>
            </div>
          </CollapseComponent>

          <hr className="mt-5 text-gray-light" />

          <CollapseComponent title="Address">
            <p className="text-[18px] text-gray-text ml-3 mt-3">
              Address:{" "}
              <span className="text-black text-[16px] font-medium">
                {data.address.address}
              </span>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 ml-3 mt-4 gap-y-4">
              <p className="text-[18px] text-gray-text">
                City:{" "}
                <span className="text-black text-[16px] font-medium">
                  {data.address.city}
                </span>
              </p>
              <p className="text-[18px] text-gray-text">
                State:{" "}
                <span className="text-black text-[16px] font-medium">
                  {data.address.state}
                </span>
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 ml-3 mt-4 gap-y-4">
              <p className="text-[18px] text-gray-text">
                Zip Code:{" "}
                <span className="text-black text-[16px] font-medium">
                  {data.address.zip}
                </span>
              </p>
              <p className="text-[18px] text-gray-text">
                Country:{" "}
                <span className="text-black text-[16px] font-medium">
                  {data.address.country}
                </span>
              </p>
            </div>
          </CollapseComponent>
          <hr className="mt-5 text-gray-light" />

          <CollapseComponent title="Personal Info">
            <p className="text-[18px] text-gray-text ml-3 mt-3">
              Middle Name:{" "}
              <span className="text-black text-[16px] font-medium">
                {formatData(data.personal_info.middleName)}
              </span>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 ml-3 mt-4 gap-y-4">
              <p className="text-[18px] text-gray-text">
                Mother's Name:{" "}
                <span className="text-black text-[16px] font-medium">
                  {formatData(data.personal_info.motherName)}
                </span>
              </p>
              <p className="text-[18px] text-gray-text">
                DOB:{" "}
                <span className="text-black text-[16px] font-medium">
                  {formatData(data.personal_info.dob)}
                </span>
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 ml-3 mt-4 gap-y-4">
              <p className="text-[18px] text-gray-text">
                Additional Id Type:{" "}
                <span className="text-black text-[16px] font-medium">
                  {formatData(data.personal_info.additionalId)}
                </span>
              </p>
              <p className="text-[18px] text-gray-text">
                ID Reference Number:{" "}
                <span className="text-black text-[16px] font-medium">
                  {formatData(data.personal_info.IdRefNumber)}
                </span>
              </p>
            </div>
          </CollapseComponent>

          <hr className="mt-5 text-gray-light" />

          <CollapseComponent title="Documents">
            <div className="mt-2 ml-3 flex gap-5">
              {data.documents &&
                data.documents.map((item, index) => (
                  <span className="text-blue cursor-pointer" key={index}>
                    {item.name}
                  </span>
                ))}
            </div>
          </CollapseComponent>
        </div>

        <div className="bg-white border-t mt-4 md:mt-0 md:border-t-0 md:border-l border-gray-light md:p-4">
          <CollapseComponent title={"Share with"}>
            <div className="flex gap-2 items-center">
              <input
                type="radio"
                name="visibility"
                id="visibility"
                checked
                readOnly
              />
              <label htmlFor="visibility" className="text-xl">
                {data.visibility.isPublic ? "Public" : "Private"}
              </label>
            </div>
            <p className="text-blue cursor-pointer ml-5">
              Set As {data.visibility.isPublic ? "Private" : "Public"}
            </p>
          </CollapseComponent>
        </div>
      </div>
    </div>
  );
};

export default PersonDetails;
