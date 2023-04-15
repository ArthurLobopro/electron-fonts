# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import IBMPlexSansDevanagari from "@electron-fonts/ibm-plex-sans-devanagari"

window.addEventListener("DOMContentLoaded", () => {
    IBMPlexSansDevanagari.inject()
})
```