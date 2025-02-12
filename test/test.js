import { folders, expand } from "../lib/index.js";

console.dir(folders, { depth: null });

console.log(expand("%APPDATA%"));
console.log(expand("%DOCUMENTS%", folders.user));
console.log(expand("%DOCUMENTS%", folders.common));