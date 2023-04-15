# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import LovedbytheKing from "@electron-fonts/loved-by-the-king"

window.addEventListener("DOMContentLoaded", () => {
    LovedbytheKing.inject()
})
```