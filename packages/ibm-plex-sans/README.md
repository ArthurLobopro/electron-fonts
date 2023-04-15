# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import IBMPlexSans from "@electron-fonts/ibm-plex-sans"

window.addEventListener("DOMContentLoaded", () => {
    IBMPlexSans.inject()
})
```