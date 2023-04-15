# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import CherryCreamSoda from "@electron-fonts/cherry-cream-soda"

window.addEventListener("DOMContentLoaded", () => {
    CherryCreamSoda.inject()
})
```