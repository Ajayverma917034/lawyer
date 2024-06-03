import React, { useState } from "react";

const ClientOtherInfo = () => {
  const [data, setData] = useState({
    term: "",
    discount: "0",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    // Proceed with saving data or making API call
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center p-5  w-full"
    >
      <div className="w-full md:w-[70%] grid grid-cols-1 md:grid-cols-4 gap-x-10 items-center mt-10 md:mt-20 gap-y-3">
        <label
          htmlFor="term"
          className="md:ml-4 text-2xl font-semibold col-span-1"
        >
          Terms
        </label>
        <select
          type="text"
          name="term"
          value={data.term}
          onChange={(e) => setData({ ...data, term: e.target.value })}
          className="focus:outline-none border text-xl border-gray py-2 px-2 rounded-md w-full col-span-3"
        >
          <option value="">Choose Term</option>
        </select>
      </div>
      <div className="w-full md:w-[70%] grid grid-cols-1 md:grid-cols-4 gap-x-10 items-center mt-10 gap-y-3">
        <label
          htmlFor="term"
          className="md:ml-4 text-2xl font-semibold col-span-1"
        >
          Discount (%) *
        </label>
        <input
          type="text"
          name="discount"
          required
          // defaultValue={0}
          value={data.discount}
          onChange={(e) => setData({ ...data, discount: e.target.value })}
          className="focus:outline-none border text-xl border-gray py-2 px-2 rounded-md w-full col-span-3"
        />
      </div>
      <div className="w-full md:w-[70%] grid grid-cols-1 md:grid-cols-4 gap-x-10 items-center mt-10">
        <button type="submit" className="col-span-1 btn-dark w-32 text-xl">
          Save
        </button>
      </div>
    </form>
  );
};

export default ClientOtherInfo;
