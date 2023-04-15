# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import MissFajardose from "@electron-fonts/miss-fajardose"

window.addEventListener("DOMContentLoaded", () => {
    MissFajardose.inject()
})
```