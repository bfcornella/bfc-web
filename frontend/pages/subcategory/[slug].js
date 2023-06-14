import Seo from "../../components/seo";
import Layout from "../../components/layout";
import History from "../../components/subcategory/History";
import Organization from "../../components/subcategory/Organization";
import Contact from "../../components/categories/Contact";

import { fetchAPI } from "../../lib/api";

const subcategory = ({ subcategory, categories, history, organization }) => {
  console.log('categories');
  console.log(categories)
  console.log('subcategory');
  console.log(subcategory)
  const seo = {
    metaTitle: subcategory.attributes.name,
    metaDescription: `All ${subcategory.attributes.name} articles`,
  };
  
  switch (subcategory.attributes.slug) {
    case "history":
      return (
        <Layout categories={categories.data}>
        <Seo seo={seo} />
        <div className="uk-section">
          <div className="uk-container uk-container-large uk-background-muted ">
            <History history={history.data.attributes} subcategory={subcategory}/>
          </div>
        </div>
      </Layout>
      );
    case "organization":
          return (
              <Layout categories={categories.data}>
              <Seo seo={seo} />
              <div className="uk-section">
              <div className="uk-container uk-container-large uk-background-muted ">
                  <Organization organization={organization} subcategory={subcategory}/>
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
              <h1>{subcategory.attributes.name}</h1>

            </div>
          </div>
        </Layout>
  );
  }

  
};

export async function getStaticPaths() {
  const categoriesRes = await fetchAPI("/subcategories", { fields: ["slug"] });
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
  
  const matchingCategories = await fetchAPI("/subcategories", {
    filters: { slug: params.slug },
    populate: "*"
  });
  const allCategories = await fetchAPI("/categories", {
    populate: {
      subcategories: {
        populate: "*",
      },
    },
  });
  const history = await fetchAPI("/history");
  const organization = await fetchAPI("/organization");
  
  return {
    props: {
      subcategory: matchingCategories.data[0],
      categories: allCategories,
      history: history,
      organization: organization
    },
    revalidate: 1,
  };
}

export default subcategory;