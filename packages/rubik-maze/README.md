# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import RubikMaze from "@electron-fonts/rubik-maze"

window.addEventListener("DOMContentLoaded", () => {
    RubikMaze.inject()
})
```