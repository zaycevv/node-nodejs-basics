import fs from "fs";

const create = async () => {
  const path = "./src/fs/files/fresh.txt";
  if (!fs.existsSync(path)) {
    fs.writeFile(path, "I am fresh and young", function (err) {
      if (err) {
        throw new Error(err);
      }
    });
  } else {
    throw new Error("FS operation failed: file already exists");
  }
};

await create();
