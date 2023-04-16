# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Stalemate from "@electron-fonts/stalemate"

window.addEventListener("DOMContentLoaded", () => {
    Stalemate.inject()
})
```