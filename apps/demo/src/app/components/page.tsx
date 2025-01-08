import type { NextPage } from "next";
import Link from "next/link";

const StartPage: NextPage = () => {
  return (
    <section>
      <h1 className='text-amber-950'>Components</h1>
      <Link className='text-amber-950' href="/components/badge">Badge</Link>
    </section>
  );
};

export default StartPage;
