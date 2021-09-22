import { join } from 'node:path';
import { RegQueryStringValueAndExpand } from 'regodit';

const UserShellFolders = "Software/Microsoft/Windows/CurrentVersion/Explorer/User Shell Folders";

const common = {
  appData: RegQueryStringValueAndExpand("HKLM",UserShellFolders,"Common AppData") || process.env['PROGRAMDATA'],
  home: process.env['PUBLIC'],
  desktop: RegQueryStringValueAndExpand("HKLM",UserShellFolders,"Common Desktop") ||
           join(process.env['PUBLIC'],"Desktop"),
  documents: RegQueryStringValueAndExpand("HKLM",UserShellFolders,"Common Documents") ||
             join(process.env['PUBLIC'],"Documents"),
  music: RegQueryStringValueAndExpand("HKLM",UserShellFolders,"CommonMusic") ||
         join(process.env['PUBLIC'],"Music"),
  pictures: RegQueryStringValueAndExpand("HKLM",UserShellFolders,"CommonPictures") ||
            join(process.env['PUBLIC'],"Pictures"),
  videos: RegQueryStringValueAndExpand("HKLM",UserShellFolders,"CommonVideo") ||
          join(process.env['PUBLIC'],"Videos")
}; 

export { common };