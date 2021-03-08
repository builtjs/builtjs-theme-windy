import { withRouter } from "next/router";
import { pageIds } from "../lib/constants";
import Page from "../lib/page";
import { fetchPage } from "../lib/fetch";
import model from "../lib/model";

export default withRouter(Page);

export async function getStaticProps() {
  const page = await fetchPage('home');
  return {
    props: { page }
  };
}
