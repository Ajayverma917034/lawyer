import { Shortcut } from "@mui/icons-material";
import React from "react";
import CollapseComponent from "../../common/collapse.component";
const CompanyDetials = () => {
  const data = {
    general_info: {
      nickName: "Company Name",
      category: "Company",
      subCategory: "Lawyer",
      email: "abc@gmail.com",
      website: "legaltaxlink.com",
    },
    address: {
      address: "123, abc street",
      city: "New Delhi",
      state: "Delhi",
      country: "India",
      zip: "110001",
    },
    company_info: {
      companyLegalType: "",
      companyGroup: "01-01-2001",
      nationality: "",
      reference: "",
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
        <h1 className="text-2xl md:text-3xl font-semibold">ID: Company Name</h1>
        <div>
          <button className="btn-dark flex items-center gap-2 text-xl">
            Edit <Shortcut />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 p-4 rounded-md bg-white">
        <div className="col-span-2 md:p-6">
          <CollapseComponent title="General Info">
            <p className="text-[18px] text-gray-text ml-3 mt-3">
              Nick Name:{" "}
              <span className="text-black text-[16px] font-medium">
                {formatData(data.general_info.nickName)}
              </span>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 ml-3 mt-4 gap-y-4">
              <p className="text-[18px] text-gray-text">
                Category:{" "}
                <span className="text-black text-[16px] font-medium">
                  {formatData(data.general_info.category)}
                </span>
              </p>
              <p className="text-[18px] text-gray-text">
                Sub Category:{" "}
                <span className="text-black text-[16px] font-medium">
                  {formatData(data.general_info.subCategory)}
                </span>
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 ml-3 mt-4 gap-y-4">
              <p className="text-[18px] text-gray-text">
                Email:{" "}
                <a
                  target="_blank"
                  href={`mailto:${data.general_info.email}`}
                  className="text-black text-[16px] font-medium"
                >
                  {formatData(data.general_info.email)}
                </a>
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

          <CollapseComponent title="Company Details">
            <div className="grid grid-cols-1 md:grid-cols-2 ml-3 mt-4 gap-y-4">
              <p className="text-[18px] text-gray-text">
                Company Legal Type:{" "}
                <span className="text-black text-[16px] font-medium">
                  {formatData(data.company_info.companyLegalType)}
                </span>
              </p>
              <p className="text-[18px] text-gray-text">
                Company Group:{" "}
                <span className="text-black text-[16px] font-medium">
                  {formatData(data.company_info.companyGroup)}
                </span>
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 ml-3 mt-4 gap-y-4">
              <p className="text-[18px] text-gray-text">
                Nationality:{" "}
                <span className="text-black text-[16px] font-medium">
                  {formatData(data.company_info.nationality)}
                </span>
              </p>
              <p className="text-[18px] text-gray-text">
                Reference:{" "}
                <span className="text-black text-[16px] font-medium">
                  {formatData(data.company_info.reference)}
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

export default CompanyDetials;
