# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import IBMPlexMono from "@electron-fonts/ibm-plex-mono"

window.addEventListener("DOMContentLoaded", () => {
    IBMPlexMono.inject()
})
```