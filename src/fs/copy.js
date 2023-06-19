import fs from "fs";
import path from "path";

const copy = async () => {
  const pathFile = "./src/fs/files";
  const outputPath = "./src/fs/files_copy";

  if (!fs.existsSync(pathFile)) {
    throw new Error("FS operation failed: folder does not exist");
  }
  if (fs.existsSync(outputPath)) {
    throw new Error(
      "FS operation failed: a folder with this name already exists"
    );
  }

  fs.mkdirSync(outputPath);
  const files = fs.readdirSync(pathFile);

  for (let i = 0; i < files.length; i++) {
    const sourceFile = path.join(pathFile, files[i]);
    const destFile = path.join(outputPath, files[i]);

    const sourceFileStat = fs.statSync(sourceFile);
    if (sourceFileStat.isDirectory()) {
      copyFolder(sourceFile, destFile);
    } else {
      fs.copyFileSync(sourceFile, destFile);
    }
  }
};

await copy();
