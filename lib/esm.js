import { tmpdir , homedir } from 'node:os';
import { join } from 'node:path';
import regedit from 'regodit';

const system = {
    temp: tmpdir() || process.env['TEMP'] || process.env['TMP'],
    root: process.env['SystemRoot'] || process.env['windir'],
};

const UserShellFolders = "Software/Microsoft/Windows/CurrentVersion/Explorer/User Shell Folders";

const user = {
    appData: regedit.RegQueryStringValueAndExpand("HKCU",UserShellFolders,"AppData") || process.env['APPDATA'],
    localAppData: regedit.RegQueryStringValueAndExpand("HKCU",UserShellFolders,"Local AppData") || process.env['LOCALAPPDATA'],
    home: homedir() || process.env['USERPROFILE'],
    desktop: regedit.RegQueryStringValueAndExpand("HKCU",UserShellFolders,"Desktop") || 
             join(process.env['USERPROFILE'],"Desktop"),
    documents: regedit.RegQueryStringValueAndExpand("HKCU",UserShellFolders,"{F42EE2D3-909F-4907-8871-4C22FC0BF756}") || //Win10
               regedit.RegQueryStringValueAndExpand("HKCU",UserShellFolders,"Personal") || 
               join(process.env['USERPROFILE'],"Documents"),
    music: regedit.RegQueryStringValueAndExpand("HKCU",UserShellFolders,"{A0C69A99-21C8-4671-8703-7934162FCF1D}") || //Win10
           regedit.RegQueryStringValueAndExpand("HKCU",UserShellFolders,"My Music") || 
           join(process.env['USERPROFILE'],"Music"),
    pictures: regedit.RegQueryStringValueAndExpand("HKCU",UserShellFolders,"{0DDD015D-B06C-45D5-8C4C-F59713854639}") || //Win10
              regedit.RegQueryStringValueAndExpand("HKCU",UserShellFolders,"My Pictures") || 
              join(process.env['USERPROFILE'],"Pictures"),
    videos: regedit.RegQueryStringValueAndExpand("HKCU",UserShellFolders,"{35286A68-3C57-41A1-BBB1-0EAE73D76C95}") || //Win10
            regedit.RegQueryStringValueAndExpand("HKCU",UserShellFolders,"My Video") || 
            join(process.env['USERPROFILE'],"Videos"),
    download: regedit.RegQueryStringValueAndExpand("HKCU",UserShellFolders,"{7D83EE9B-2244-4E70-B1F5-5393042AF1E4}") || //Win10
              regedit.RegQueryStringValueAndExpand("HKCU",UserShellFolders,"{374DE290-123F-4565-9164-39C4925E467B}") ||
              join(process.env['USERPROFILE'],"Downloads"),
    savegame: regedit.RegQueryStringValueAndExpand("HKCU",UserShellFolders,"{4C5C32FF-BB9D-43b0-B5B4-2D72E54EAAA4}") || 
              join(process.env['USERPROFILE'],"Saved Games"),
};

const common = {
    appData: regedit.RegQueryStringValueAndExpand("HKLM",UserShellFolders,"Common AppData") || process.env['PROGRAMDATA'],
    home: process.env['PUBLIC'],
    desktop: regedit.RegQueryStringValueAndExpand("HKLM",UserShellFolders,"Common Desktop") ||
             join(process.env['PUBLIC'],"Desktop"),
    documents: regedit.RegQueryStringValueAndExpand("HKLM",UserShellFolders,"Common Documents") ||
               join(process.env['PUBLIC'],"Documents"),
    music: regedit.RegQueryStringValueAndExpand("HKLM",UserShellFolders,"CommonMusic") ||
           join(process.env['PUBLIC'],"Music"),
    pictures: regedit.RegQueryStringValueAndExpand("HKLM",UserShellFolders,"CommonPictures") ||
              join(process.env['PUBLIC'],"Pictures"),
    videos: regedit.RegQueryStringValueAndExpand("HKLM",UserShellFolders,"CommonVideo") ||
            join(process.env['PUBLIC'],"Videos")
}; 

export { system, user, common };