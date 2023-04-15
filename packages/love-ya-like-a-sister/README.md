# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import LoveYaLikeASister from "@electron-fonts/love-ya-like-a-sister"

window.addEventListener("DOMContentLoaded", () => {
    LoveYaLikeASister.inject()
})
```