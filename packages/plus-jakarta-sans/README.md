# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import PlusJakartaSans from "@electron-fonts/plus-jakarta-sans"

window.addEventListener("DOMContentLoaded", () => {
    PlusJakartaSans.inject()
})
```