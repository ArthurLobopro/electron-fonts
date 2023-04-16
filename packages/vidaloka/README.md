# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Vidaloka from "@electron-fonts/vidaloka"

window.addEventListener("DOMContentLoaded", () => {
    Vidaloka.inject()
})
```