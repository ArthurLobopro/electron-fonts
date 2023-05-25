# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Comme from "@electron-fonts/comme"

window.addEventListener("DOMContentLoaded", () => {
    Comme.inject()
})
```