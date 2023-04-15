# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Junge from "@electron-fonts/junge"

window.addEventListener("DOMContentLoaded", () => {
    Junge.inject()
})
```