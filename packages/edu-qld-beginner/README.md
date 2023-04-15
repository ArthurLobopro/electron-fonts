# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import EduQLDBeginner from "@electron-fonts/edu-qld-beginner"

window.addEventListener("DOMContentLoaded", () => {
    EduQLDBeginner.inject()
})
```