import Seo from "../../components/seo";
import Layout from "../../components/layout";
import Articles from "../../components/articles";
import Sponsors from "../../components/categories/sponsors";
import Contact from "../../components/categories/Contact";
import Campus from "../../components/categories/campus";
import { getStrapiMedia } from "../../lib/media";

import { fetchAPI } from "../../lib/api";

const Category = ({ category, categories, history }) => {
  console.log('categories');
  console.log(categories)
  console.log('category');
  console.log(category)

  const seo = {
    metaTitle: category.attributes.name,
    metaDescription: `All ${category.attributes.name} articles`,
  };
  
  switch (category.attributes.slug) {
    case "sponsors":
     return (
      <div style={{backgroundImage: `url(${getStrapiMedia(category.attributes.image)})`}}>
          <Layout categories={categories.data}>
              <Seo seo={seo} />
              <div className="uk-section">
                <div className="uk-container uk-container-large uk-background-muted ">
                  <Sponsors  category={category} articles={category.attributes.articles.data} />
                </div>
              </div>
            </Layout>
      </div>
      );
    case "contact":
          return (
            <div style={{backgroundImage: `url(${getStrapiMedia(category.attributes.image)})`}}>
              <Layout categories={categories.data}>
                  <Seo seo={seo} />
                  <div className="uk-section">
                    <div className="uk-container uk-container-large uk-background-muted ">
                        <Contact category={category}/>
                    </div>
                  </div>
            </Layout>
             </div>
            ); 
      case "campus":
        return (
          <div style={{backgroundImage: `url(${getStrapiMedia(category.attributes.image)})`}}>
            <Layout categories={categories.data}>
                <Seo seo={seo} />
                <div className="uk-section">
                  <div className="uk-container uk-container-large uk-background-muted ">
                      <Campus category={category}  articles={category.attributes.articles.data}/>
                  </div>
                </div>
          </Layout>
            </div>
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
  const categoriesRes = await fetchAPI("/categories", { sort: 'id', fields: ["slug"] });
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
    sort: 'id',
    filters: { slug: params.slug },
    populate: {
      articles: {
        populate: "*",
      },
      subcategories: {
        populate: "*",
      },
      image: {
        populate: "*",
      }
    },
  });
  const allCategories = await fetchAPI("/categories", {
    sort: 'id',
    populate: {
      subcategories: {
        populate: "*",
      },
    },
  });
  const history = await fetchAPI("/history", { populate: "*"});
  
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