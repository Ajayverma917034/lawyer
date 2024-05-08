import { Star } from "@mui/icons-material";
import React, { useEffect } from "react";
import previewImage from "../../assets/letter-requesting-parental-leave-in.png";
import { useNavigate } from "react-router-dom";

const DocumentDetails = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/documents/modal-creation/remote-work-aggrement");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="w-full bg-white-light min-h-screen px-3 md:px-22 lg:px-28 pt-10">
      <h2 className="text-[22px] max-md:text-center md:text-3xl font-medium font-poppins">
        Remote Work Aggrement
      </h2>
      <div className="flex gap-8 mt-5 flex-wrap">
        <div className="flex flex-col">
          <p className="text-[14px] md:text-[18px] font-medium">Last Update</p>
          <span>30-01-2024</span>
        </div>
        <div className="flex flex-col">
          <p className="text-[14px] md:text-[18px] font-medium">Formats</p>
          <span>PDF and Word</span>
        </div>
        <div className="flex flex-col">
          <p className="text-[14px] md:text-[18px] font-medium">Size</p>
          <span>10 to 12 pages</span>
        </div>
        <div className="flex flex-col">
          <p className="text-[14px] md:text-[18px] font-medium">Ratings</p>
          <div className="flex">
            {[1, 1, 1, 1].map((star, index) => (
              <Star className="text-[#ffe60a]" key={index} />
            ))}
            <Star className="text-[#d9d9d9]" />
            <span className="ml-3">3 Votes</span>
          </div>
        </div>
      </div>

      <div className="mt-8 flex max-sm:justify-center">
        <button className="btn-dark text-2xl" onClick={handleNavigate}>
          Fill Out the template
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 mt-8">
        <div className="col-span-1 md:col-span-3 p-2 md:p-4 md:max-h-screen md:overflow-y-auto">
          <p className="text-base md:text-xl text-justify">
            This Remote Employment Agreement i.e. terms and conditions of remote
            employment is a contract for use when a business hires a new
            employee to work remotely or when a current employee is being
            transferred by their employer from on-site to remote employment. It
            can be used for a range of different employment types,
            including full-time, part-time and fixed-term.
          </p>
          <p className="mt-3 text-base md:text-xl text-justify">
            This Agreement can be used by any type of entity including a
            company, LLP, Partnership, etc. In many cases, once an employer
            chooses to take on a new employee, the parties want to get started
            without delay. Therefore, the employer may wish to provide the
            employee with a letter that spells out some of the key terms more
            briefly. Employers may wish to use an Offer Letter for Employment in
            these situations and then follow it up with this Remote Work
            Agreement. However, this Remote Work Agreement goes into more detail
            about the various terms of remote employment and provides a more
            robust document so that both the employer and the employee fully
            understand what is expected of one another, and how the employment
            arrangement may develop over time (for example, by providing details
            of bonuses and pay increases).
          </p>
          <p className="mt-3 text-base md:text-xl text-justify">
            This Remote Work Agreement is not suitable for use by contractors.
            Instead, contractors should use the Service Agreement. Contractors
            are entities or persons who provide specific services for a specific
            time or on a condition including people or entities engaged in the
            business of building and construction, and electrical work as well
            as coaching, personal training, consulting and professional
            services. The Consultancy Agreement can be used when availing the
            services of the Consultant or independent contractor by an
            individual or a business entity. For more information on the
            difference between these two agreements, please check our
            guide: What is the difference between an Employee and an Independent
            Contractor? A Remote Work Policy is different from that of a Remote
            Work Agreement. A Remote Work Agreement{" "}
          </p>
        </div>
        <div className="md:border-l-2 border-gray-light pl-3 flex justify-center col-span-1 md:col-span-2 max-md:pb-4 bg-white-light">
          <div
            className="max-md:h-full md:w-[22rem] md:h-[30rem] border-2 md:p-3 border-gray-light relative rounded-md bg-white-light"
            style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
          >
            <img
              src={previewImage}
              alt=""
              className="w-full h-full cursor-pointer hover:object-cover hover:bg-[#00000080] relative rounded-md"
            />
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-md">
              <p className="text-white font-bold text-lg">Form Preview</p>
            </div>

            <div className="bg-white-light">
              <button className="btn-dark text-2xl mt-5 w-full mb-5">
                Create Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentDetails;
