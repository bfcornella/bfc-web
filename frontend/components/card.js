import React from "react";
import Link from "next/link";
import Image from "./image";

const Card = ({ article }) => {
  return (
    <Link className="uk-link-reset" href={`/article/${article.attributes.slug}`}>
        <div className="uk-card uk-card-muted">
          <div className="uk-card-media-top">
            <Image image={article.attributes.cover} />
          </div>
          <div className="bg-red-500 cursor-pointer text-white p-4 rounded-md text-center shadow-xl">
            <div id="category" className="mt-2 font-bold">
              {article.attributes.category.data.attributes.name}
            </div>
            <div id="title" className="font-light">
              {article.attributes.title}
            </div>
          </div>
        </div>
    </Link>
  );
};

export default Card;
