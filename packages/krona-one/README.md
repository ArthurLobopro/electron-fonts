# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import KronaOne from "@electron-fonts/krona-one"

window.addEventListener("DOMContentLoaded", () => {
    KronaOne.inject()
})
```