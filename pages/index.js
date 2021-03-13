import { withRouter } from "next/router";
import { fetchPage } from "../lib/fetch";
import Page from "../config/page";
import { pages } from "../config/constants";

export default withRouter(Page);

export async function getStaticProps() {
  const page = await fetchPage(pages.HOME);
  return {
    props: { page }
  };
}
