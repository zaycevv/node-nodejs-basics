const decompress = async () => {
  const pathFile = "src/zip/files/archive.gz";
  const outputPath = "src/zip/files/fileToCompress.txt";

  const decompress = zlib.createGunzip();
  const inputStream = fs.createReadStream(pathFile);
  const outputStream = fs.createWriteStream(outputPath);

  inputStream.pipe(decompress).pipe(outputStream);
};

await decompress();
