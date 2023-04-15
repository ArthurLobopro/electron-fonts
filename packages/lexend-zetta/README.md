# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import LexendZetta from "@electron-fonts/lexend-zetta"

window.addEventListener("DOMContentLoaded", () => {
    LexendZetta.inject()
})
```