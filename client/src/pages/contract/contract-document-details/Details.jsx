import React from "react";

const Details = () => {
  return (
    <div className="grid grid-cols-1 1374px:grid-cols-3 min-h-screen overflow-y-auto">
      <div className=" col-span-1 lg:col-span-2 border-r border-gray-light ">
        {/* first section  */}
        <div className="px-5 md:px-10 py-5 md:py-10">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold">Details</h2>
            <div>
              <button className="text-blue font-medium text-xl">Edit</button>
            </div>
          </div>
          <div className="flex flex-col mt-5">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div>
                <label htmlFor="input" className="font-semibold">
                  Type :
                </label>
                <input
                  type="text"
                  value={"Consultancy Agreement"}
                  readOnly
                  className="ml-3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-1 lg:col-span-1 flex flex-col"></div>
    </div>
  );
};

export default Details;

// <div className="py-4 md:py-10 flex flex-col">
//   <div className="flex flex-col px-5 md:px-10">
//     <div className="flex justify-between">
//       <h2>Details</h2>
//       <div>
//         <button className="text-blue font-medium">Edit</button>
//       </div>
//     </div>
//   </div>
// </div>
