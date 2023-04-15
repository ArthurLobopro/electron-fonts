# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Buenard from "@electron-fonts/buenard"

window.addEventListener("DOMContentLoaded", () => {
    Buenard.inject()
})
```