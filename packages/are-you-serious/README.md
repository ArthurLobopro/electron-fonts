# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import AreYouSerious from "@electron-fonts/are-you-serious"

window.addEventListener("DOMContentLoaded", () => {
    AreYouSerious.inject()
})
```