import React, { useState } from "react";
import img from '../../assets/fileupload.png';
import img2 from '../../assets/fileupload2.png';

const FileUpload = () => {
  const [files, setFiles] = useState([]);
  const [uploadProgress, setUploadProgress] = useState({}); // Track progress for each file

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    const updatedFiles = [...files, ...selectedFiles];
    setFiles(updatedFiles);

    // Simulate upload progress
    simulateUploadProgress(selectedFiles);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFiles = Array.from(event.dataTransfer.files);
    const updatedFiles = [...files, ...droppedFiles];
    setFiles(updatedFiles);

    // Simulate upload progress
    simulateUploadProgress(droppedFiles);
  };

  const simulateUploadProgress = (fileList) => {
    const progress = { ...uploadProgress };
    fileList.forEach((file) => {
      progress[file.name] = 0;
    });
    setUploadProgress(progress);

    fileList.forEach((file) => {
      const interval = setInterval(() => {
        setUploadProgress((prevProgress) => {
          const updatedProgress = { ...prevProgress };
          if (updatedProgress[file.name] >= 100) {
            clearInterval(interval);
          } else {
            updatedProgress[file.name] += 10;
          }
          return updatedProgress;
        });
      }, 200);
    });
  };

  const handleCancelUpload = (fileName) => {
    setFiles(files.filter((file) => file.name !== fileName));
    setUploadProgress((prev) => {
      const updatedProgress = { ...prev };
      delete updatedProgress[fileName];
      return updatedProgress;
    });
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className="border-2 border-dashed max-h-[45vh]  md:w-2/3 mx-auto border-gray-300 p-6 rounded-lg flex flex-col items-center justify-center text-center cursor-pointer"
      onClick={() => document.getElementById("fileInput").click()}
    >
      <img src={img} className="my-8 w-16 h-16" alt="Upload Icon" />
      <p className="text-gray-500 mb-2">
        Drop your image or document here, or{" "}
        <strong className="text-purple-600">browse</strong>
      </p>
      <p className="text-gray-400 text-sm">
        Supported file formats: .pdf, .jpg, .png, .doc, .xls
      </p>
      <input
        id="fileInput"
        type="file"
        multiple
        className="hidden"
        onChange={handleFileChange}
      />
      {files.length > 0 && (
        <div className=" bg-gray-100 p-4 my-6 rounded-lg w-full md:w-1/2 mt-6">
          <ul className="text-sm text-gray-700 space-y-4">
            {files.map((file, index) => (
              <li key={index} className="flex flex-col gap-4 items-center justify-between">
                <div className=" flex  w-full justify-around ">
                  <img src={img2} alt="" />
                  <p className="truncate w-2/3"> {file.name}</p>
                  <button
                    onClick={() => handleCancelUpload(file.name)}
                    className="text-white bg-gray-400 rounded-full w-5 h-5 flex justify-center items-center  focus:outline-none"
                  >
                    ✖
                  </button></div>
                <div className="w-full px-2 flex items-center space-x-2">
                  <div className="w-full bg-gray-200 h-2 rounded-md">
                    <div
                      className="h-2 bg-purple-600 rounded-md"
                      style={{
                        width: `${uploadProgress[file.name] || 0}%`,
                      }}
                    ></div>
                  </div>100%

                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
