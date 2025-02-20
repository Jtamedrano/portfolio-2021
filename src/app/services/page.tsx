import { PageHeader } from "../../components/PageHeader/PageHeader";
import { ServiceItem } from "../../components/services/ServiceItem";
import { SERVICES_LIST } from "../../constants/service";

export const metadata = {
  title:
    "Website Design & SEO Services for Home Service Businesses | J Medrano Design LLC",
  description:
    "Boost your business with expert web design, SEO, and online branding services. J Medrano Design LLC helps home service businesses grow online. Get a free strategy session today!",
  keywords:
    "web design, web development, custom website design, website upgrades, landing page optimization, enterprise application development, CMS integration, deployment support, Home Service Businesses",
};

const ServicesPage = () => {
  return (
    <>
      <PageHeader
        title="Services"
        description="Explore the range of services we offer to help you achieve your web development goals. From custom website design to enterprise application development, we have you covered."
      />
      <div className="py-8 bg-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 container mx-auto px-3">
          {SERVICES_LIST.map((service, index) => (
            <ServiceItem
              key={`service-${index}`}
              title={service.title}
              description={service.description}
              keyFeatures={service.keyFeatures}
              image={service.image}
              search={service.search}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
