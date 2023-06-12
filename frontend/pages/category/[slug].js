import Seo from "../../components/seo";
import Layout from "../../components/layout";
import Articles from "../../components/articles";
import Sponsors from "../../components/categories/sponsors";
import KnowUs from "../../components/categories/knowUs";
import Contact from "../../components/categories/Contact";

import { fetchAPI } from "../../lib/api";

const Category = ({ category, categories, history }) => {

  const seo = {
    metaTitle: category.attributes.name,
    metaDescription: `All ${category.attributes.name} articles`,
  };
  
  switch (category.attributes.slug) {
    case "sponsors":
     return (
        <Layout categories={categories.data}>
        <Seo seo={seo} />
        <div className="uk-section">
          <div className="uk-container uk-container-large">
            <Sponsors articles={category.attributes.articles.data} />
          </div>
        </div>
      </Layout>
      );
    case "know_us":
      return (
          <Layout categories={categories.data}>
          <Seo seo={seo} />
          <div className="uk-section">
            <div className="uk-container uk-container-large uk-background-muted ">
              <KnowUs articles={category.attributes.articles.data} history={history.data.attributes} category={category}/>
            </div>
          </div>
        </Layout>
        );
    case "contact":
          return (
              <Layout categories={categories.data}>
              <Seo seo={seo} />
              <div className="uk-section">
              <div className="uk-container uk-container-large uk-background-muted ">
                  <Contact category={category}/>
              </div>
          </div>
             
            </Layout>
            );    
    default:
      return (
        <Layout categories={categories.data}>
          <Seo seo={seo} />
          <div className="uk-section">
            <div className="uk-container uk-container-large">
              <h1>{category.attributes.name}</h1>
              <Articles articles={category.attributes.articles.data} />
            </div>
          </div>
        </Layout>
  );
  }

  
};

export async function getStaticPaths() {
  const categoriesRes = await fetchAPI("/categories", { fields: ["slug"] });
  return {
    paths: categoriesRes.data.map((category) => ({
      params: {
        slug: category.attributes.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  
  const matchingCategories = await fetchAPI("/categories", {
    filters: { slug: params.slug },
    populate: {
      articles: {
        populate: "*",
      },
      image: {
        populate: "*",
      }
    },
  });
  const allCategories = await fetchAPI("/categories");
  const history = await fetchAPI("/history");
  
  return {
    props: {
      category: matchingCategories.data[0],
      categories: allCategories,
      history: history
    },
    revalidate: 1,
  };
}

export default Category;