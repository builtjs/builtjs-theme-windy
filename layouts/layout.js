import Head from "next/head";
import HeaderBlock1 from "../components/header/header-1";
import FooterBlock1 from "../components/footer/footer-1";

export default function Layout({ children }) {
  return (
    <article>
      <Head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com/"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <HeaderBlock1 />
      <main>{children}</main>
      <FooterBlock1 />
    </article>
  );
}
