# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Wellfleet from "@electron-fonts/wellfleet"

window.addEventListener("DOMContentLoaded", () => {
    Wellfleet.inject()
})
```