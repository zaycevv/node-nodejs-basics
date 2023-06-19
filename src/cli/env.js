const parseEnv = () => {
  Object.keys(process.env).forEach((key) => {
    if (key.startsWith("RSS_")) {
      console.log(`RSS_${key.slice(4)}=${process.env[key]}`);
    }
  });
};

parseEnv();
