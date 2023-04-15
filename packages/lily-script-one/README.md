# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import LilyScriptOne from "@electron-fonts/lily-script-one"

window.addEventListener("DOMContentLoaded", () => {
    LilyScriptOne.inject()
})
```