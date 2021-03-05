import { withRouter } from "next/router";
import { pageIds } from "../lib/constants";
import Page from "../lib/page";
import { fetchPage } from "../lib/fetch";

export default withRouter(Page);

export async function getStaticProps() {
  const page = await fetchPage(pageIds.HOME);
  return {
    props: { page },
  };
}
