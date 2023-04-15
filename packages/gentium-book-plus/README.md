# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import GentiumBookPlus from "@electron-fonts/gentium-book-plus"

window.addEventListener("DOMContentLoaded", () => {
    GentiumBookPlus.inject()
})
```