import { withRouter } from "next/router";
import Page from "../config/page";
import { fetchPage } from "../lib/fetch";
import { pages } from "../config/constants";

export default withRouter(Page);

export async function getStaticProps() {
  const page = await fetchPage(pages.BLOG);
  return {
    props: { page }
  };
}