import Moment from "react-moment";
import ReactMarkdown from "react-markdown";

import Seo from "../../components/seo";
import Layout from "../../components/layout";

import { fetchAPI } from "../../lib/api";
import { getStrapiMedia } from "../../lib/media";
import NextImage from "next/image";

const Article = ({ article, categories }) => {
  const seo = {
    metaTitle: article.attributes.title,
    metaDescription: article.attributes.description,
    shareImage: article.attributes.cover,
    article: true,
  };
 /**<div style={{backgroundImage: `url(${getStrapiMedia(article.attributes.cover)})`}}> */
  return (
    <div className="uk-background-muted">
      <Layout categories={categories.data}>
              <Seo seo={seo} />
              <div className="uk-section">
                <div className="uk-container uk-container-large">
                    <div uk-grid className="uk-card uk-card-default uk-card-body uk-margin-top"  style={{opacity: '0.95'}}>
                      <div className="uk-margin-remove"> 
                             
                              <div>
                              <div class="uk-flex uk-flex-middle">
                                  <h1><span class="uk-text-muted"> {article.attributes.title}</span></h1>
                              </div>
                              <div className="uk-align-center"> 
                                    <NextImage
                                    className="uk-align-center"
                                        priority
                                        width={600}
                                        height={600}
                                        src={getStrapiMedia(article.attributes.cover)}
                                        alt={article.attributes.cover.data.attributes || ""} />

                                    </div>
                                      <div className="uk-panel"  style={{display: 'block'}}>
                                        <span dangerouslySetInnerHTML={{__html:article.attributes.description}}></span>
                                      </div>
                              </div>
                                   
                             
                      </div>
                      
                  </div>
                </div>
              </div>
            </Layout>
            </div>

  );
};

export async function getStaticPaths() {
  const articlesRes = await fetchAPI("/articles", { fields: ["slug"] });

  return {
    paths: articlesRes.data.map((article) => ({
      params: {
        slug: article.attributes.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const articlesRes = await fetchAPI("/articles", {
    filters: {
      slug: params.slug,
    },
    populate: ["cover", "category"],
  });
  const allCategories = await fetchAPI("/categories", {
    sort: 'id',
    populate: {
      subcategories: {
        populate: "*",
      },
    },
  });

  return {
    props: { article: articlesRes.data[0], categories: allCategories },
    revalidate: 1,
  };
}

export default Article;