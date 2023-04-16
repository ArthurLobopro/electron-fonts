# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NanumMyeongjo from "@electron-fonts/nanum-myeongjo"

window.addEventListener("DOMContentLoaded", () => {
    NanumMyeongjo.inject()
})
```