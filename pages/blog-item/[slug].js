import React from "react";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import { withRouter } from "next/router";
import { fetchEntry, fetchEntries } from "../../lib/fetch";
import { contentTypeSlugs } from "../../lib/constants";

import Detail1 from "./../../components/details/detail-1";

const contentTypeSlug = contentTypeSlugs.BLOG;

// import PreviewGrid1 from "./../../components/preview-grid-1";
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

const Page = ({ blogPostItem, blogPostData, router }) => {
  if (!blogPostItem) return null;

  if (!router.isFallback && !blogPostItem) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <>
      <Head>
        <title>{blogPostItem.title}</title>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-134715104-1"
        />
        <script dangerouslySetInnerHTML={analyticsScriptTag()} />
      </Head>
      <main>
        <Detail1 entry={blogPostItem} />
        {/* <PreviewGrid1 listData={blogPostData} /> */}
      </main>
    </>
  );
};

export default withRouter(Page);

export async function getStaticProps({ params }) {
  const [blogPostItem, blogPostData] = await Promise.all([
    fetchEntry(contentTypeSlug, params.slug),
    fetchEntries(contentTypeSlug)
  ]);
  return {
    props: {
      blogPostItem: blogPostItem,
      blogPostData: blogPostData,
    },
  };
}

export async function getStaticPaths() {
  const allEntries = await fetchEntries(contentTypeSlug);
  return {
    paths: allEntries.entries.map(({ slug }) => `/${contentTypeSlug}/${slug}`) ?? [],
    fallback: true,
  };
}
