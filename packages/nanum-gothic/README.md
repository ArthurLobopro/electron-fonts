# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NanumGothic from "@electron-fonts/nanum-gothic"

window.addEventListener("DOMContentLoaded", () => {
    NanumGothic.inject()
})
```