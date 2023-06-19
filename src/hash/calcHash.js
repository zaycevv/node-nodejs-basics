import crypto from "crypto";
import fs from "fs";

const calculateHash = async () => {
  const pathFile = "./src/hash/files/fileToCalculateHashFor.txt";
  const fileBuffer = fs.readFileSync(pathFile);
  const hash = crypto.createHash("sha256");
  hash.update(fileBuffer);

  const hex = hash.digest("hex");

  console.log(hex);
};

await calculateHash();
