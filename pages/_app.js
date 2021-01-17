import { Transition, SwitchTransition } from "react-transition-group";
import { useRouter } from "next/router";
import { gsap } from "gsap";
import { useLoading } from "../hooks/useLoading";
import { useEffect, useCallback } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const { loadedCanGo } = useLoading();

  const playEnter = useCallback(() => {
    gsap.fromTo(
      "main",
      {
        opacity: 0,
        y: 200,
      },
      {
        opacity: 1,
        duration: 0.5,
        y: 0,
      }
    );
    console.log("enter");
  }, []);

  const playExit = useCallback(() => {
    gsap.fromTo(
      "main",
      {
        opacity: 1,
        y: 0,
      },
      {
        opacity: 0,
        duration: 0.5,
        y: -200,
      }
    );
    console.log("exit");
  }, []);

  useEffect(() => {
    if (loadedCanGo) {
      gsap.to(".loading-screen", {
        scaleX: 0,
        transformOrigin: "left",
        duration: 0.5,
        pointerEvents: "none",
        userSelect: "none",
      });
    }
  }, [loadedCanGo]);

  return (
    <>
      <SwitchTransition mode="out-in">
        <Transition
          key={router.pathname}
          timeout={500}
          onExit={(node) => playExit(node, router.pathname)}
          onEnter={(node) => playEnter(node, router.pathname)}
        >
          <main>
            <Component {...pageProps} />
          </main>
        </Transition>
      </SwitchTransition>
      <div className="loading-screen"></div>
    </>
  );
}

export default MyApp;
