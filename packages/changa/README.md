# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Changa from "@electron-fonts/changa"

window.addEventListener("DOMContentLoaded", () => {
    Changa.inject()
})
```