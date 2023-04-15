# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Content from "@electron-fonts/content"

window.addEventListener("DOMContentLoaded", () => {
    Content.inject()
})
```