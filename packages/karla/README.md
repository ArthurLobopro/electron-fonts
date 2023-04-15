# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Karla from "@electron-fonts/karla"

window.addEventListener("DOMContentLoaded", () => {
    Karla.inject()
})
```