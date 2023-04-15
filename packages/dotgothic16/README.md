# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import DotGothic16 from "@electron-fonts/dotgothic16"

window.addEventListener("DOMContentLoaded", () => {
    DotGothic16.inject()
})
```