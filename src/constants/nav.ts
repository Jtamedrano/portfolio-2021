export const NAVIGATION = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Services",
    flyoutLabel: "General Services",
    to: "/services",
    flyoutItems: [
      {
        label: "Website For Contractors",
        to: "/services/websites-for-contractors",
        description:
          "Websites for Builders, Electricians, Plumbers, Roofers, and other contractors.",
      },
      {
        label: "Website For Landscapers",
        to: "/services/websites-for-landscapers",
        description:
          "Websites for Landscapers, Gardeners, Lawn Care, and Outdoor Services.",
      },
    ],
  },
  {
    label: "Blog",
    to: "/blog",
  },
  {
    label: "Contact",
    to: "/contact",
  },
];

export const LOCATIONS = [
  {
    id: "anaheim",
    city: "Anaheim",
    state: "CA",
    slug: "web-design-in-anaheim",
  },
  {
    id: "los-angeles",
    city: "Los Angeles",
    state: "CA",
    slug: "web-design-in-los-angeles",
  },
  {
    id: "orange-county",
    city: "Orange County",
    state: "CA",
    slug: "web-design-in-orange-county",
  },
  {
    id: "san-diego",
    city: "San Diego",
    state: "CA",
    slug: "web-design-in-san-diego",
  },
  {
    id: "fontana",
    city: "Fontana",
    state: "CA",
    slug: "web-design-in-fontana",
  },
  {
    id: "pasadena",
    city: "Pasadena",
    state: "CA",
    slug: "web-design-in-pasadena",
  },
  {
    id: "riverside",
    city: "Riverside",
    state: "CA",
    slug: "web-design-in-riverside",
  },
  {
    id: "rancho-cucamonga",
    city: "Rancho Cucamonga",
    state: "CA",
    slug: "web-design-in-rancho-cucamonga",
  },
  {
    id: "san-bernardino",
    city: "San Bernardino",
    state: "CA",
    slug: "web-design-in-san-bernardino",
  },
  {
    id: "ontario",
    city: "Ontario",
    state: "CA",
    slug: "web-design-in-ontario",
  },
  {
    id: "long-beach",
    city: "Long Beach",
    state: "CA",
    slug: "web-design-in-long-beach",
  },
];

interface LocationContent {
  title: string;
  intro: string;
  importance: string;
  whyNeeded: string;
  seoBenefits: string;
  services: {
    customDesign: string;
    responsiveDesign: string;
    userExperience: string;
    specialOffers: string;
  };
  whyChoose: {
    expertise: string;
    localCommitment: string;
    scalability: string;
  };
  ctaMessage: string;
}

export const locationContent: Record<string, LocationContent> = {
  "web-design-in-fontana": {
    title: "Web Design Services in Fontana, CA",
    intro:
      "Welcome to J Medrano Design LLC, your trusted partner in crafting high-quality web solutions tailored for home service business in Fontana. Our team specializes in creating websites that drive engagement and conversions.",
    importance:
      "In today’s fast-paced digital world, a professional website is essential. Home service businesses in Fontana need a website that establishes credibility and fosters trust within the local community.",
    whyNeeded:
      "A strong local presence is key to success. By focusing on web design that resonates with Fontana’s unique audience, your business can stand out, connect with potential customers, and cultivate long-term relationships.",
    seoBenefits:
      "Implementing strategic local SEO techniques, such as targeting keywords like 'Best Day Care in Fontana, CA,' enables your business to achieve higher rankings, attract more local customers, and boost conversions. This ensures your website gets discovered by those actively searching for your services.",
    services: {
      customDesign:
        "We design fully customized websites that showcase your brand’s unique identity and connect with Fontana’s local audience.",
      responsiveDesign:
        "Ensure seamless performance across all devices—from desktops to smartphones—providing a smooth user experience for visitors in Fontana.",
      userExperience:
        "Our intuitive website designs focus on easy navigation, fast load times, and engaging content that keeps potential customers interested.",
      specialOffers:
        "New clients in Fontana receive a complimentary hero section redesign, making an immediate impact on visitors.",
    },
    whyChoose: {
      expertise:
        "We leverage the latest web technologies, including React and Next.js, to build high-performance websites that deliver outstanding results.",
      localCommitment:
        "As a company rooted in Southern California, we understand the needs of home service businesses in Fontana and create designs that appeal to the local audience.",
      scalability:
        "Our websites are built for growth, ensuring they adapt to your business’s evolving needs while maintaining security and reliability.",
    },
    ctaMessage:
      "Tell us about your business in Fontana, and we’ll craft a website that sets you apart from the competition. Let’s build your online presence together!",
  },

  "web-design-in-riverside": {
    title: "Customized Web Design Solutions in Riverside, CA",
    intro:
      "Welcome to J Medrano Design LLC, your partner in creating personalized web solutions for Riverside's vibrant business community. We focus on crafting websites that engage visitors and drive business success.",
    importance:
      "In today's digital age, Riverside home service businesses need a strong online presence to remain competitive. A well-designed website serves as a cornerstone for building credibility and reaching a broader audience.",
    whyNeeded:
      "Riverside's diverse economy, encompassing sectors like healthcare, education, and manufacturing, requires tailored web solutions. Our designs cater to the specific needs of these industries, enhancing your market reach.",
    seoBenefits:
      "Employing local SEO tactics, such as targeting 'Best Kids Dentist in Riverside, CA,' can improve your search visibility, attract local customers, and boost your business growth.",
    services: {
      customDesign:
        "We develop unique websites that capture your brand essence and resonate with Riverside's community.",
      responsiveDesign:
        "Ensuring optimal performance on all devices, our designs meet the needs of Riverside's tech-savvy users.",
      userExperience:
        "Prioritizing user-friendly interfaces and quick load times, we create engaging experiences for your audience.",
      specialOffers:
        "For Riverside clients: Enjoy a free website audit to identify opportunities for enhancement.",
    },
    whyChoose: {
      expertise:
        "Our skilled team leverages advanced technologies to deliver high-quality web solutions tailored to your needs.",
      localCommitment:
        "Being locally based, we have deep insights into Riverside's market trends and customer preferences.",
      scalability:
        "Our websites are built to grow with your business, ensuring long-term success and adaptability.",
    },
    ctaMessage:
      "Looking to strengthen your online presence in Riverside? Reach out to us today to create a website that stands out.",
  },

  "web-design-in-anaheim": {
    title: "Tailored Web Design Services in Anaheim, CA",
    intro:
      "At J Medrano Design LLC, we specialize in creating customized web solutions for Anaheim's diverse business community. Our goal is to develop websites that captivate visitors and drive business growth.",
    importance:
      "In Anaheim's vibrant market, a compelling online presence is essential. A professionally designed website not only enhances credibility but also connects businesses with the local community, fostering trust and engagement.",
    whyNeeded:
      "Anaheim's economy is significantly driven by tourism, with major attractions like Disneyland Resort and the Anaheim Convention Center. A well-crafted website can help businesses in the hospitality, retail, and entertainment sectors stand out and attract both locals and visitors.",
    seoBenefits:
      "By implementing local SEO strategies, such as optimizing for 'Top Web Design Services in Anaheim, CA,' your business can achieve higher search rankings, attract targeted traffic, and increase conversion rates.",
    services: {
      customDesign:
        "We create bespoke websites that reflect your brand's identity and appeal to Anaheim's diverse audience.",
      responsiveDesign:
        "Our designs ensure seamless user experiences across all devices, catering to the on-the-go lifestyle of Anaheim residents and tourists.",
      userExperience:
        "Focusing on intuitive navigation and fast load times, we enhance user satisfaction and encourage repeat visits.",
      specialOffers:
        "Exclusive to Anaheim businesses: Receive a complimentary consultation to identify your web design needs.",
    },
    whyChoose: {
      expertise:
        "Our team stays ahead of industry trends, utilizing the latest technologies to deliver exceptional web solutions.",
      localCommitment:
        "As part of the Anaheim community, we understand the local market dynamics and tailor our services accordingly.",
      scalability:
        "We design websites with your future growth in mind, ensuring scalability and sustained performance.",
    },
    ctaMessage:
      "Ready to elevate your business in Anaheim? Contact us today to start your journey towards a compelling online presence.",
  },

  "web-design-in-los-angeles": {
    title: "Innovative Web Design Services in Los Angeles, CA",
    intro:
      "At J Medrano Design LLC, we specialize in crafting bespoke web solutions for Los Angeles's dynamic and diverse business landscape. Our mission is to create websites that captivate audiences and drive measurable growth.",
    importance:
      "In the bustling metropolis of Los Angeles, a compelling online presence is vital. A professionally designed website enhances your brand's credibility and connects you with a broad and varied audience.",
    whyNeeded:
      "Los Angeles is a global hub for entertainment, technology, and fashion. To stand out in these competitive industries, businesses need websites that reflect innovation and creativity, appealing to both local and international markets.",
    seoBenefits:
      "Implementing targeted local SEO strategies, such as optimizing for 'Leading Web Design Services in Los Angeles, CA,' can improve your search visibility, attract local clientele, and drive business growth.",
    services: {
      customDesign:
        "We develop unique websites that capture your brand's essence and resonate with Los Angeles's eclectic audience.",
      responsiveDesign:
        "Our designs ensure optimal performance across all devices, catering to the tech-savvy and mobile-oriented users in Los Angeles.",
      userExperience:
        "Prioritizing intuitive navigation and swift load times, we create engaging experiences that keep visitors returning.",
      specialOffers:
        "Exclusive to Los Angeles clients: Receive a complimentary website audit to identify opportunities for enhancement.",
    },
    whyChoose: {
      expertise:
        "Our skilled team leverages advanced technologies to deliver high-quality web solutions tailored to your needs.",
      localCommitment:
        "Being locally based, we have deep insights into Los Angeles's market trends and customer preferences.",
      scalability:
        "Our websites are built to grow with your business, ensuring long-term success and adaptability.",
    },
    ctaMessage:
      "Looking to strengthen your online presence in Los Angeles? Reach out to us today to create a website that stands out.",
  },

  "web-design-in-orange-county": {
    title: "Customized Web Design Services in Orange County, CA",
    intro:
      "At J Medrano Design LLC, we specialize in delivering bespoke web solutions tailored to Orange County's diverse and thriving business community. Our mission is to create websites that captivate audiences and drive measurable growth.",
    importance:
      "In Orange County's competitive market, a compelling online presence is essential. A professionally designed website enhances your brand's credibility and connects you with a broad and varied audience.",
    whyNeeded:
      "Orange County is a hub for technology, healthcare, and tourism industries. To stand out in these dynamic sectors, businesses need innovative websites that reflect their unique value propositions and appeal to both local and international clients.",
    seoBenefits:
      "Implementing targeted local SEO strategies, such as optimizing for 'Leading Web Design Services in Orange County, CA,' can improve your search visibility, attract local clientele, and drive business growth.",
    services: {
      customDesign:
        "We develop unique websites that capture your brand's essence and resonate with Orange County's eclectic audience.",
      responsiveDesign:
        "Our designs ensure optimal performance across all devices, catering to the tech-savvy and mobile-oriented users in Orange County.",
      userExperience:
        "Prioritizing intuitive navigation and swift load times, we create engaging experiences that keep visitors returning.",
      specialOffers:
        "Exclusive to Orange County clients: Receive a complimentary website audit to identify opportunities for enhancement.",
    },
    whyChoose: {
      expertise:
        "Our skilled team leverages advanced technologies to deliver high-quality web solutions tailored to your needs.",
      localCommitment:
        "Being locally based, we have deep insights into Orange County's market trends and customer preferences.",
      scalability:
        "Our websites are built to grow with your business, ensuring long-term success and adaptability.",
    },
    ctaMessage:
      "Looking to strengthen your online presence in Orange County? Reach out to us today to create a website that stands out.",
  },

  "web-design-in-san-diego": {
    title: "Innovative Web Design Services in San Diego, CA",
    intro:
      "At J Medrano Design LLC, we specialize in crafting bespoke web solutions tailored to San Diego's dynamic business environment. Our mission is to create websites that captivate audiences and drive measurable growth.",
    importance:
      "In San Diego's competitive market, a compelling online presence is essential. A professionally designed website enhances your brand's credibility and connects you with a diverse and tech-savvy audience.",
    whyNeeded:
      "San Diego is a hub for defense, tourism, international trade, and research/manufacturing industries. To stand out in these sectors, businesses need innovative websites that reflect their unique value propositions and appeal to both local and global clients.",
    seoBenefits:
      "Implementing targeted local SEO strategies, such as optimizing for 'Leading Web Design Services in San Diego, CA,' can improve your search visibility, attract local clientele, and drive business growth.",
    services: {
      customDesign:
        "We develop unique websites that capture your brand's essence and resonate with San Diego's diverse audience.",
      responsiveDesign:
        "Our designs ensure optimal performance across all devices, catering to the tech-savvy and mobile-oriented users in San Diego.",
      userExperience:
        "Prioritizing intuitive navigation and swift load times, we create engaging experiences that keep visitors returning.",
      specialOffers:
        "Exclusive to San Diego clients: Receive a complimentary website audit to identify opportunities for enhancement.",
    },
    whyChoose: {
      expertise:
        "Our skilled team leverages advanced technologies to deliver high-quality web solutions tailored to your needs.",
      localCommitment:
        "Being locally based, we have deep insights into San Diego's market trends and customer preferences.",
      scalability:
        "Our websites are built to grow with your business, ensuring long-term success and adaptability.",
    },
    ctaMessage:
      "Looking to strengthen your online presence in San Diego? Reach out to us today to create a website that stands out.",
  },

  "web-design-in-pasadena": {
    title: "Tailored Web Design Services in Pasadena, CA",
    intro:
      "At J Medrano Design LLC, we specialize in creating customized web solutions for Pasadena's innovative business community. Our goal is to develop websites that engage visitors and drive tangible results.",
    importance:
      "In Pasadena's competitive market, a strong online presence is crucial. A well-designed website enhances your brand's credibility and connects you with a discerning and educated audience.",
    whyNeeded:
      "Pasadena is renowned for its contributions to science, technology, and education. To stand out in these sectors, businesses require websites that reflect their expertise and appeal to both local and global clients.",
    seoBenefits:
      "Implementing targeted local SEO strategies, such as optimizing for 'Top Web Design Services in Pasadena, CA,' can improve your search visibility, attract local clientele, and drive business growth.",
    services: {
      customDesign:
        "We develop unique websites that capture your brand's essence and resonate with Pasadena's diverse audience.",
      responsiveDesign:
        "Our designs ensure optimal performance across all devices, catering to the tech-savvy and mobile-oriented users in Pasadena.",
      userExperience:
        "Prioritizing intuitive navigation and swift load times, we create engaging experiences that keep visitors returning.",
      specialOffers:
        "Exclusive to Pasadena clients: Receive a complimentary website audit to identify opportunities for enhancement.",
    },
    whyChoose: {
      expertise:
        "Our skilled team leverages advanced technologies to deliver high-quality web solutions tailored to your needs.",
      localCommitment:
        "Being locally based, we have deep insights into Pasadena's market trends and customer preferences.",
      scalability:
        "Our websites are built to grow with your business, ensuring long-term success and adaptability.",
    },
    ctaMessage:
      "Looking to strengthen your online presence in Pasadena? Reach out to us today to create a website that stands out.",
  },

  "web-design-in-san-bernardino": {
    title: "Professional Web Design Services in San Bernardino, CA",
    intro:
      "At J Medrano Design LLC, we specialize in delivering customized web solutions tailored to San Bernardino's diverse business community. Our mission is to create websites that engage visitors and drive measurable growth.",
    importance:
      "In San Bernardino's evolving market, a compelling online presence is essential. A professionally designed website enhances your brand's credibility and connects you with a broad and varied audience.",
    whyNeeded:
      "San Bernardino serves as a significant logistics and transportation hub, with growing sectors in healthcare and education. To stand out in these industries, businesses need innovative websites that reflect their unique value propositions and appeal to both local and regional clients.",
    seoBenefits:
      "Implementing targeted local SEO strategies, such as optimizing for 'Leading Web Design Services in San Bernardino, CA,' can improve your search visibility, attract local clientele, and drive business growth.",
    services: {
      customDesign:
        "We develop unique websites that capture your brand's essence and resonate with San Bernardino's diverse audience.",
      responsiveDesign:
        "Our designs ensure optimal performance across all devices, catering to the tech-savvy and mobile-oriented users in San Bernardino.",
      userExperience:
        "Prioritizing intuitive navigation and swift load times, we create engaging experiences that keep visitors returning.",
      specialOffers:
        "Exclusive to San Bernardino clients: Receive a complimentary website audit to identify opportunities for enhancement.",
    },
    whyChoose: {
      expertise:
        "Our skilled team leverages advanced technologies to deliver high-quality web solutions tailored to your needs.",
      localCommitment:
        "Being locally based, we have deep insights into San Bernardino's market trends and customer preferences.",
      scalability:
        "Our websites are built to grow with your business, ensuring long-term success and adaptability.",
    },
    ctaMessage:
      "Looking to strengthen your online presence in San Bernardino? Reach out to us today to create a website that stands out.",
  },

  "web-design-in-ontario": {
    title: "Customized Web Design Services in Ontario, CA",
    intro:
      "At J Medrano Design LLC, we specialize in delivering bespoke web solutions tailored to Ontario's dynamic business environment. Our mission is to create websites that captivate audiences and drive measurable growth.",
    importance:
      "In Ontario's competitive market, a compelling online presence is essential. A professionally designed website enhances your brand's credibility and connects you with a diverse and tech-savvy audience.",
    whyNeeded:
      "Ontario is a hub for manufacturing, retail trade, and transportation industries. To stand out in these sectors, businesses need innovative websites that reflect their unique value propositions and appeal to both local and global clients.",
    seoBenefits:
      "Implementing targeted local SEO strategies, such as optimizing for 'Leading Web Design Services in Ontario, CA,' can improve your search visibility, attract local clientele, and drive business growth.",
    services: {
      customDesign:
        "We develop unique websites that capture your brand's essence and resonate with Ontario's diverse audience.",
      responsiveDesign:
        "Our designs ensure optimal performance across all devices, catering to the tech-savvy and mobile-oriented users in Ontario.",
      userExperience:
        "Prioritizing intuitive navigation and swift load times, we create engaging experiences that keep visitors returning.",
      specialOffers:
        "Exclusive to Ontario clients: Receive a complimentary website audit to identify opportunities for enhancement.",
    },
    whyChoose: {
      expertise:
        "Our skilled team leverages advanced technologies to deliver high-quality web solutions tailored to your needs.",
      localCommitment:
        "Being locally based, we have deep insights into Ontario's market trends and customer preferences.",
      scalability:
        "Our websites are built to grow with your business, ensuring long-term success and adaptability.",
    },
    ctaMessage:
      "Looking to strengthen your online presence in Ontario? Reach out to us today to create a website that stands out.",
  },

  "web-design-in-long-beach": {
    title: "Innovative Web Design Services in Long Beach, CA",
    intro:
      "At J Medrano Design LLC, we specialize in crafting bespoke web solutions tailored to Long Beach's dynamic and diverse business community. Our mission is to create websites that captivate audiences and drive measurable growth.",
    importance:
      "In Long Beach's competitive market, a compelling online presence is essential. A professionally designed website enhances your brand's credibility and connects you with a broad and varied audience.",
    whyNeeded:
      "Long Beach is a hub for industries such as healthcare, aerospace, and international trade. To stand out in these sectors, businesses need innovative websites that reflect their unique value propositions and appeal to both local and global clients.",
    seoBenefits:
      "Implementing targeted local SEO strategies, such as optimizing for 'Leading Web Design Services in Long Beach, CA,' can improve your search visibility, attract local clientele, and drive business growth.",
    services: {
      customDesign:
        "We develop unique websites that capture your brand's essence and resonate with Long Beach's diverse audience.",
      responsiveDesign:
        "Our designs ensure optimal performance across all devices, catering to the tech-savvy and mobile-oriented users in Long Beach.",
      userExperience:
        "Prioritizing intuitive navigation and swift load times, we create engaging experiences that keep visitors returning.",
      specialOffers:
        "Exclusive to Long Beach clients: Receive a complimentary website audit to identify opportunities for enhancement.",
    },
    whyChoose: {
      expertise:
        "Our skilled team leverages advanced technologies to deliver high-quality web solutions tailored to your needs.",
      localCommitment:
        "Being locally based, we have deep insights into Long Beach's market trends and customer preferences.",
      scalability:
        "Our websites are built to grow with your business, ensuring long-term success and adaptability.",
    },
    ctaMessage:
      "Looking to strengthen your online presence in Long Beach? Reach out to us today to create a website that stands out.",
  },

  "web-design-in-rancho-cucamonga": {
    title: "Innovative Web Design Services in Rancho Cucamonga, CA",
    intro:
      "At J Medrano Design LLC, we specialize in crafting bespoke web solutions tailored to Rancho Cucamonga's dynamic business community. Our mission is to create websites that captivate audiences and drive measurable growth.",
    importance:
      "In Rancho Cucamonga's competitive market, a compelling online presence is essential. A professionally designed website enhances your brand's credibility and connects you with a diverse and tech-savvy audience.",
    whyNeeded:
      "Rancho Cucamonga is a hub for logistics, manufacturing, and healthcare industries. To stand out in these sectors, businesses need innovative websites that reflect their unique value propositions and appeal to both local and global clients.",
    seoBenefits:
      "Implementing targeted local SEO strategies, such as optimizing for 'Leading Web Design Services in Rancho Cucamonga, CA,' can improve your search visibility, attract local clientele, and drive business growth.",
    services: {
      customDesign:
        "We develop unique websites that capture your brand's essence and resonate with Rancho Cucamonga's diverse audience.",
      responsiveDesign:
        "Our designs ensure optimal performance across all devices, catering to the tech-savvy and mobile-oriented users in Rancho Cucamonga.",
      userExperience:
        "Prioritizing intuitive navigation and swift load times, we create engaging experiences that keep visitors returning.",
      specialOffers:
        "Exclusive to Rancho Cucamonga clients: Receive a complimentary website audit to identify opportunities for enhancement.",
    },
    whyChoose: {
      expertise:
        "Our skilled team leverages advanced technologies to deliver high-quality web solutions tailored to your needs.",
      localCommitment:
        "Being locally based, we have deep insights into Rancho Cucamonga's market trends and customer preferences.",
      scalability:
        "Our websites are built to grow with your business, ensuring long-term success and adaptability.",
    },
    ctaMessage:
      "Looking to strengthen your online presence in Rancho Cucamonga? Reach out to us today to create a website that stands out.",
  },
};
