# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import JetBrainsMono from "@electron-fonts/jetbrains-mono"

window.addEventListener("DOMContentLoaded", () => {
    JetBrainsMono.inject()
})
```