import React, { useEffect, useState } from "react";
import InputField from "../../common/InputField";

export const BasicInfoData = {
    firstName: "",
    lastName: "",
    middleName: "",
}
const BasicInfo = () => {
    const [basicInfo, setBasicInfo] = useState(BasicInfoData)
    
  return <div>
    <div className="flex flex-col mt-12 p-5">
        <div className="flex justify-between">
            <h2 className="text-2xl">Basic Information</h2>
            <button className="outline-none bg-none text-blue font-medium text-xl">Edit</button>
        </div>
        <div className="flex flex-col mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <InputField
                    label="First Name"
                    id="firstName"
                    data={basicInfo}
                    setData={setBasicInfo}
                    placeholder="First Name"

                />
                <InputField
                    label="Middle Name"
                    id="MiddleName"
                    data={basicInfo}
                    setData={setBasicInfo}
                    placeholder="Middle Name"

                />
                <InputField
                    label="Last Name"
                    id="lastName"
                    data={basicInfo}
                    setData={setBasicInfo}
                    placeholder="Last Name"

                />
            </div>

        </div>
        <div className="flex justify-between mt-12">
            <h2 className="text-2xl">Contact Detials</h2>
            <button className="outline-none bg-none text-blue font-medium text-xl">Edit</button>
        </div>
        <div className="flex flex-col mt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                <InputField
                    label="Mobile Number"
                    id="firstName"
                    data={basicInfo}
                    setData={setBasicInfo}
                    placeholder="Mobile Number"

                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
            <InputField
                    label="Email Address"
                    id="emailAddress"
                    data={basicInfo}
                    setData={setBasicInfo}
                    placeholder="Email Address"

                />
            </div>
                

        </div>
    </div>
  </div>;
};

export default BasicInfo;
