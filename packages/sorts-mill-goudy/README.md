# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import SortsMillGoudy from "@electron-fonts/sorts-mill-goudy"

window.addEventListener("DOMContentLoaded", () => {
    SortsMillGoudy.inject()
})
```