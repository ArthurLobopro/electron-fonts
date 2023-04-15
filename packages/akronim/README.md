# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Akronim from "@electron-fonts/akronim"

window.addEventListener("DOMContentLoaded", () => {
    Akronim.inject()
})
```