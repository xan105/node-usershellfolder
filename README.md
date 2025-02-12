About
=====

User shell folders.

Example
=======

```js
import { folders } from "@xan105/usershellfolder";

const path = folders.user.desktop;
console.log(path);
//Win: C:\Users\Xan\Desktop
//Linux: /home/Xan/Desktop
```

Install
=======

```
npm install @xan105/usershellfolder
```

API
===

⚠️ This module is only available as an ECMAScript module (ESM).

## Named export

### `const folders = object`

#### Windows

On Windows return an object as the following:

```js
{
  root: ...,
  temp: ...,
  user: {
    appData: ...,
    localAppData: ...,
    home: ...,
    desktop: ...,
    documents: ...,
    music: ...,
    pictures: ...,
    videos: ...,
    download: ...,
    savegame: ...
  },
  common: {
    appData: ...,
    home: ...,
    desktop: ...,
    documents: ...,
    music: ...,
    pictures: ...,
    videos: ...
  }
}
```

#### Linux

On Linux return an object as the following:

```js
{
  root: ...,
  temp: ...,
  user: {
    data: ...,
    config: ...,
    cache: ...,
    home: ...,
    desktop: ...,
    documents: ...,
    music: ...,
    pictures: ...,
    videos: ...,
    download: ... 
  }
}
```

### expand(string: string, map?: object = process.env) string

Expand replaces `%VAR%` in the string based on the mapping object. <br />
If no mapping object is provided then it uses `process.env`.

Example:

```js
import { expand, folders } from "@xan105/usershellfolder";

expand("%DOCUMENTS%", folders.user); //C:\\Users\\Xan\\Documents
expand("%APPDATA%"); //C:\\Users\\Xan\\AppData

expand("%USER%", { USER: "foo" }) //foo
expand("%USER%", { user: "foo" }) //foo

expand("%USER%", { FOO: "bar" }) //%USER%
```

## Default export

Alias to `const folders` for backward compatibility