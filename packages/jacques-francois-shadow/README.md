# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import JacquesFrancoisShadow from "@electron-fonts/jacques-francois-shadow"

window.addEventListener("DOMContentLoaded", () => {
    JacquesFrancoisShadow.inject()
})
```