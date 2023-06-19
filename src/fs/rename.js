import fs from "fs";

const rename = async () => {
  const pathFile = "./src/fs/files/wrongFilename.txt";
  const pathOutput = "./src/fs/files/properFilename.md";
  if (fs.existsSync(pathOutput)) {
    throw new Error("FS operation failed: output file already exists");
  }
  if (!fs.existsSync(pathFile)) {
    throw new Error("FS operation failed: file does not exist");
  }
  fs.rename(pathFile, pathOutput, () => {
    console.log("File Renamed");
  });
};

await rename();
