import { ImSpinner } from "react-icons/im";

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex-1 flex items-center justify-center">
      <ImSpinner className="animate-spin text-4xl text-primary-500 ease-in-out text-white" />
    </div>
  );
};
export default LoadingSpinner;
