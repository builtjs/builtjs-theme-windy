import React from "react";
import Head from "next/head";
import { withRouter } from "next/router";
import { fetchEntries } from "../lib/fetch";
import PreviewHero1 from "./../components/preview-heros/preview-hero-1";
// import PreviewGrid2 from "./../components/preview-grid-2";
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

const Page = ({ blogListConfig, blogPostData, router }) => {
  return (
    <>
      <Head>
        <title>Blog</title>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-134715104-1"
        />
        <script dangerouslySetInnerHTML={analyticsScriptTag()} />
      </Head>
      <main>
        <PreviewHero1 listData={blogPostData} />
        {/* <PreviewGrid2 listData={blogPostData} config={blogListConfig} /> */}
      </main>
    </>
  );
};

export default withRouter(Page);

export async function getStaticProps({ params }) {
  const blogListConfig = { offset: 1 };

  const [blogPostData] = await Promise.all([
    fetchEntries('blog-item')
  ]);
  return {
    props: {
      blogPostData: blogPostData,
      blogListConfig: blogListConfig,
    },
  };
}