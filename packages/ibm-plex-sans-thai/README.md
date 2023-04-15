# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import IBMPlexSansThai from "@electron-fonts/ibm-plex-sans-thai"

window.addEventListener("DOMContentLoaded", () => {
    IBMPlexSansThai.inject()
})
```