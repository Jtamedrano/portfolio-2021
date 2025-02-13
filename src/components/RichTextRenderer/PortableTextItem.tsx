import { PortableText, PortableTextComponents } from "next-sanity";
import { BlogPost, BlogPostBody } from "../../models/sanity-schema";
import { getImageDimensions } from "@sanity/asset-utils";
import urlBuilder from "@sanity/image-url";
import { fetchSanityImgUrl } from "../../lib/blogs";

const ImageComponent: React.FC<any> = ({ value, isInline }) => {
  const { width, height } = getImageDimensions(value);

  const imgUrl = fetchSanityImgUrl(value)
    ?.width(isInline ? 100 : 800)
    .fit("max")
    .auto("format")
    .url();

  if (!imgUrl) {
    return <></>;
  }

  return (
    <div className="my-8 flex justify-center">
      <img
        src={imgUrl}
        alt={value.alt || " "}
        loading="lazy"
        style={{
          display: isInline ? "inline-block" : "block",
          aspectRatio: width / height,
        }}
      />
    </div>
  );
};

const components: PortableTextComponents = {
  block: {
    h1: ({ children }) => (
      <h1 className="text-5xl font-bold text-secondary-500 dark:text-gray-100 my-8">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-4xl font-bold text-secondary-400 dark:text-gray-200 my-8">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-3xl font-bold text-secondary-300 dark:text-gray-300 my-4 mt-8">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-2xl font-bold text-secondary-200 dark:text-gray-400 my-1 mt-4">
        {children}
      </h4>
    ),
    normal: ({ children }) => <p className="text-base/8 mb-4">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-secondary-500 pl-4 my-4">
        {children}
      </blockquote>
    ),
  },
  hardBreak: () => <br />,
  list: {
    number: ({ children }) => (
      <ol className="list-decimal list-inside leading-8 px-8 my-4">
        {children}
      </ol>
    ),
    bullet: ({ children }) => (
      <ul className="list-disc list-inside leading-8 px-8 my-4">{children}</ul>
    ),
  },
  listItem: {
    number: ({ children }) => <li>{children}</li>,
    bullet: ({ children }) => <li>{children}</li>,
  },
  types: {
    image: ImageComponent,
  },
};

export const PortableRichText: React.FC<{
  items: BlogPostBody;
}> = ({ items }) => {
  return (
    <>
      <PortableText value={items} components={components} />
    </>
  );
};
