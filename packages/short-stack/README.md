# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import ShortStack from "@electron-fonts/short-stack"

window.addEventListener("DOMContentLoaded", () => {
    ShortStack.inject()
})
```