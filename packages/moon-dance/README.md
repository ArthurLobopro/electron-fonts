# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import MoonDance from "@electron-fonts/moon-dance"

window.addEventListener("DOMContentLoaded", () => {
    MoonDance.inject()
})
```