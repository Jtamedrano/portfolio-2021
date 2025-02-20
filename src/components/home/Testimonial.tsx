import Link from "next/link";
import PageSectionContainer from "../PageContainer/PageContainer";

const testimonial = {
  quote:
    "I just started my own business and didn't have the slightest clue on how to make a website. Thankfully Jesse was able to walk me through the entire process and make my site very appealing. If you need a good site to get your business off the ground this is the guy to work with!!!",
  reviewer: "Marco G.",
  website: "https://www.polomassage.com",
  websiteName: "Polo Massage",
  image:
    "https://lh3.googleusercontent.com/a-/ALV-UjVXPQbR6vt4JafdvIX2I8IOnHCbL0byWowOoE5D5wonMTphEXKq=s36-c-rp-mo-br100",
};

export const Testimonial: React.FC = () => {
  return (
    <PageSectionContainer
      bgClassName="bg-gray-100 dark:bg-slate-900"
      className="py-20"
    >
      <h2 className="text-3xl font-bold text-center text-secondary-500 dark:text-gray-100">
        Don't Just Take Our Word for It
      </h2>
      <blockquote className="text-lg/7 font-light dark:text-gray-300 max-w-7xl mx-auto mt-8 text-center">
        "{testimonial.quote}"
      </blockquote>
      <div className="flex items-center justify-center mt-8">
        <div className="ml-4 inline-flex items-center gap-2">
          <p className="font-semibold text-secondary-500 dark:text-gray-100">
            {testimonial.reviewer}
          </p>
          <span className="text-gray-500 dark:text-gray-300"> - </span>
          <Link
            target="_blank"
            href={testimonial.website}
            className="text-sm underline hover:text-blue-500"
          >
            {testimonial.websiteName}
          </Link>
        </div>
      </div>
    </PageSectionContainer>
  );
};
