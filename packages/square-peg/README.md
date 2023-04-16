# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import SquarePeg from "@electron-fonts/square-peg"

window.addEventListener("DOMContentLoaded", () => {
    SquarePeg.inject()
})
```