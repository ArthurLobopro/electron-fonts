# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import JacquesFrancois from "@electron-fonts/jacques-francois"

window.addEventListener("DOMContentLoaded", () => {
    JacquesFrancois.inject()
})
```