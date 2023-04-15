# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import JustMeAgainDownHere from "@electron-fonts/just-me-again-down-here"

window.addEventListener("DOMContentLoaded", () => {
    JustMeAgainDownHere.inject()
})
```