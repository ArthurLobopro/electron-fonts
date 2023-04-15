# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import IBMPlexSansArabic from "@electron-fonts/ibm-plex-sans-arabic"

window.addEventListener("DOMContentLoaded", () => {
    IBMPlexSansArabic.inject()
})
```