
import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { fetchAPI } from "../lib/api";
import HomePageInfo from "../components/homePageInfo";


 // @ts-ignore
const Home = ({ articles, categories, homePage, homePageInfo }) => {
  return (
    <Layout categories={categories}>
      <Seo seo={homePage.attributes.defaultSeo} />
      <div className="uk-background-cover">
        <div className="uk-section">
          <div className="uk-container uk-container-large">
            <HomePageInfo homePageInfo={homePageInfo.data[0]}/>
          </div>
        </div>
      </div>
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
      subcategories: {
        populate: "*",
      },
      articleSalient: {
        populate: "*",
      },
    },
  });
  const [articlesRes, categoriesRes, global] = await Promise.all([
    fetchAPI("/articles", { populate: ["cover", "category"] }),
    fetchAPI("/categories?sort=id", { populate: {
      subcategories: {
        populate: "*",
      }

    } }),
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
      homePage: global.data,
      homePageInfo: categoryIni
    },
    revalidate: 1,
  };
}

export default Home;
