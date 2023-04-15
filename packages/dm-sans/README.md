# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import DMSans from "@electron-fonts/dm-sans"

window.addEventListener("DOMContentLoaded", () => {
    DMSans.inject()
})
```