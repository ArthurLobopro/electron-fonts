# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import IMFellEnglish from "@electron-fonts/im-fell-english"

window.addEventListener("DOMContentLoaded", () => {
    IMFellEnglish.inject()
})
```