# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Inspiration from "@electron-fonts/inspiration"

window.addEventListener("DOMContentLoaded", () => {
    Inspiration.inject()
})
```