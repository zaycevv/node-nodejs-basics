const parseArgs = () => {
  const args = process.argv.slice(2);
  const props = {};

  for (let i = 0; i < args.length; i += 2) {
    const propName = args[i].slice(2);
    const propValue = args[i + 1];
    props[propName] = propValue;
  }

  Object.keys(props).forEach((key) => {
    console.log(`--${key} ${props[key]}`);
  });
};

parseArgs();
