import React from "react";
import { IoMdAdd } from "react-icons/io";
import { ImBin2 } from "react-icons/im";
import toast from "react-hot-toast";

const ClientPartenerShares = () => {
  const [data, setData] = React.useState({});
  const [showAddPartnerShare, setShowAddPartnerShare] = React.useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);

    // Proceed with saving data or making API call

    toast.success("Partner Share Added Successfully");
    setShowAddPartnerShare(false);
  };

  const handleShow = () => {
    if (showAddPartnerShare) {
      toast.error(
        "Please save the current partner share before adding a new one"
      );
    } else {
      setShowAddPartnerShare(!showAddPartnerShare);
    }
  };
  return (
    <div className="flex flex-col p-10">
      <button
        className="flex items-center text-blue font-medium  text-xl"
        onClick={handleShow}
      >
        <IoMdAdd size={20} /> Add Partner Share{" "}
      </button>
      {showAddPartnerShare && (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:ml-[8rem] justify-center p-5  w-full"
        >
          <div className="w-full md:w-[44%] grid grid-cols-1 md:grid-cols-4 gap-x-10 items-center mt-10 md:mt-20 gap-y-3">
            <label
              htmlFor="term"
              className="md:ml-4 text-xl md:text-2xl text-black col-span-1"
            >
              Partner
            </label>
            <select
              type="text"
              name="partner"
              required
              value={data.partner}
              onChange={(e) => setData({ ...data, term: e.target.value })}
              className="focus:outline-none border text-xl border-gray py-2 px-2 rounded-md w-full col-span-3"
            >
              <option value="">Choose Term</option>
              <option value="partner 1">Partner 1</option>
            </select>
          </div>
          <div className="w-full md:w-[44%] grid grid-cols-1 md:grid-cols-4 gap-x-10 items-center mt-8 gap-y-3">
            <label
              htmlFor="term"
              className="md:ml-4 text-xl md:text-2xl text-black col-span-1"
            >
              Percentage
            </label>
            <input
              type="text"
              name="percentage"
              required
              // defaultValue={0}
              value={data.percentage}
              onChange={(e) => setData({ ...data, discount: e.target.value })}
              className="focus:outline-none border text-xl border-gray py-2 px-2 rounded-md w-full col-span-3"
            />
          </div>
          <div className="w-full md:w-[44%] grid grid-cols-1 md:grid-cols-4 gap-x-10 items-center mt-10">
            <div className="col-span-1 flex items-center gap-3">
              <button type="submit" className="btn-dark w-32 text-xl">
                Save
              </button>
              <button type="button" className="w-32 text-xl">
                <ImBin2
                  size={25}
                  className="text-red"
                  onClick={(e) => {
                    setShowAddPartnerShare(false);
                    setData({ partner: "", percentage: "" });
                  }}
                />
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default ClientPartenerShares;
