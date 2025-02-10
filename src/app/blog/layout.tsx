import React from "react";
import { PageHeader } from "../../components/PageHeader/PageHeader";

const BlogPageLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <PageHeader
        title="Blog Posts & Articles"
        description="Read our latest blog posts and articles on a variety of topics."
      />
      <div className="bg-slate-700 flex-1 flex flex-col">
        <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 flex-1 flex flex-col">
          {children}
        </div>
      </div>
    </>
  );
};

export default BlogPageLayout;
