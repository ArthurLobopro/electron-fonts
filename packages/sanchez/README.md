# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Sanchez from "@electron-fonts/sanchez"

window.addEventListener("DOMContentLoaded", () => {
    Sanchez.inject()
})
```