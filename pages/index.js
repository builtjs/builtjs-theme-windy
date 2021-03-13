import { withRouter } from "next/router";
import Page from "../lib/page";
import { fetchPage } from "../lib/fetch";
import { pages } from "../lib/constants";

export default withRouter(Page);

export async function getStaticProps() {
  const page = await fetchPage(pages.HOME);
  return {
    props: { page }
  };
}
