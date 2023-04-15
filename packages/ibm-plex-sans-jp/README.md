# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import IBMPlexSansJP from "@electron-fonts/ibm-plex-sans-jp"

window.addEventListener("DOMContentLoaded", () => {
    IBMPlexSansJP.inject()
})
```