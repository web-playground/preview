export default function runByWorker(src) {
  const scriptTpl = `const log = console.log;
  console.log(self.postMessage)
console.log = function(){
  self.postMessage(['console.log',...arguments])
  log(...arguments)
}
{{src}}
  `;
  const realSrc = scriptTpl.replace("{{src}}", src);
  const worker = new Worker(URL.createObjectURL(new Blob([realSrc])));
  return worker;
}
