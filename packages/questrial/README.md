# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Questrial from "@electron-fonts/questrial"

window.addEventListener("DOMContentLoaded", () => {
    Questrial.inject()
})
```