import React from "react";
import ErrorPage from "next/error";
import Head from "next/head";
import { withRouter } from "next/router";
import { fetchEntry, fetchEntries } from "../../lib/fetch";
import { contentTypeSlugs } from "../../lib/constants";

import Article1 from "../../components/templates/articles/article-1";

const contentTypeSlug = contentTypeSlugs.BLOG;

const Page = ({ blogPostItem, blogPostData, router }) => {
  if (!blogPostItem) return null;

  if (!router.isFallback && !blogPostItem) {
    return <ErrorPage statusCode={404} />;
  }
  const seo = {
    metaTitle: blogPostItem.title,
    metaDescription: blogPostItem.description,
    shareImage: blogPostItem.image,
    article: true
  };

  return (
    <>
      <Head>
        {/* <title>{blogPostItem.title}</title> */}
        {/* <Meta seo={seo} /> */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-134715104-1"
        />
        <script dangerouslySetInnerHTML={analyticsScriptTag()} />
      </Head>
      <main>
        <Article1 entry={blogPostItem} />
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
