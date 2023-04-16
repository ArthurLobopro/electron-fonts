# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Sarala from "@electron-fonts/sarala"

window.addEventListener("DOMContentLoaded", () => {
    Sarala.inject()
})
```