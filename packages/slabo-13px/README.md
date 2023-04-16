# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Slabo13px from "@electron-fonts/slabo-13px"

window.addEventListener("DOMContentLoaded", () => {
    Slabo13px.inject()
})
```