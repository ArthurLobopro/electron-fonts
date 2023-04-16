# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import StickNoBills from "@electron-fonts/stick-no-bills"

window.addEventListener("DOMContentLoaded", () => {
    StickNoBills.inject()
})
```