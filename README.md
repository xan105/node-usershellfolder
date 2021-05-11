Windows user shell folders

Install
-------

```
npm install @xan105/userShellFolder
```

⚠️ This module is only available as an ECMAScript module (ESM).

API
---

### system
- temp
- root

### user
- appData
- localAppData
- home
- desktop
- documents
- music
- pictures
- videos
- download
- savegame

### common
- appData
- home
- desktop
- documents
- music
- pictures
- videos

## Example

```js
{
  system: { 
    temp: 'C:\\Users\\Xan\\AppData\\Local\\Temp', 
    root: 'C:\\WINDOWS' 
  },
  user: {
    appData: 'C:\\Users\\Xan\\AppData\\Roaming',
    localAppData: 'C:\\Users\\Xan\\AppData\\Local',
    home: 'C:\\Users\\Xan',
    desktop: 'D:\\Desktop',
    documents: 'D:\\Documents',
    music: 'D:\\Music',
    pictures: 'D:\\Pictures',
    videos: 'D:\\Videos',
    download: 'D:\\Downloads',
    savegame: 'D:\\Saved Games'
  },
  common: {
    appData: 'C:\\ProgramData',
    home: 'C:\\Users\\Public',
    desktop: 'C:\\Users\\Public\\Desktop',
    documents: 'C:\\Users\\Public\\Documents',
    music: 'C:\\Users\\Public\\Music',
    pictures: 'C:\\Users\\Public\\Pictures',
    videos: 'C:\\Users\\Public\\Videos'
  }
}
```

Usage example
-------------

```js

// named export
import * as userShellFolder from '@xan105/userShellFolder';
import { user as userShellFolder } from '@xan105/userShellFolder';

console.log(userShellFolder);

```

