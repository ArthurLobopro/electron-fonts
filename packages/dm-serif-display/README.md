# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import DMSerifDisplay from "@electron-fonts/dm-serif-display"

window.addEventListener("DOMContentLoaded", () => {
    DMSerifDisplay.inject()
})
```