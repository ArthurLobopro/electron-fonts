# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Kavivanar from "@electron-fonts/kavivanar"

window.addEventListener("DOMContentLoaded", () => {
    Kavivanar.inject()
})
```