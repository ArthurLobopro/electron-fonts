# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import BowlbyOneSC from "@electron-fonts/bowlby-one-sc"

window.addEventListener("DOMContentLoaded", () => {
    BowlbyOneSC.inject()
})
```