# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import CantoraOne from "@electron-fonts/cantora-one"

window.addEventListener("DOMContentLoaded", () => {
    CantoraOne.inject()
})
```