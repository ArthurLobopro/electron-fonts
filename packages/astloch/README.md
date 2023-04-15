# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Astloch from "@electron-fonts/astloch"

window.addEventListener("DOMContentLoaded", () => {
    Astloch.inject()
})
```