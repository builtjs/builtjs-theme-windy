import React, { useEffect, useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import { withRouter } from "next/router";
import { fetchPage, fetchCollections } from "../lib/fetch";
import { pageIds } from "../lib/constants";

const Page = ({ page, collections }) => {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    let newSections = [];
    page.sections.map((section) => {
      let slugs = section["__component"].split(".");
      newSections.push({
        content: section,
        component: dynamic(() =>
          import(`../components/${slugs[0]}/${slugs[1]}`)
        ),
      });
    });
    setSections(newSections);
  }, []);

  return (
    <>
      <Head>
        <title>{page.shortName}</title>
      </Head>
      {sections.map((section, i) => {
        let Component = section.component;
        return <Component key={i} content={section.content} />;
      })}
    </>
  );
};

export default withRouter(Page);

export async function getStaticProps() {
  const PAGE_ID = pageIds.HOME;
  const page = await fetchPage(PAGE_ID);
  page.sections.map(async (section) => {
    section.collections = await fetchCollections(section);
  });
  return {
    props: {
      page,
    },
  };
}
