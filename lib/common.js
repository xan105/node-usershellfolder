import { join } from 'node:path';
import { RegQueryStringValueAndExpand } from 'regodit';

const UserShellFolders = "Software/Microsoft/Windows/CurrentVersion/Explorer/User Shell Folders";

const appData = RegQueryStringValueAndExpand("HKLM",UserShellFolders,"Common AppData") || process.env['PROGRAMDATA'];
const home = process.env['PUBLIC'];
const desktop = RegQueryStringValueAndExpand("HKLM",UserShellFolders,"Common Desktop") ||
                join(process.env['PUBLIC'],"Desktop");
const documents = RegQueryStringValueAndExpand("HKLM",UserShellFolders,"Common Documents") ||
                  join(process.env['PUBLIC'],"Documents");
const music = RegQueryStringValueAndExpand("HKLM",UserShellFolders,"CommonMusic") ||
              join(process.env['PUBLIC'],"Music");
const pictures = RegQueryStringValueAndExpand("HKLM",UserShellFolders,"CommonPictures") ||
                 join(process.env['PUBLIC'],"Pictures");
const videos = RegQueryStringValueAndExpand("HKLM",UserShellFolders,"CommonVideo") ||
               join(process.env['PUBLIC'],"Videos");

export {
  appData,
  home,
  desktop,
  documents,
  music,
  pictures,
  videos
};