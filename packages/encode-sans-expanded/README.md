# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import EncodeSansExpanded from "@electron-fonts/encode-sans-expanded"

window.addEventListener("DOMContentLoaded", () => {
    EncodeSansExpanded.inject()
})
```