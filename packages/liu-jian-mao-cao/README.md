# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import LiuJianMaoCao from "@electron-fonts/liu-jian-mao-cao"

window.addEventListener("DOMContentLoaded", () => {
    LiuJianMaoCao.inject()
})
```