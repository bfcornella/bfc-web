
import React from "react";
import Articles from "../components/articles";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { fetchAPI } from "../lib/api";
import HomePageInfo from "../components/homePageInfo";
//import UIkit from 'uikit';
//import Icons from 'uikit/dist/js/uikit-icons';

 // @ts-ignore
const Home = ({ articles, categories, homepage, homePageInfo }) => {
  // loads the Icon plugin
//UIkit.use(Icons);
console.log(homePageInfo);

  return (
    <Layout categories={categories}>
      <Seo seo={homepage.attributes.defaultSeo} />
      <div className="uk-background-cover">
        <div className="uk-section">
          <div className="uk-container uk-container-large">
            <HomePageInfo homePageInfo={homePageInfo.data[0]}/>
          </div>
        </div>
      </div>
      <footer className="uk-text-center uk-background-primary">
          <div className="uk-background-primary">Bàsquet Femení Cornellà © 2023</div>
      </footer>
    </Layout>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const categoryIni = await fetchAPI("/categories", {
    filters: { slug: 'home' },
    populate: {
      articles: {
        populate: "*",
      },
    },
  });
  const [articlesRes, categoriesRes, homepageRes] = await Promise.all([
    fetchAPI("/articles", { populate: ["cover", "category"] }),
    fetchAPI("/categories", { populate: "*" }),
   // fetchAPI("/home-page", { populate: "*" }),
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
     //homePageInfo: homePageInfo.data,
      homepage: homepageRes.data,
      homePageInfo: categoryIni
    },
    revalidate: 1,
  };
}

export default Home;
