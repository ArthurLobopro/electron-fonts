# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import StintUltraExpanded from "@electron-fonts/stint-ultra-expanded"

window.addEventListener("DOMContentLoaded", () => {
    StintUltraExpanded.inject()
})
```