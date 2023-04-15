# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import BowlbyOne from "@electron-fonts/bowlby-one"

window.addEventListener("DOMContentLoaded", () => {
    BowlbyOne.inject()
})
```