"use client";
const fs = require("fs");
const path = require("path");
const { promisify } = require("util");
const writeFileAsync = promisify(fs.writeFile);

export default function ProjectImgUpload() {
  return (
    <>
      <p>Upload a .png or .jpg image (max 1MB).</p>
      <input
        onChange={(e) => uploadPhoto(e.target.files[0])}
        type="file"
        accept="image/png, image/jpeg"
      />
      <button onClick={() => submit()}>submit</button>
    </>
  );
}

async function uploadPhoto(e) {
  const file = e.target.files[0];

  if (!file) {
    return;
  }

  const allowedExtensions = [".png", ".jpg", ".jpeg"];
  const fileExtension = path.extname(file.name);

  if (!allowedExtensions.includes(fileExtension.toLowerCase())) {
    console.error("Invalid file type");
    return;
  }

  if (file.size > 1024 * 1024) {
    console.error("File size exceeds the limit");
    return;
  }

  const filename = file.name;

  try {
    const uploadPath = path.join(__dirname, "uploads", filename);
    await writeFileAsync(uploadPath, file.data);
    console.log("File uploaded successfully:", filename);
  } catch (error) {
    console.error("Error uploading file:", error);
  }
}
