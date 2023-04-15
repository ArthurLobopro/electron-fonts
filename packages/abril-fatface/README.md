# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import AbrilFatface from "@electron-fonts/abril-fatface"

window.addEventListener("DOMContentLoaded", () => {
    AbrilFatface.inject()
})
```