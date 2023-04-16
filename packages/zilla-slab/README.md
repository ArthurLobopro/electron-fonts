# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import ZillaSlab from "@electron-fonts/zilla-slab"

window.addEventListener("DOMContentLoaded", () => {
    ZillaSlab.inject()
})
```