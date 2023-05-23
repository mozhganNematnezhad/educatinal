import React from "react";
import ArticleMore from "components/ArticleMore/ArticleMore";
import HelmetTitle from "components/commen/Helmet/Helmet";

const ArticlePage = () => {
  return (
    <div className="bg-[#f7f9fb] py-8 dark:bg-slate-900">
      <HelmetTitle title="  مقالات آموزشی" />
      <ArticleMore />
    </div>
  );
};

export default ArticlePage;
