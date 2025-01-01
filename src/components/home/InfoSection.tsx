import Image from "next/image";
import Link from "next/link";

export const InfoSection: React.FC = () => {
  return (
    <section className="py-8 flex justify-between self-stretch items-start">
      <div className="container mx-auto flex items-stretch gap-4 flex-1 px-2 lg:px-0">
        <div className="flex justify-between items-center flex-1 rounded-lg lg:max-h-[360px]">
          <Image
            src="/webdev_journey.png"
            className="flex-1 self-stretch object-cover w-auto h-auto"
            width={632}
            height={368}
            alt="Web Development Journey"
          />
        </div>
        <div className="flex flex-col gap-4 flex-1 text-slate-700">
          <div className="flex flex-col gap-3">
            <h3 className="text-3xl font-semibold text-slate-800">
              Design / Development / Deployment
            </h3>
            <p>
              From initial concept to live deployment, I provide a seamless
              process that ensures your website is tailored to your vision and
              built for success.
            </p>
          </div>
          <ul className="list-disc list-inside leading-7">
            <li>
              <strong>Custom Design:</strong> Crafted to reflect your brand and
              engage your audience.
            </li>
            <li>
              <strong>Responsive Development:</strong> Websites that look great
              and perform flawlessly on any device.
            </li>
            <li>
              <strong>User-Centric Approach:</strong> Prioritizing intuitive
              navigation and user experience.
            </li>
            <li>
              <strong>Scalable Solutions:</strong> Built with growth in mind to
              adapt to your business needs.
            </li>
            <li>
              <strong>Effortless Deployment:</strong> Launch-ready websites with
              ongoing support for smooth operation.
            </li>
          </ul>
          <div className="flex flex-col gap-3 items-start">
            <p className="text-2xl text-secondary-700 font-bold">
              Ask how you can get a free hero section redesign!
            </p>
            <Link
              href="/contact"
              className="bg-secondary-700 text-slate-100 py-2 px-4 rounded-full text-lg font-semibold hover:bg-secondary-800 transition-colors duration-300"
            >
              Let&apos;s Chat
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
