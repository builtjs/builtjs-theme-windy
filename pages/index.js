import { withRouter } from "next/router";
import { pageIds } from "../lib/constants";
import Page from "../lib/page";
import { fetchPage } from "../lib/fetch";
import model from "../lib/model";

export default withRouter(Page);

export async function getStaticProps() {
  const Page = model('Page');
  let page = await Page.findOne(pageIds.HOME);
  console.log(JSON.parse(JSON.stringify(page)))
  page = JSON.parse(JSON.stringify(page))
  // const page = await fetchPage(pageIds.HOME);
  console.log('page----------',page)
  return {
    props: { page }
  };
}
