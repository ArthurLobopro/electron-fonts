# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NanumPenScript from "@electron-fonts/nanum-pen-script"

window.addEventListener("DOMContentLoaded", () => {
    NanumPenScript.inject()
})
```