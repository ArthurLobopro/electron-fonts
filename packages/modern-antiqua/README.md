# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import ModernAntiqua from "@electron-fonts/modern-antiqua"

window.addEventListener("DOMContentLoaded", () => {
    ModernAntiqua.inject()
})
```