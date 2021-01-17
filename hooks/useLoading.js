import { useEffect, useState } from "react";
import { singletonHook } from "react-singleton-hook";
import FontFaceObserver from "fontfaceobserver";
import imagesLoaded from "imagesloaded";

const init = { loadedCanGo: false, animationsCanRun: false };

function useLoadingImpl() {
  const [loadedCanGo, setLoadedCanGo] = useState(init.loadedCanGo);
  const [animationsCanRun, setAnimationsCanRun] = useState(
    init.animationsCanRun
  );

  const MININUM_DURATION = 1000;
  const EXIT_DURATION = 500;

  useEffect(() => {
    const startTime = performance.now();

    const font = new FontFaceObserver("Inter");
    const imgLoaded = imagesLoaded(
      document.querySelector("body"),
      { background: true },
      null
    );

    // All promises goes here
    Promise.all([
      window.loadContentPromise,
      font.load(null, 2000),
      imgLoaded.on("done"),
    ])
      .then(() => {
        const endTime = performance.now();
        let t = 0;

        if (endTime - startTime <= MININUM_DURATION) {
          t = endTime - startTime;
        }

        setTimeout(() => {
          setLoadedCanGo(true);
        }, MININUM_DURATION - t);

        // 300ms is the time to anim and remove the loading screen
        setTimeout(() => {
          setAnimationsCanRun(true);
        }, MININUM_DURATION - t + EXIT_DURATION);
      })
      .catch((e) => console.log("WRONG", e));
  }, [setAnimationsCanRun, setLoadedCanGo]);

  return { animationsCanRun, loadedCanGo };
}

export const useLoading = singletonHook(init, useLoadingImpl);
