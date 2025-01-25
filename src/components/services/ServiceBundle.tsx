import { HiCheckCircle } from "react-icons/hi2";
import { ServiceBundle as ServiceBundleType } from "../../models/service";

export const ServiceBundle: React.FC<{
  bundle: ServiceBundleType;
}> = ({ bundle }) => {
  return (
    <div className="pt-16 lg:px-8 lg:pt-0 xl:px-14" id={bundle.id}>
      <h3 className="text-base/7 font-semibold text-gray-900">
        {bundle.title}
      </h3>
      <p className="mt-6 flex items-baseline gap-x-1">
        <span className="text-5xl font-semibold tracking-tight text-gray-900">
          ${bundle.price}
        </span>
        {bundle.startingAt ? (
          <span className="text-sm/6 font-semibold text-gray-700">
            starting at
          </span>
        ) : (
          <span className="text-sm/6 font-semibold text-gray-700">
            One-time
          </span>
        )}
      </p>
      <p>
        {bundle.startingAt ? (
          <p
            className="text-sm/6 font-semibold text-gray-700"
            data-testid="payment-options"
          >
            Payment options available
          </p>
        ) : (
          <p
            className="text-sm/6 font-semibold text-gray-700"
            data-testid="payment-options"
          >
            Two Payment of ${bundle.price / 2} available
          </p>
        )}
      </p>
      <button className="mt-10 rounded-md bg-secondary-600 px-3 py-2 text-center text-sm/6 font-semibold text-white shadow-sm hover:bg-secondary-500 transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-secondary-400 focus-visible:outline-offset-2">
        Request {bundle.title}
      </button>
      <p className="mt-10 text-sm/6 font-semibold text-gray-900">
        {bundle.description}
      </p>
      <ul className="mt-6 space-y-3 ">
        {bundle.points.map((point, index) => (
          <li key={`point-${index}`} className="flex items-start gap-x-2">
            <div className="pt-1">
              <HiCheckCircle className="text-secondary-600 size-4" />
            </div>
            <div className="text-sm/6 text-gray-600">
              <h3 className="font-semibold">{point.title}</h3>
              <p>{point.description}</p>
            </div>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-gray-700 font-medium">{bundle.target}</p>
    </div>
  );
};
