import React, { useEffect, useState } from "react";
import { transformPage } from "./transform-page";
import PageLayout from "../components/layouts/page-layout";
import Seo from "../components/templates/heads/seo";
import Analytics from "../components/templates/heads/analytics";

const Page = ({ page }) => {
  const [fullPage, setFullPage] = useState({});

  useEffect(() => {
    (async () => {
      const newFullPage = await transformPage(page);
      console.log({newFullPage})
      setFullPage(newFullPage);
    })();
  }, []);

  return (
    <PageLayout>
      <Seo seo={page.seo} />
      <Analytics />
      {fullPage.header && (<fullPage.header.component template={fullPage.header.template.doc} />)}
      {fullPage.templates  && fullPage.templates.length && fullPage.templates.map((section, i) => {
        return <section.component key={i} template={section.template.doc} />;
      })}
      {fullPage.footer && (<fullPage.footer.component content={fullPage.footer.content} />)}
    </PageLayout>
  );
};

export default Page;