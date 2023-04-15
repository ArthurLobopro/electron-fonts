# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import GideonRoman from "@electron-fonts/gideon-roman"

window.addEventListener("DOMContentLoaded", () => {
    GideonRoman.inject()
})
```