import React, { useEffect, useState } from "react";
import { transformPage } from "./transform-page";
import PageLayout from "../components/layouts/page-layout";
import Seo from "../components/theme/heads/seo";
import Analytics from "../components/theme/heads/analytics";

const Page = ({ page }) => {
  const [fullPage, setFullPage] = useState({});

  useEffect(() => {
    (async () => {
      const newFullPage = await transformPage(page);
      setFullPage(newFullPage);
    })();
  }, []);

  return (
    <PageLayout>
      {/* <Seo seo={page.seo} />
      <Analytics />
      {fullPage.header && (<fullPage.header.component content={fullPage.header.content} />)}
      {fullPage.sections && fullPage.sections.map((section, i) => {
        return <section.component key={i} content={section.content} />;
      })}
      {fullPage.footer && (<fullPage.footer.component content={fullPage.footer.content} />)} */}
    </PageLayout>
  );
};

export default Page;