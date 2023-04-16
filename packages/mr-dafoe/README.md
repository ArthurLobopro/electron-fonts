# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import MrDafoe from "@electron-fonts/mr-dafoe"

window.addEventListener("DOMContentLoaded", () => {
    MrDafoe.inject()
})
```