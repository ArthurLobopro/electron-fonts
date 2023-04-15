# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Fredoka from "@electron-fonts/fredoka"

window.addEventListener("DOMContentLoaded", () => {
    Fredoka.inject()
})
```