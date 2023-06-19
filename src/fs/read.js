import fs from "fs";

const read = async () => {
  const pathFile = "./src/fs/files/fileToRead.txt";
  if (!fs.existsSync(pathFile)) {
    throw new Error("FS operation failed: file does not exist");
  }

  const result = fs.readFileSync(pathFile, "utf8");
  console.log(result);
};

await read();
