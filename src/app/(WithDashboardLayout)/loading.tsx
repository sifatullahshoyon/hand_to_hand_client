import LoadingSpinner from "@/components/ui/core/loading";

const loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <LoadingSpinner />
    </div>
  );
};

export default loading;
