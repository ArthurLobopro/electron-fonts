# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import FanwoodText from "@electron-fonts/fanwood-text"

window.addEventListener("DOMContentLoaded", () => {
    FanwoodText.inject()
})
```