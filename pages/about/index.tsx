import Link from "next/link";
import {MainLayout} from "../../components/layouts/MainLayout";
import {DarkLayout} from "../../components/layouts/DarkLayout";

export default function AboutPage() {
  // Se perdio el estilo de centrado del h1
  return (
    <>
      <h1>About Page</h1>
      <h1 className="title">
        Ir a <Link href="/">Home</Link>
      </h1>

      <p className="description">
        Get started by editing <code className="code">pages/index.js</code>
      </p>
    </>
  );
}

AboutPage.getLayout = function getLayout(page:JSX.Element) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
