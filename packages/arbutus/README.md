# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Arbutus from "@electron-fonts/arbutus"

window.addEventListener("DOMContentLoaded", () => {
    Arbutus.inject()
})
```