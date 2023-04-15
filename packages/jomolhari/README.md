# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Jomolhari from "@electron-fonts/jomolhari"

window.addEventListener("DOMContentLoaded", () => {
    Jomolhari.inject()
})
```