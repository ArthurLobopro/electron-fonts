# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Meddon from "@electron-fonts/meddon"

window.addEventListener("DOMContentLoaded", () => {
    Meddon.inject()
})
```