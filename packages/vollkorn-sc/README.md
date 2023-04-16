# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import VollkornSC from "@electron-fonts/vollkorn-sc"

window.addEventListener("DOMContentLoaded", () => {
    VollkornSC.inject()
})
```