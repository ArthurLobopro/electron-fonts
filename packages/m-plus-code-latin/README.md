# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import MPLUSCodeLatin from "@electron-fonts/m-plus-code-latin"

window.addEventListener("DOMContentLoaded", () => {
    MPLUSCodeLatin.inject()
})
```