# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Radley from "@electron-fonts/radley"

window.addEventListener("DOMContentLoaded", () => {
    Radley.inject()
})
```