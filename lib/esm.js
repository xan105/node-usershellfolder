import os from 'os';
import path from 'path';
import regedit from 'regodit';

const system = {
    temp: os.tmpdir() || process.env['TEMP'] || process.env['TMP'],
    root: process.env['SystemRoot'] || process.env['windir'],
};

const user = {
    appData: regedit.RegQueryStringValueAndExpand("HKCU","Software/Microsoft/Windows/CurrentVersion/Explorer/User Shell Folders","AppData") || process.env['APPDATA'],
    localAppData: regedit.RegQueryStringValueAndExpand("HKCU","Software/Microsoft/Windows/CurrentVersion/Explorer/User Shell Folders","Local AppData") || process.env['LOCALAPPDATA'],
    home: os.homedir() || process.env['USERPROFILE'],
    desktop: regedit.RegQueryStringValueAndExpand("HKCU","Software/Microsoft/Windows/CurrentVersion/Explorer/User Shell Folders","Desktop") || 
             path.join(process.env['USERPROFILE'],"Desktop"),
    documents: regedit.RegQueryStringValueAndExpand("HKCU","Software/Microsoft/Windows/CurrentVersion/Explorer/User Shell Folders","{F42EE2D3-909F-4907-8871-4C22FC0BF756}") || //Win10
               regedit.RegQueryStringValueAndExpand("HKCU","Software/Microsoft/Windows/CurrentVersion/Explorer/User Shell Folders","Personal") || 
               path.join(process.env['USERPROFILE'],"Documents"),
    music: regedit.RegQueryStringValueAndExpand("HKCU","Software/Microsoft/Windows/CurrentVersion/Explorer/User Shell Folders","{A0C69A99-21C8-4671-8703-7934162FCF1D}") || //Win10
           regedit.RegQueryStringValueAndExpand("HKCU","Software/Microsoft/Windows/CurrentVersion/Explorer/User Shell Folders","My Music") || 
           path.join(process.env['USERPROFILE'],"Music"),
    pictures: regedit.RegQueryStringValueAndExpand("HKCU","Software/Microsoft/Windows/CurrentVersion/Explorer/User Shell Folders","{0DDD015D-B06C-45D5-8C4C-F59713854639}") || //Win10
              regedit.RegQueryStringValueAndExpand("HKCU","Software/Microsoft/Windows/CurrentVersion/Explorer/User Shell Folders","My Pictures") || 
              path.join(process.env['USERPROFILE'],"Pictures"),
    videos: regedit.RegQueryStringValueAndExpand("HKCU","Software/Microsoft/Windows/CurrentVersion/Explorer/User Shell Folders","{35286A68-3C57-41A1-BBB1-0EAE73D76C95}") || //Win10
            regedit.RegQueryStringValueAndExpand("HKCU","Software/Microsoft/Windows/CurrentVersion/Explorer/User Shell Folders","My Video") || 
            path.join(process.env['USERPROFILE'],"Videos"),
    download: regedit.RegQueryStringValueAndExpand("HKCU","Software/Microsoft/Windows/CurrentVersion/Explorer/User Shell Folders","{7D83EE9B-2244-4E70-B1F5-5393042AF1E4}") || //Win10
              regedit.RegQueryStringValueAndExpand("HKCU","Software/Microsoft/Windows/CurrentVersion/Explorer/User Shell Folders","{374DE290-123F-4565-9164-39C4925E467B}") ||
              path.join(process.env['USERPROFILE'],"Downloads"),
    savegame: regedit.RegQueryStringValueAndExpand("HKCU","Software/Microsoft/Windows/CurrentVersion/Explorer/User Shell Folders","{4C5C32FF-BB9D-43b0-B5B4-2D72E54EAAA4}") || 
              path.join(process.env['USERPROFILE'],"Saved Games"),
};

const common = {
    appData: regedit.RegQueryStringValueAndExpand("HKLM","Software/Microsoft/Windows/CurrentVersion/Explorer/User Shell Folders","Common AppData") || process.env['PROGRAMDATA'],
    home: process.env['PUBLIC'],
    desktop: regedit.RegQueryStringValueAndExpand("HKLM","Software/Microsoft/Windows/CurrentVersion/Explorer/User Shell Folders","Common Desktop") ||
             path.join(process.env['PUBLIC'],"Desktop"),
    documents: regedit.RegQueryStringValueAndExpand("HKLM","Software/Microsoft/Windows/CurrentVersion/Explorer/User Shell Folders","Common Documents") ||
               path.join(process.env['PUBLIC'],"Documents"),
    music: regedit.RegQueryStringValueAndExpand("HKLM","Software/Microsoft/Windows/CurrentVersion/Explorer/User Shell Folders","CommonMusic") ||
           path.join(process.env['PUBLIC'],"Music"),
    pictures: regedit.RegQueryStringValueAndExpand("HKLM","Software/Microsoft/Windows/CurrentVersion/Explorer/User Shell Folders","CommonPictures") ||
              path.join(process.env['PUBLIC'],"Pictures"),
    videos: regedit.RegQueryStringValueAndExpand("HKLM","Software/Microsoft/Windows/CurrentVersion/Explorer/User Shell Folders","CommonVideo") ||
            path.join(process.env['PUBLIC'],"Videos")
}; 

export { system, user, common };