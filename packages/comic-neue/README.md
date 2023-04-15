# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import ComicNeue from "@electron-fonts/comic-neue"

window.addEventListener("DOMContentLoaded", () => {
    ComicNeue.inject()
})
```