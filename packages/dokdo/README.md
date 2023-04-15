# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Dokdo from "@electron-fonts/dokdo"

window.addEventListener("DOMContentLoaded", () => {
    Dokdo.inject()
})
```