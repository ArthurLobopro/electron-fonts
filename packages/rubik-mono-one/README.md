# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import RubikMonoOne from "@electron-fonts/rubik-mono-one"

window.addEventListener("DOMContentLoaded", () => {
    RubikMonoOne.inject()
})
```