# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import AlikeAngular from "@electron-fonts/alike-angular"

window.addEventListener("DOMContentLoaded", () => {
    AlikeAngular.inject()
})
```