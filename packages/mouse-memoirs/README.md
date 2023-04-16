# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import MouseMemoirs from "@electron-fonts/mouse-memoirs"

window.addEventListener("DOMContentLoaded", () => {
    MouseMemoirs.inject()
})
```