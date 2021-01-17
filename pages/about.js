import Head from "next/head";
import Link from "next/link";

function About() {
  return (
    <>
      <Head>
        <title>About 🍕</title>
      </Head>
      <h1>About page</h1>
      <Link href="/">Go to home</Link>
    </>
  );
}

export default About;
