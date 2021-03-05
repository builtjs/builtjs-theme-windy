import Head from "next/head";

export default function Seo({seo}) {
  return (
    <>
    {seo &&
    (<Head>
      
      {seo.title && (
        <>
          <title>{seo.title}</title>
          <meta property="og:title" content={seo.title} />
          <meta name="twitter:title" content={seo.title} />
        </>
      )}
      {seo.description && (
        <>
          <meta name="description" content={seo.description} />
          <meta property="og:description" content={seo.description} />
          <meta name="twitter:description" content={seo.description} />
        </>
      )}
      {seo.shareImage && (
        <>
          <meta property="og:image" content={seo.shareImage} />
          <meta name="twitter:image" content={seo.shareImage} />
          <meta name="image" content={seo.shareImage} />
        </>
      )}
      {seo.article && <meta property="og:type" content="article" />}
      <meta name="twitter:card" content="summary_large_image" />
      </Head>
    )}
    </>
  );
}
