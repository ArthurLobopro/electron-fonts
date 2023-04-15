# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Gurajada from "@electron-fonts/gurajada"

window.addEventListener("DOMContentLoaded", () => {
    Gurajada.inject()
})
```