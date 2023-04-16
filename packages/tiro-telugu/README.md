# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import TiroTelugu from "@electron-fonts/tiro-telugu"

window.addEventListener("DOMContentLoaded", () => {
    TiroTelugu.inject()
})
```