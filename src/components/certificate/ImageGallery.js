import React from "react";

// Assuming the images are in the same directory as ImageGallery.js
const imageContext = require.context(
  "./../../Assets/certificate",
  true,
  /\.(jpg|png)$/
);

const ImageGallery = ({ children }) => {
  const imagePaths = imageContext.keys();
  const group = {}
  imagePaths.forEach(element => {
    const internalGroup = element.split('/')[1];
    const imagePathString = imageContext(element);
    const originalFilename = imagePathString
      ? imagePathString.split("/").pop().split(".")[0]
      : "Unknown";
    if (Object.keys(group).includes(internalGroup)) {
      group[internalGroup].push({
        title: originalFilename,
        path: imagePathString,
      })
    } else {
      group[internalGroup] = []
      group[internalGroup].push({
        title: originalFilename,
        path: imagePathString,
      })
    }
  });

  //console.log(group, Object.entries(group), '1')

  Object.entries(group).map((key, value) => console.log(key, value))

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

  return <>{children(group)}</>;
};

export default ImageGallery;
