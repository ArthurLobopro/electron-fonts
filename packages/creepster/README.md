# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Creepster from "@electron-fonts/creepster"

window.addEventListener("DOMContentLoaded", () => {
    Creepster.inject()
})
```