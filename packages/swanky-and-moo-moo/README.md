# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import SwankyandMooMoo from "@electron-fonts/swanky-and-moo-moo"

window.addEventListener("DOMContentLoaded", () => {
    SwankyandMooMoo.inject()
})
```