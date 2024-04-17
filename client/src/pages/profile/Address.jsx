import React, { useState } from 'react'
import TextField from '../../common/TextField';
import InputField from '../../common/InputField';

export const addressData = {
    address1: '',
    address2: '',
    city: '',
    state: '',
    country: '',
    zip: '',
}
const Address = () => {
    const [address, setAddress] = useState(addressData)
    
    return <div>
      <div className="flex flex-col mt-12 p-5">
          <div className="flex justify-between">
              <h2 className="text-2xl">Address</h2>
              <button className="outline-none bg-none text-blue font-medium text-xl">Edit</button>
          </div>
          <div className="flex flex-col mt-12">
            <div className="grid grid-cols-1 gap-8">
                <TextField
                    label="Address 1"
                    id="address1"
                    data={address}
                    setData={setAddress}
                    placeholder=""
                />
            </div>
            <div className="grid grid-cols-1 gap-8 mt-5">
                <TextField
                    label="Address 2"
                    id="address2"
                    data={address}
                    setData={setAddress}
                    placeholder=""
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <InputField
                    label="City"
                    id="city"
                    data={address}
                    setData={setAddress}
                    placeholder="Enter your city"

                    />
                  
                <InputField
                    label="State"
                    id="state"
                    data={address}
                    setData={setAddress}
                    placeholder="Enter your state"
                />
                  
              </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <InputField
                    label="Country"
                    id="country"
                    data={address}
                    setData={setAddress}
                    placeholder="Enter your country"

                    />
                  
                <InputField
                    label="Zip Code"
                    id="zip"
                    data={address}
                    setData={setAddress}
                    placeholder="Enter your Zip Code"
                />
                  
              </div>
          </div>
         
      </div>
    </div>;
  };

export default Address