import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";
import { MdEmail, MdPhone } from "react-icons/md";
import { ContactForm } from "../../components/contact/ContactForm";

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

export const metadata = {
  title: "Contact | J Medrano Design",
  description:
    "Get in touch with J Medrano Design to discuss your web development project. Fill out the form or contact us at (909) 636-1186 or email us at jtamedrano@gmail.com to get started.",
  keywords:
    "web design, web development, digital marketing, web design agency, web development agency, web design company, web development company, web design services, web development services, digital marketing services, web design Inland Empire, web development Inland Empire",
};

const ContactPage = () => {
  return (
    <section className="relative isolated bg-slate-700 text-slate-100 flex-1 flex flex-col justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 divide-y-2 lg:divide-y-0">
        <div className="relative px-6 pb-12 pt-24 sm:p5-32 lg:static lg:px-8 lg:py-48 flex justify-center">
          <div className="mx-auto max-w-xl lg:mx-0 lg:mx-w-lg">
            <h2 className="text-pretty text-4xl font-semibold tracking-tight sm:text-5xl text-secondary-400">
              Get in Touch
            </h2>
            <p className="mt-6 text-lg/8 text-gray-300">
              Have a project in mind? Let&apos;s bring it to life! Fill out the
              form and I&apos;ll get back to you as soon as possible.
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
                href="mailto:jtamedrano@gmail.com"
                display="jtamedrano@gmail.com"
              />
            </dl>
          </div>
        </div>
        <div className="flex justify-center bg-gradient-to-br from-secondary-600 to-secondary-700">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
