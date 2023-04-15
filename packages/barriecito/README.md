# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Barriecito from "@electron-fonts/barriecito"

window.addEventListener("DOMContentLoaded", () => {
    Barriecito.inject()
})
```