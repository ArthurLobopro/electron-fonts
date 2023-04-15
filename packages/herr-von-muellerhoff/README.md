# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import HerrVonMuellerhoff from "@electron-fonts/herr-von-muellerhoff"

window.addEventListener("DOMContentLoaded", () => {
    HerrVonMuellerhoff.inject()
})
```