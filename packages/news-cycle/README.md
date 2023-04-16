# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NewsCycle from "@electron-fonts/news-cycle"

window.addEventListener("DOMContentLoaded", () => {
    NewsCycle.inject()
})
```