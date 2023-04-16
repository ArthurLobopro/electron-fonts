# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import SingleDay from "@electron-fonts/single-day"

window.addEventListener("DOMContentLoaded", () => {
    SingleDay.inject()
})
```