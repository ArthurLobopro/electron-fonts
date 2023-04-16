# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import RobotoFlex from "@electron-fonts/roboto-flex"

window.addEventListener("DOMContentLoaded", () => {
    RobotoFlex.inject()
})
```