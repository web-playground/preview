export default {
  input: "src/runByWorker.js",
  output: {
    dir: "dist",
    // format:'cjs'
    format: "iife",
    name: "runByWorker",
  },
};
