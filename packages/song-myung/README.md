# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import SongMyung from "@electron-fonts/song-myung"

window.addEventListener("DOMContentLoaded", () => {
    SongMyung.inject()
})
```