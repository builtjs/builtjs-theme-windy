import { withRouter } from "next/router";
import Page from "../../lib/page";
import { fetchPage, fetchItems } from "../../lib/fetch";
import { pages, contentTypes } from "../../lib/constants";

export default withRouter(Page);

export async function getStaticPaths() {
  const allItems = await fetchItems(contentTypes.BLOG_ITEM);
  return {
    paths: allItems.items.map(({ slug }) => `/${contentTypes.BLOG_ITEM}/${slug}`) ?? [],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const page = await fetchPage(pages.BLOG_ARTICLE);
  page.params = params;
  return {
    props: { page }
  };
}