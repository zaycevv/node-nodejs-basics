import { Worker } from "worker_threads";

const performCalculations = async () => {
  const worker = new Worker("./worker.js", { workerData: 1 });

  worker.on("message", (result) => {
    console.log(result);
  });
};

await performCalculations();
