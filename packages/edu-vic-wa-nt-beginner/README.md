# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import EduVICWANTBeginner from "@electron-fonts/edu-vic-wa-nt-beginner"

window.addEventListener("DOMContentLoaded", () => {
    EduVICWANTBeginner.inject()
})
```