import fs from "fs";

const read = async () => {
  const pathFile = "./src/streams/files/fileToRead.txt";
  const readableStream = fs.createReadStream(pathFile);

  readableStream.on("data", (chunk) => {
    process.stdout.write(chunk);
  });

  readableStream.on("error", (error) => {
    console.error(error);
  });

  readableStream.on("end", () => {
    console.log();
    console.log("Reading completed");
  });
};

await read();
