# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import TiroGurmukhi from "@electron-fonts/tiro-gurmukhi"

window.addEventListener("DOMContentLoaded", () => {
    TiroGurmukhi.inject()
})
```