# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import BigShouldersInlineText from "@electron-fonts/big-shoulders-inline-text"

window.addEventListener("DOMContentLoaded", () => {
    BigShouldersInlineText.inject()
})
```