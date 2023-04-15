# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import InriaSans from "@electron-fonts/inria-sans"

window.addEventListener("DOMContentLoaded", () => {
    InriaSans.inject()
})
```