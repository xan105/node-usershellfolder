/*
Copyright (c) Anthony Beaumont
This source code is licensed under the MIT License
found in the LICENSE file in the root directory of this source tree.
*/

import { platform } from "node:os";

const { folders } = await import(platform() === "win32" ? "./win32.js" : "./linux.js");
export { 
  folders,
  folders as default //backward compatibility
};