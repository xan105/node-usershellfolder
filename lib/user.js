import { homedir } from 'node:os';
import { join } from 'node:path';
import { RegQueryStringValueAndExpand } from 'regodit';

const UserShellFolders = "Software/Microsoft/Windows/CurrentVersion/Explorer/User Shell Folders";

const appData = RegQueryStringValueAndExpand("HKCU",UserShellFolders,"AppData") || process.env['APPDATA'];
const localAppData = RegQueryStringValueAndExpand("HKCU",UserShellFolders,"Local AppData") || process.env['LOCALAPPDATA'];
const home = homedir() || process.env['USERPROFILE'];
const desktop = RegQueryStringValueAndExpand("HKCU",UserShellFolders,"Desktop") || 
                join(process.env['USERPROFILE'],"Desktop");
const documents = RegQueryStringValueAndExpand("HKCU",UserShellFolders,"{F42EE2D3-909F-4907-8871-4C22FC0BF756}") || //Win10
             RegQueryStringValueAndExpand("HKCU",UserShellFolders,"Personal") || 
             join(process.env['USERPROFILE'],"Documents");
const music = RegQueryStringValueAndExpand("HKCU",UserShellFolders,"{A0C69A99-21C8-4671-8703-7934162FCF1D}") || //Win10
              RegQueryStringValueAndExpand("HKCU",UserShellFolders,"My Music") || 
              join(process.env['USERPROFILE'],"Music");
const pictures = RegQueryStringValueAndExpand("HKCU",UserShellFolders,"{0DDD015D-B06C-45D5-8C4C-F59713854639}") || //Win10
                 RegQueryStringValueAndExpand("HKCU",UserShellFolders,"My Pictures") || 
                 join(process.env['USERPROFILE'],"Pictures");
const videos = RegQueryStringValueAndExpand("HKCU",UserShellFolders,"{35286A68-3C57-41A1-BBB1-0EAE73D76C95}") || //Win10
               RegQueryStringValueAndExpand("HKCU",UserShellFolders,"My Video") || 
               join(process.env['USERPROFILE'],"Videos");
const download = RegQueryStringValueAndExpand("HKCU",UserShellFolders,"{7D83EE9B-2244-4E70-B1F5-5393042AF1E4}") || //Win10
                 RegQueryStringValueAndExpand("HKCU",UserShellFolders,"{374DE290-123F-4565-9164-39C4925E467B}") ||
                 join(process.env['USERPROFILE'],"Downloads");
const savegame = RegQueryStringValueAndExpand("HKCU",UserShellFolders,"{4C5C32FF-BB9D-43b0-B5B4-2D72E54EAAA4}") || 
                 join(process.env['USERPROFILE'],"Saved Games");

export { 
  appData,
  localAppData,
  home,
  desktop,
  documents,
  music,
  pictures,
  videos,
  download,
  savegame
};