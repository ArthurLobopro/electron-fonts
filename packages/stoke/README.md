# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Stoke from "@electron-fonts/stoke"

window.addEventListener("DOMContentLoaded", () => {
    Stoke.inject()
})
```