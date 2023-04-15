# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Hanuman from "@electron-fonts/hanuman"

window.addEventListener("DOMContentLoaded", () => {
    Hanuman.inject()
})
```