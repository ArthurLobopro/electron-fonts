# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NanumGothicCoding from "@electron-fonts/nanum-gothic-coding"

window.addEventListener("DOMContentLoaded", () => {
    NanumGothicCoding.inject()
})
```