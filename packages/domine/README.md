# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Domine from "@electron-fonts/domine"

window.addEventListener("DOMContentLoaded", () => {
    Domine.inject()
})
```