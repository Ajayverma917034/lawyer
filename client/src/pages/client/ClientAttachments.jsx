import React from "react";
import { IoIosCloudUpload } from "react-icons/io";

const ClientAttachments = () => {
  const [selectedDocument, setSelectedDocument] = React.useState([]);
  const handleRelatedDocument = (e) => {
    // Get the files from the event object
    const files = Array.from(e.target.files);
    // Update the state to include all selected files
    setSelectedDocument(files);
  };
  return (
    <div className="flex items-center justify-center h-full flex-col max-md:mt-20 ">
      <label htmlFor="relatedDocument">
        <div className="border border-dashed rounded-md flex justify-center items-center min-h-32 flex-col px-[25vw] md:px-[15rem] py-24">
          <IoIosCloudUpload className="text-[4rem]  text-blue cursor-pointer" />
          <p className="text-base">Upload Documents</p>
        </div>
      </label>
      <input
        type="file"
        name="relatedDocument"
        id="relatedDocument"
        className="hidden"
        accept="image/png, image/jpg, image/jpeg, image/webp"
        onChange={handleRelatedDocument}
        multiple // Allows multiple files to be selected
      />
    </div>
  );
};

export default ClientAttachments;
