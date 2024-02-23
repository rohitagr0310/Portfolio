import React from "react";

// Assuming the images are in the same directory as ImageGallery.js
const imageContext = require.context(
  "./../../Assets/certificate",
  true,
  /\.(jpg|png)$/
);

const ImageGallery = ({ children }) => {
  const imagePaths = imageContext.keys();
  const imageInfo = imagePaths.map((imagePath) => {
    const imagePathString = imageContext(imagePath);
    const originalFilename = imagePathString
      ? imagePathString.split("/").pop().split(".")[0]
      : "Unknown";

    return {
      title: originalFilename,
      path: imagePathString,
    };
  });

  return <>{children(imageInfo)}</>;
};

export default ImageGallery;
