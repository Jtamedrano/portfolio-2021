import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";
import { MdEmail, MdPhone } from "react-icons/md";
import PageSectionContainer from "../../components/PageContainer/PageContainer";
import { HomePageForm } from "../../components/home/HomePageForm";
import Image from "next/image";
import { URLSearchParams } from "url";
import { SERVICES_LIST } from "../../constants/service";

interface ContactInfoItemProps {
  Icon: IconType;
  label: string;
  display: string;
  href: string;
}

const ContactInfoItem: React.FC<ContactInfoItemProps> = ({
  Icon,
  label,
  display,
  href,
}) => {
  return (
    <div className="flex gap-x-4">
      <dt className="flex-none">
        <span className="sr-only">{label}</span>
        <Icon aria-hidden="true" className="h-7 w-6 text-secondary-400" />
      </dt>
      <dd>
        <Link href={href}>{display}</Link>
      </dd>
    </div>
  );
};

type props = {
  params: undefined;
  searchParams: Promise<{ [key: string]: string | undefined }>;
};

export const generateMetadata = async ({ searchParams }: props) => {
  const service = (await searchParams).service;

  const foundService = SERVICES_LIST.find((s) => s.search === service);

  if (!!foundService) {
    return {
      title: `Contact For ${foundService.title} | J Medrano Design LLC`,
      description: `Ready to get started on your ${foundService.title} project? Contact J Medrano Design LLC at (909) 636-1186 or email us at info@jtamedrano.com to get started.`,
      keywords: `web design, web development, digital marketing, web design agency, web development agency, web design company, web development company, web design services, web development services, digital marketing services, web design Inland Empire, web development Inland Empire, ${foundService.title}`,
    };
  }

  return {
    title: "Contact Us & Request a Quote | J Medrano Design LLC",
    description:
      "Get in touch with J Medrano Design LLC to discuss your web development project. Fill out the form or contact us at (909) 636-1186 or email us at info@jtamedrano.com to get started.",
    keywords:
      "web design, web development, digital marketing, web design agency, web development agency, web design company, web development company, web design services, web development services, digital marketing services, web design Inland Empire, web development Inland Empire",
  };
};

const ContactPage = () => {
  return (
    <>
      <PageSectionContainer className="py-24">
        <h1 className="text-4xl font-semibold text-center text-secondary-400">
          Contact J Medrano Design LLC
        </h1>
        <p className="mt-6 text-2xl/8 text-gray-300 text-center">
          Your partner in crafting high-converting websites for home service
          businesses. Let&apos;s build something great together!
        </p>
      </PageSectionContainer>
      <section className="relative isolated bg-slate-800 text-slate-100 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 divide-y-2 lg:divide-y-0">
          <div className="relative px-6 pb-12 pt-24 sm:p5-32 lg:static lg:px-8 lg:py-48 flex justify-center">
            <div className="mx-auto max-w-xl lg:mx-0 lg:mx-w-lg">
              <h2 className="text-pretty text-4xl font-semibold tracking-tight sm:text-5xl text-secondary-400">
                Contact Us
              </h2>
              <p className="mt-6 text-lg/8 text-gray-300">
                Have a project in mind? Let&apos;s bring it to life! Fill out
                the form and I&apos;ll get back to you as soon as possible.
              </p>
              <dl className="mt-8 space-y-4 text-base/7 text-gray-300">
                <ContactInfoItem
                  Icon={MdPhone}
                  label="Phone"
                  href="tel:+19096361186"
                  display="(909) 636-1186"
                />
                <ContactInfoItem
                  Icon={MdEmail}
                  label="Email"
                  href="mailto:info@jtamedrano.com"
                  display="info@jtamedrano.com"
                />
              </dl>
            </div>
          </div>
          <div className="flex items-center justify-center bg-gradient-to-br from-secondary-700 to-secondary-900 py-24">
            <div>
              <HomePageForm />
            </div>
          </div>
        </div>
      </section>
      <PageSectionContainer className="flex flex-col py-12 gap-12 lg:flex-row lg:gap-24">
        <div className="flex-1 py-24">
          <h2 className="text-3xl font-semibold text-secondary-400">
            Why chose J Medrano Design LLC?
          </h2>
          <p className="mt-6 text-lg/8 text-gray-300 ">
            With a deep commitment to community and collaboration, I believe in
            building lasting partnerships by blending creativity, strategy, and
            technology to meet each client&apos;s unique needs. With 3+ years of
            working in enterprise software development, I have the experience to
            deliver innovative web experiences that elevate brands and turn
            visitors into loyal customers—one business at a time.
          </p>
        </div>
        <div className="relative w-full flex-1 h-96 lg:h-auto rounded-lg overflow-hidden shadow shadow-black/50">
          <Image
            src="/office.png"
            alt="Office with a team of developers"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw"
            className="object-cover"
          />
        </div>
      </PageSectionContainer>
      <PageSectionContainer className="py-24 text-center">
        <h2 className="text-3xl font-semibold  text-secondary-400">
          Frequently Asked Questions
        </h2>
        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          <div className="flex flex-col gap-4 p-8 bg-slate-800 rounded-lg shadow-md shadow-black/50">
            <h3 className="text-xl font-semibold">
              How much does a website cost?
            </h3>
            <p className="text-gray-300 max-w-lg mx-auto text-lg/8">
              Pricing depends on your project needs, but we offer cost-effective
              solutions. In terms of payment structure, our website builds are a
              one-time fee with a 50% deposit to start. We also offer monthly
              maintenance plans.
            </p>
          </div>
          <div className="flex flex-col gap-4 p-8 bg-slate-800 rounded-lg shadow-md shadow-black/50">
            <h3 className="text-xl font-semibold">
              How long does it take to build a website?
            </h3>
            <p className="text-gray-300  max-w-lg mx-auto text-lg/8">
              A typical website build takes 4-6 weeks, but this can vary based
              on the complexity of the project. We will provide a timeline
              estimate during our initial consultation.
            </p>
          </div>
          <div className="flex flex-col gap-4 p-8 bg-slate-800 rounded-lg shadow-md shadow-black/50">
            <h3 className="text-xl font-semibold">
              Do you offer SEO services?
            </h3>
            <p className="text-gray-300  max-w-lg mx-auto text-lg/8">
              Yes! We help improve your Google rankings and bring in more
              traffic. We offer SEO audits, keyword research, and on-page SEO to
              help your website rank higher. By using a data driven approach, we
              use analytic data to make informed decisions.
            </p>
          </div>
          <div className="flex flex-col gap-4 p-8 bg-slate-800 rounded-lg shadow-md shadow-black/50">
            <h3 className="text-xl font-semibold">
              Can you help generate leads?
            </h3>
            <p className="text-gray-300  max-w-lg mx-auto text-lg/8">
              Absolutely! We specialize in lead generation strategies for small
              businesses. We build custom web forms and landing pages to capture
              leads, and we offer email marketing services to nurture leads into
              customers. We also consult on social media and listing service ad
              campaigns.
            </p>
          </div>
        </div>
      </PageSectionContainer>
    </>
  );
};

export default ContactPage;
