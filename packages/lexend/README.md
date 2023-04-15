# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Lexend from "@electron-fonts/lexend"

window.addEventListener("DOMContentLoaded", () => {
    Lexend.inject()
})
```