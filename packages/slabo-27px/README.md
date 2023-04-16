# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Slabo27px from "@electron-fonts/slabo-27px"

window.addEventListener("DOMContentLoaded", () => {
    Slabo27px.inject()
})
```