# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import EncodeSansSemiExpanded from "@electron-fonts/encode-sans-semi-expanded"

window.addEventListener("DOMContentLoaded", () => {
    EncodeSansSemiExpanded.inject()
})
```