# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import FiraCode from "@electron-fonts/fira-code"

window.addEventListener("DOMContentLoaded", () => {
    FiraCode.inject()
})
```