import Link from "next/link";
import Layout from "../components/Layout";
import AllUsers from "../components/AllUsers";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Ola Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
    <AllUsers />
  </Layout>
);

export default IndexPage;
