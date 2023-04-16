# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import TwinkleStar from "@electron-fonts/twinkle-star"

window.addEventListener("DOMContentLoaded", () => {
    TwinkleStar.inject()
})
```