import { tmpdir } from 'node:os';

const temp = tmpdir() || process.env['TEMP'] || process.env['TMP'];
const root = process.env['SystemRoot'] || process.env['windir'];

export {
  temp,
  root
};