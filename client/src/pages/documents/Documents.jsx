import { Search } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import previewImage from "../../assets/letter-requesting-parental-leave-in.png";
const Documents = () => {
  return (
    <div className="px-3 md:px-22 lg:px-28 flex flex-col w-full items-center pt-10 md:pt-20 bg-white-light min-h-[80vh]">
      <h1 className="text-2xl md:text-2xl lg:text-3xl font-bold text-center">
        Efficiently generate paperwork with simplicity and speed!
      </h1>
      <p className="md:text-xl lg:text-2xl mt-3 text-center md:max-w-[50rem] lg:max-w-[65rem]">
        A modernized digital system provides user-friendly forms to effortlessly
        guide you through the process of creating your legal documents.
      </p>

      <div className={"w-full max-w-[50rem] mt-10 px-[5vw] relative md:p-0"}>
        <input
          type="text"
          placeholder="Search Documents"
          className="w-full bg-white p-3 pl-6 py-5 pr-[1%] md:pr-6 rounded-full placeholder:text-black md:pl-5 text-black border-2 border-blue focus:!border-blue text-2xl"
          // onKeyDown={handleChange}
        />
        <Search className="absolute right-[10%] text-blue cursor-pointer !text-4xl md:right-5 top-1/2 -translate-y-1/2" />
      </div>

      <h1 className="text-3xl md:text-4xl font-bold mt-10">How To Use It</h1>

      <div className="flex flex-wrap gap-10 mt-5 justify-center">
        <div class="flex flex-col p-5 shadow-medium-shadow relative max-w-[20rem] rounded-lg">
          <span class="absolute text-[16rem] font-extrabold left-0 right-0 top-0 bottom-0 flex items-center justify-center opacity-10 text-blue pointer-events-none">
            1
          </span>
          <p className="w-10 h-10 bg-blue flex items-center justify-center rounded-full">
            <span className=" text-white text-2xl font-bold pointer-events-none">
              1
            </span>
          </p>
          <h3 className="mt-4 text-black text-2xl font-medium">
            Choose a template
          </h3>
          <p className="mt-1 text-xl">Pick from our document options.</p>
        </div>
        <div class="flex flex-col p-5 shadow-medium-shadow relative max-w-[20rem] rounded-lg justify-center">
          <span class="absolute text-[16rem] font-extrabold left-0 right-0 top-0 bottom-0 flex items-center justify-center opacity-10 text-blue pointer-events-none">
            2
          </span>
          <p className="w-10 h-10 bg-blue flex items-center justify-center rounded-full">
            <span className=" text-white text-2xl font-bold pointer-events-none">
              2
            </span>
          </p>
          <h3 className="mt-4 text-black text-2xl">Complete the form</h3>
          <p className="mt-1 text-xl">
            Just answer questions; document auto-generates, smartly adapting to
            your inputs.
          </p>
        </div>
        <div class="flex flex-col p-5 shadow-medium-shadow relative max-w-[20rem] rounded-lg ">
          <span class="absolute text-[16rem] font-extrabold left-0 right-0 top-0 bottom-0 flex items-center justify-center opacity-10 text-blue pointer-events-none">
            3
          </span>
          <p className="w-10 h-10 bg-blue flex items-center justify-center rounded-full">
            <span className=" text-white text-2xl font-bold pointer-events-none">
              3
            </span>
          </p>
          <h3 className="mt-4 text-black text-2xl font-medium">
            download & print
          </h3>
          <p className="mt-1 text-xl">
            Your document is prepared! It's yours to utilize as needed.
          </p>
        </div>
      </div>

      <h3 className="text-center text-2xl mt-5 text-back font-medium">
        Our team of legal professionals crafts your documents, ensuring accuracy
        and quality.
      </h3>

      <div className="flex flex-col items-center mt-5 mb-10">
        <Link to={"/add-documents"} className="text-2xl text-blue font-medium">
          See All Document
        </Link>
      </div>

      <div className="mt-5 flex flex-col mb-20 w-full">
        <h3 className="text-2xl md:text-3xl font-medium text-black text-center md:text-start">
          Some Popular Documents
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-5 gap-5 sm:gap-10">
          {[1, 2, 3, 4, 5, 6].map((item, index) => (
            <div className=" pl-3 flex justify-center">
              <div
                className="w-[20rem] sm:w-full border-2 p-3 border-gray-light relative rounded-md"
                style={{
                  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                }}
              >
                <img
                  src={previewImage}
                  alt=""
                  className="w-full h-[22rem]  cursor-pointer hover:object-cover hover:bg-[#00000080] relative rounded-md"
                />

                <Link
                  to={`/documents/${index}`}
                  className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-md"
                >
                  <p className="text-white font-bold text-lg">Use It Now</p>
                </Link>

                <p className="mt-3 text-xl md:text-2xl line-clamp-1 text-center">
                  Letter Requesting Leave
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Documents;
