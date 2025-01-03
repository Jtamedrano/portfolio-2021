import Link from "next/link";
import * as React from "react";

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};

// markup
const NotFoundPage = () => {
  return (
    <section className="flex flex-col justify-center items-center max-w-7xl mx-auto py-16 px-4 gap-4">
      <h1 className="text-4xl font-bold tracking-tight mb-4 text-primary">
        Page not found
      </h1>
      <p className="text-lg font-light text-center">
        Sorry{" "}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{" "}
        we couldn’t find what you were looking for.
        <br />
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Try creating a page in{" "}
            <code className="bg-[#f0f0f0] text-black p-2 rounded-md">
              src/pages/
            </code>
          </>
        ) : null}
      </p>
      <Link
        href="/"
        className="bg-accent text-white py-2 px-4 rounded-full inline-block mt-4"
      >
        Go home
      </Link>
    </section>
  );
};

export default NotFoundPage;
