# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import GolosText from "@electron-fonts/golos-text"

window.addEventListener("DOMContentLoaded", () => {
    GolosText.inject()
})
```