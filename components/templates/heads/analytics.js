import Head from "next/head";

export default function Analytics() {
  const analyticsScriptTag = () => {
    return {
      __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'UA-XXXXXXX-X');
            `,
    };
  };
  return (
    <>
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-134715104-1"
        />
        <script dangerouslySetInnerHTML={analyticsScriptTag()} />
      </Head>
    </>
  );
}
