# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import IndieFlower from "@electron-fonts/indie-flower"

window.addEventListener("DOMContentLoaded", () => {
    IndieFlower.inject()
})
```