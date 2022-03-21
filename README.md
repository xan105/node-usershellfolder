About
=====

User shell folders.

Example
=======

```js
import folders from "@xan105/usershellfolder";
const desktop = folders.user.desktop;
//Win: D:\Desktop
//Linux: ~/Desktop
```

Install
=======

```
npm install @xan105/usershellfolder
```


API
===

⚠️ This module is only available as an ECMAScript module (ESM).

## Default export

### Windows

On Windows return an obj as the following:

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

### Linux

On Linux return an obj as the following:

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