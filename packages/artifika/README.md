# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Artifika from "@electron-fonts/artifika"

window.addEventListener("DOMContentLoaded", () => {
    Artifika.inject()
})
```