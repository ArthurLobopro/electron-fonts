# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Hind from "@electron-fonts/hind"

window.addEventListener("DOMContentLoaded", () => {
    Hind.inject()
})
```