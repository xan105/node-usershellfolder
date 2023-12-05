/*
Copyright (c) Anthony Beaumont
This source code is licensed under the MIT License
found in the LICENSE file in the root directory of this source tree.
*/

import { homedir, tmpdir } from "node:os";
import { join } from "node:path";
import { regQueryStringValueAndExpand } from "regodit";

const key = "Software/Microsoft/Windows/CurrentVersion/Explorer/User Shell Folders";

export const folders = {
  root: process.env["SystemRoot"] || process.env["windir"],
  temp: tmpdir() || process.env["TEMP"] || process.env["TMP"],
  user: {
    appData: regQueryStringValueAndExpand("HKCU", key, "AppData") || process.env["APPDATA"],
    localAppData: regQueryStringValueAndExpand("HKCU", key, "Local AppData") || process.env["LOCALAPPDATA"],
    home: homedir() || process.env["USERPROFILE"],
    desktop: regQueryStringValueAndExpand("HKCU", key, "Desktop") || 
             join(process.env["USERPROFILE"], "Desktop"),
    documents: regQueryStringValueAndExpand("HKCU", key, "{F42EE2D3-909F-4907-8871-4C22FC0BF756}") || //Win10
               regQueryStringValueAndExpand("HKCU", key, "Personal") || 
               join(process.env["USERPROFILE"], "Documents"),
    music: regQueryStringValueAndExpand("HKCU", key, "{A0C69A99-21C8-4671-8703-7934162FCF1D}") || //Win10
           regQueryStringValueAndExpand("HKCU", key, "My Music") || 
           join(process.env["USERPROFILE"], "Music"),
    pictures: regQueryStringValueAndExpand("HKCU", key, "{0DDD015D-B06C-45D5-8C4C-F59713854639}") || //Win10
              regQueryStringValueAndExpand("HKCU", key, "My Pictures") || 
              join(process.env["USERPROFILE"], "Pictures"),
    videos: regQueryStringValueAndExpand("HKCU", key, "{35286A68-3C57-41A1-BBB1-0EAE73D76C95}") || //Win10
            regQueryStringValueAndExpand("HKCU", key, "My Video") || 
            join(process.env["USERPROFILE"], "Videos"),
    download: regQueryStringValueAndExpand("HKCU", key, "{7D83EE9B-2244-4E70-B1F5-5393042AF1E4}") || //Win10
              regQueryStringValueAndExpand("HKCU", key, "{374DE290-123F-4565-9164-39C4925E467B}") ||
              join(process.env["USERPROFILE"], "Downloads"),
    savegame: regQueryStringValueAndExpand("HKCU", key, "{4C5C32FF-BB9D-43b0-B5B4-2D72E54EAAA4}") || 
              join(process.env["USERPROFILE"], "Saved Games")
  },
  common: {
    appData: regQueryStringValueAndExpand("HKLM", key, "Common AppData") || process.env["PROGRAMDATA"],
    home: process.env["PUBLIC"],
    desktop: regQueryStringValueAndExpand("HKLM", key, "Common Desktop") ||
             join(process.env["PUBLIC"], "Desktop"),
    documents: regQueryStringValueAndExpand("HKLM", key, "Common Documents") ||
               join(process.env["PUBLIC"], "Documents"),
    music: regQueryStringValueAndExpand("HKLM", key, "CommonMusic") ||
           join(process.env["PUBLIC"], "Music"),
    pictures: regQueryStringValueAndExpand("HKLM", key, "CommonPictures") ||
              join(process.env["PUBLIC"], "Pictures"),
    videos: regQueryStringValueAndExpand("HKLM", key, "CommonVideo") ||
            join(process.env["PUBLIC"], "Videos")
  }
};