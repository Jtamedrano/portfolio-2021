export const AboutMe = () => {
  return (
    <section className="bg-gradient-to-b from-secondary-900 to-slate-900 shadow-inner shadow-black/50">
      <div className="container flex flex-col lg:flex-row justify-center items-center self-stretch mx-auto py-8 px-4 xl:px-0 gap-12 overflow-hidden">
        <div className="flex-1 space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight uppercase text-secondary-400 text-pretty">
            About J Medrano Design LLC
          </h2>
          <p className="leading-relaxed flex flex-col text-pretty">
            Jesse Medrano, owner of J Medrano Design LLC, is passionate about
            helping local small and mid-sized businesses climb the ranks and
            achieve real growth. With a deep commitment to community and
            collaboration, he believes in building lasting partnerships by
            blending creativity, strategy, and technology to meet each client’s
            unique needs.
          </p>
          <p className="leading-relaxed flex flex-col text-pretty">
            Leveraging his expertise in polished front-end design and reliable
            back-end solutions, Jesse delivers innovative web experiences that
            elevate brands and turn visitors into loyal customers—one business
            at a time.
          </p>
        </div>
      </div>
    </section>
  );
};
