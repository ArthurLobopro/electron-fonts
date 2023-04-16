# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import OdibeeSans from "@electron-fonts/odibee-sans"

window.addEventListener("DOMContentLoaded", () => {
    OdibeeSans.inject()
})
```