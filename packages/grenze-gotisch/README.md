# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import GrenzeGotisch from "@electron-fonts/grenze-gotisch"

window.addEventListener("DOMContentLoaded", () => {
    GrenzeGotisch.inject()
})
```