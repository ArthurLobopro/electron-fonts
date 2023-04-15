# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import BigShouldersText from "@electron-fonts/big-shoulders-text"

window.addEventListener("DOMContentLoaded", () => {
    BigShouldersText.inject()
})
```