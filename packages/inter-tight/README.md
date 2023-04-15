# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import InterTight from "@electron-fonts/inter-tight"

window.addEventListener("DOMContentLoaded", () => {
    InterTight.inject()
})
```