# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import IBMPlexSansKR from "@electron-fonts/ibm-plex-sans-kr"

window.addEventListener("DOMContentLoaded", () => {
    IBMPlexSansKR.inject()
})
```