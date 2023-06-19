import fs from "fs";

const list = async () => {
  const pathFile = "./src/fs/files";
  const files = fs.readdirSync(pathFile);
  console.log(files);
};

await list();
