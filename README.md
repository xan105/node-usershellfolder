About
=====

User shell folders.

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