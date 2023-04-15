# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import GlassAntiqua from "@electron-fonts/glass-antiqua"

window.addEventListener("DOMContentLoaded", () => {
    GlassAntiqua.inject()
})
```