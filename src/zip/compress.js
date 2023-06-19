import fs from "fs";
import zlib from "zlib";
import { Transform } from "stream";

const compress = async () => {
  const pathFile = "src/zip/files/fileToCompress.txt";
  const outputPath = "src/zip/files/archive.gz";
  const compress = zlib.createGzip();
  const inputStream = fs.createReadStream(pathFile);
  const outputStream = fs.createWriteStream(outputPath);

  const transformStream = new Transform({
    transform(chunk, encoding, callback) {
      callback(null, chunk.toString().toUpperCase());
    },
  });

  inputStream.pipe(transformStream).pipe(compress).pipe(outputStream);
};

await compress();
