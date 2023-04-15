# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import LavishlyYours from "@electron-fonts/lavishly-yours"

window.addEventListener("DOMContentLoaded", () => {
    LavishlyYours.inject()
})
```