# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Moul from "@electron-fonts/moul"

window.addEventListener("DOMContentLoaded", () => {
    Moul.inject()
})
```