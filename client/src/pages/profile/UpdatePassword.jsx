import React, { useState } from "react";

const UpdatePassword = () => {
  const [password, setPassword] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setPassword({ ...password, [e.target.name]: e.target.value });
  };
  return (
    <div className="flex flex-col mt-12 p-5">
      <h2 className="text-2xl">Update Password</h2>
      <div className="flex flex-col mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-1">
            <label htmlFor="id" className="text-xl">
              Enter Old Password
            </label>
            <input
              type="password"
              className="p-3 bg-white text-black focus:outline-none outline-none rounded-md"
              name="oldPassword"
              id="oldPassword"
              onChange={handleChange}
              value={password.oldPassword}
              placeholder="*****************"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-5">
          <div className="flex flex-col gap-1">
            <label htmlFor="id" className="text-xl">
              Enter New Password
            </label>
            <input
              type="password"
              className="p-3 bg-white text-black focus:outline-none outline-none rounded-md"
              name="newPassword"
              id="newPassword"
              onChange={handleChange}
              value={password.newPassword}
              placeholder="*****************"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-5">
          <div className="flex flex-col gap-1">
            <label htmlFor="id" className="text-xl">
              Enter Confirm Password
            </label>
            <input
              type="password"
              className="p-3 bg-white text-black focus:outline-none outline-none rounded-md"
              name="confirmPassword"
              id="newPassword"
              onChange={handleChange}
              value={password.confirmPassword}
              placeholder="*****************"
            />
          </div>
        </div>
      </div>

      <div>
        <button className="bg-blue text-white p-3 rounded-md mt-8 px-4 capitalize text-xl">
          Update
        </button>
      </div>
    </div>
  );
};

export default UpdatePassword;
