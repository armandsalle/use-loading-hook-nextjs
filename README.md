# useLoading hook

Hello! If you want a simple way to create a loading screen with React, you can grad the code and change it with your need. Out of the box, the hook will check the load of your fonts and all images, but you can add more promises to resolve.

Demo: [it's live here!](https://use-loading-hook.vercel.app/)

## How to use?

**Needed dependencies**: `imagesloaded fontfaceobserver react-singleton-hook`
**Optional for animations**: `gsap`

First copy the hook from `hooks/useLoading.js`. In this file, you can tweak values, add more promises, change the minimum duration of the loading timer, the duration of the exit animation etc.

Then, create a `_document.js` in your `pages` folder and add this script before the closing body tag:

```
<script dangerouslySetInnerHTML={{ __html: 'window.loadContentPromise = new Promise((resolve)=>{window.addEventListener("DOMContentLoaded", resolve);});'}} ></script>
```

You can use the hook where you want in your app, but loading screen are often on the top your components tree.

The hook give you two values:

- `loadedCanGo` (default to `false`) => is set to `true` when all promises resolves
- `animationsCanRun` (default to `false`) => is set to `true` when all promises resolves, but with a delay of your remove loading screen aniamtion duration.

## Warning

This code is not a library because I don't have the time to maintain the code and catch all the differents ways it can be use. Feel free to clone it, fork it, use it, make pull requests etc...

Have fun!
