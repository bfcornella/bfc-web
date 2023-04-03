
import React from "react";
import Articles from "../components/articles";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { fetchAPI } from "../lib/api";

 // @ts-ignore
const Home = ({ articles, categories, homepage }) => {
  return (
    <Layout categories={categories}>
      <Seo seo={homepage.attributes.defaultSeo} />
      <div className="uk-background-cover">
        <div className="uk-section">
          <div className="uk-container uk-container-large">

            <Articles articles={articles} />
          </div>
        </div>
      </div>
      <footer className="uk-position-bottom uk-text-center uk-background-primary">
          <div className="uk-background-primary">Footer is at the bottom</div>
      </footer>
    </Layout>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [articlesRes, categoriesRes, homepageRes] = await Promise.all([
    fetchAPI("/articles", { populate: ["cover", "category"] }),
    fetchAPI("/categories", { populate: "*" }),
    fetchAPI("/global", {
      populate: "*"/*{
        defaultSeo: { populate: "*" },
      }*/,
    }),
  ]);

  return {
    props: {
      articles: articlesRes.data,
      categories: categoriesRes.data,
      homepage: homepageRes.data,
    },
    revalidate: 1,
  };
}

export default Home;
