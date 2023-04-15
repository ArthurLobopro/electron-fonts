# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import LondrinaSolid from "@electron-fonts/londrina-solid"

window.addEventListener("DOMContentLoaded", () => {
    LondrinaSolid.inject()
})
```