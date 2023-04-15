# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import InknutAntiqua from "@electron-fonts/inknut-antiqua"

window.addEventListener("DOMContentLoaded", () => {
    InknutAntiqua.inject()
})
```