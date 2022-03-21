/*
Copyright (c) Anthony Beaumont
This source code is licensed under the MIT License
found in the LICENSE file in the root directory of this source tree.
*/

import { homedir, tmpdir } from "node:os";
import { join } from "node:path";

const linux = {
  root: join("/"),
  temp: tmpdir() || process.env['TMPDIR'],
  user: {
    data: process.env['XDG_DATA_HOME'] || join(process.env['$HOME'], "/.local/share"),
    config: process.env['XDG_CONFIG_HOME'] || join(process.env['$HOME'], "/.config"),
    cache: process.env['XDG_CACHE_HOME'] || join(process.env['$HOME'], "/.cache"),
    home: homedir() || process.env['$HOME'],
    desktop: process.env['XDG_DESKTOP_DIR'] || join(process.env['$HOME'], "Desktop"),
    documents: process.env['XDG_DOCUMENTS_DIR'] || join(process.env['$HOME'], "Documents"),
    music: process.env['XDG_MUSIC_DIR'] || join(process.env['$HOME'], "Music"),
    pictures: process.env['XDG_PICTURES_DIR'] || join(process.env['$HOME'], "Pictures"),
    videos: process.env['XDG_VIDEOS_DIR'] || join(process.env['$HOME'], "Videos"),
    download: process.env['XDG_DOWNLOAD_DIR'] || join(process.env['$HOME'], "Downloads") 
  }
};

export { linux as default };