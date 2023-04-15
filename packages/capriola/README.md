# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Capriola from "@electron-fonts/capriola"

window.addEventListener("DOMContentLoaded", () => {
    Capriola.inject()
})
```