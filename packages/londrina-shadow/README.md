# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import LondrinaShadow from "@electron-fonts/londrina-shadow"

window.addEventListener("DOMContentLoaded", () => {
    LondrinaShadow.inject()
})
```