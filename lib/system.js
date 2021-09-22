import { tmpdir } from 'node:os';

const system = {
  temp: tmpdir() || process.env['TEMP'] || process.env['TMP'],
  root: process.env['SystemRoot'] || process.env['windir'],
};

export { system }