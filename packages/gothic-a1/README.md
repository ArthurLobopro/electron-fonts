# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import GothicA1 from "@electron-fonts/gothic-a1"

window.addEventListener("DOMContentLoaded", () => {
    GothicA1.inject()
})
```