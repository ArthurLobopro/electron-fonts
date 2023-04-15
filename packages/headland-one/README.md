# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import HeadlandOne from "@electron-fonts/headland-one"

window.addEventListener("DOMContentLoaded", () => {
    HeadlandOne.inject()
})
```