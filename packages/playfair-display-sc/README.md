# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import PlayfairDisplaySC from "@electron-fonts/playfair-display-sc"

window.addEventListener("DOMContentLoaded", () => {
    PlayfairDisplaySC.inject()
})
```