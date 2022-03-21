/*
Copyright (c) Anthony Beaumont
This source code is licensed under the MIT License
found in the LICENSE file in the root directory of this source tree.
*/

import { platform } from "node:os";
const module = platform() === "win32" ? (await import("./win32.js")).default : (await import("./linux.js")).default;
export { module as default };