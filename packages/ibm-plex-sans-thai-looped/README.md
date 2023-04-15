# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import IBMPlexSansThaiLooped from "@electron-fonts/ibm-plex-sans-thai-looped"

window.addEventListener("DOMContentLoaded", () => {
    IBMPlexSansThaiLooped.inject()
})
```