# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Aleo from "@electron-fonts/aleo"

window.addEventListener("DOMContentLoaded", () => {
    Aleo.inject()
})
```