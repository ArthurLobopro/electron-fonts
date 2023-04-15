# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import IBMPlexSerif from "@electron-fonts/ibm-plex-serif"

window.addEventListener("DOMContentLoaded", () => {
    IBMPlexSerif.inject()
})
```