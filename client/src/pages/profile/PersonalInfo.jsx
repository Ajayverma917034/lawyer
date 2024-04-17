import React, { useState } from 'react'
import InputField from '../../common/InputField';

export const PersonalInfoData = {
    title: "",
    gender: "",
    fatherName: "",
    motherName: "",
    dob: "",
    nationality: "",
    jobTitle: "",
    website: '',
}
const PersonalInfo = () => {
    const [personalInfo, setPersonalInfo] = useState(PersonalInfoData)
    
    return <div>
      <div className="flex flex-col mt-12 p-5">
          <div className="flex justify-between">
              <h2 className="text-2xl">Basic Information</h2>
              <button className="outline-none bg-none text-blue font-medium text-xl">Edit</button>
          </div>
          <div className="flex flex-col mt-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-2">
                  <InputField
                      label="Title"
                      id="title"
                      data={personalInfo}
                      setData={setPersonalInfo}
                      placeholder="Title"
  
                  />
                  
                  <InputField
                      label="Gender"
                      id="gender"
                      data={personalInfo}
                      setData={setPersonalInfo}
                      placeholder="Gender"
  
                  />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8  mt-8">
                  <InputField
                      label="Father's Name"
                      id="fatherName"
                      data={personalInfo}
                      setData={setPersonalInfo}
                      placeholder="Father Name here"
  
                  />
                  
                  <InputField
                      label="Mother's Name"
                      id="motherName"
                      data={personalInfo}
                      setData={setPersonalInfo}
                      placeholder="Monther's Name here"
  
                  />
                  
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <InputField
                      label="Date of Birth (DOB)"
                      id="dob"
                      data={personalInfo}
                      setData={setPersonalInfo}
                      placeholder="Choose your Date of birth"
  
                  />
                  
                  <InputField
                      label="Nationality"
                      id="nationality"
                      data={personalInfo}
                      setData={setPersonalInfo}
                      placeholder="Nationality"
  
                  />
                  
              </div>
              <div className="grid grid-cols-1 gap-8 mt-8">
                  <InputField
                      label="Job Title"
                      id="jobTitle"
                      data={personalInfo}
                      setData={setPersonalInfo}
                      placeholder="Enter your Job Title"
                  />
                  
              </div>
              <div className="grid grid-cols-1 gap-8 mt-8">
                  <InputField
                      label="Website"
                      id="website"
                      data={personalInfo}
                      setData={setPersonalInfo}
                      placeholder="www.xyz.com"
                  />
              </div>
  
          </div>
      </div>
    </div>;
}

export default PersonalInfo