# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import ShantellSans from "@electron-fonts/shantell-sans"

window.addEventListener("DOMContentLoaded", () => {
    ShantellSans.inject()
})
```