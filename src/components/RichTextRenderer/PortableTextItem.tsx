import { PortableText, PortableTextComponents } from "next-sanity";
import { BlogPost } from "../../models/sanity-schema";
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
      <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 my-8">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 my-3">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-300 my-2">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl font-bold text-gray-600 dark:text-gray-400 my-1">
        {children}
      </h4>
    ),
    normal: ({ children }) => <p className="text-base/7 mb-4">{children}</p>,
  },
  hardBreak: () => <br />,
  list: ({ value, children }) => {
    if (value.listItem === "number") {
      return <ol className="list-decimal list-inside leading-7">{children}</ol>;
    }
    return <ul className="list-disc list-inside leading-7">{children}</ul>;
  },
  listItem: ({ children }) => <li>{children}</li>,
  types: {
    image: ImageComponent,
  },
};

export const PortableRichText: React.FC<{
  items: BlogPost["body"];
}> = ({ items }) => {
  return (
    <>
      {items?.map((item, index) => {
        return (
          <PortableText key={index} value={item} components={components} />
        );
      })}
    </>
  );
};
