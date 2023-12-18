const { spawn } = require('child_process');
const argv = process.argv.slice(2);

const name =
  argv.slice(argv.length / 2 + (argv.length % 2 === 0 ? 0 : 1)).map((name) => `apps/${name}`)[0] ||
  'apps/admin';
const run = spawn(process.platform === 'win32' ? 'pnpm.cmd' : 'pnpm', ['run', '-C', name, 'dev']);

run.stdout.on('data', (msg) => {
  console.log(`${msg}`);
});
run.stderr.on('data', (msg) => {
  console.error(`${msg}`);
});
run.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
run.on('error', (code) => {
  console.log('\x1B[31m%s\x1B[0m', code);
});
