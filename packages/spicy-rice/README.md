# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import SpicyRice from "@electron-fonts/spicy-rice"

window.addEventListener("DOMContentLoaded", () => {
    SpicyRice.inject()
})
```