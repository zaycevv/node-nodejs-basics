import fs from "fs";
import { Writable } from "stream";

const write = async () => {
  const pathFile = "./src/streams/files/fileToWrite.txt";
  const fileToWrite = fs.createWriteStream(pathFile);

  const write = new Writable({
    write(chunk, encoding, callback) {
      fileToWrite.write(chunk);
      callback();
    },
  });

  process.stdin.pipe(write);
};

await write();
