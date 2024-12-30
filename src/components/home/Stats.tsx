export const Stats = () => {
  return (
    <section className="bg-gray-200 dark:bg-gray-800">
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-primary mb-4">Stats</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-bold text-primary">Enterprise Work</h3>
            <p className="text-lg font-light">3 Years</p>
          </div>

          <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-bold text-primary">Freelance Work</h3>
            <p className="text-lg font-light">4 Years</p>
          </div>

          <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-bold text-primary">Users Served</h3>
            <p className="text-lg font-light">10000+</p>
          </div>
        </div>
      </div>
    </section>
  );
};
