import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { useLoading } from "../hooks/useLoading";

export default function Home() {
  const [linkEvent, setLinkEvent] = useState("none");

  const { animationsCanRun } = useLoading();

  useEffect(() => {
    if (!animationsCanRun) {
      gsap.set("h1", {
        color: "pink",
      });
    } else {
      gsap.fromTo(
        "h1",
        {
          color: "pink",
        },
        {
          color: "black",
          duration: 1,
          delay: 0.3,
          onComplete: () => {
            setLinkEvent("all");
          },
        }
      );
    }
  }, [setLinkEvent, animationsCanRun]);

  return (
    <>
      <Head>
        <title>Home 🍕</title>
      </Head>
      <h1>Hello world</h1>
      <div className={`pointer-${linkEvent}`}>
        <Link href="/about">Go to about</Link>
      </div>
    </>
  );
}
