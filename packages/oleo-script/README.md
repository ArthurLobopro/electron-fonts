# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import OleoScript from "@electron-fonts/oleo-script"

window.addEventListener("DOMContentLoaded", () => {
    OleoScript.inject()
})
```