/*
Copyright (c) Anthony Beaumont
This source code is licensed under the MIT License
found in the LICENSE file in the root directory of this source tree.
*/

import { platform } from "node:os";
import { shouldStringNotEmpty, shouldObj } from "@xan105/is/assert";
import { isStringNotEmpty } from "@xan105/is";

export function expand(string, map = process.env){
  shouldStringNotEmpty(string);
  shouldObj(map);
  return string.replace(/%([^%]+)%/g, (match) => {
    const variable = match.replaceAll("%", "");
    const name = Object.keys(map).find(key => key.toUpperCase() === variable);
    if(name && isStringNotEmpty(map[name])) return map[name];
    return match;
  });
}

const { folders } = await import(platform() === "win32" ? "./win32.js" : "./linux.js");
export { 
  folders,
  folders as default //backward compatibility 
};