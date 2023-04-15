# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import CedarvilleCursive from "@electron-fonts/cedarville-cursive"

window.addEventListener("DOMContentLoaded", () => {
    CedarvilleCursive.inject()
})
```