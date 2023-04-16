# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import OoohBaby from "@electron-fonts/oooh-baby"

window.addEventListener("DOMContentLoaded", () => {
    OoohBaby.inject()
})
```