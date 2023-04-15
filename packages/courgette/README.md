# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Courgette from "@electron-fonts/courgette"

window.addEventListener("DOMContentLoaded", () => {
    Courgette.inject()
})
```