# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Voltaire from "@electron-fonts/voltaire"

window.addEventListener("DOMContentLoaded", () => {
    Voltaire.inject()
})
```