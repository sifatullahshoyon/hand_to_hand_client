import Container from "@/components/shared/Container";
import ScaleLoader from "react-spinners/ClipLoader";

const loading = () => {
  return (
    <Container>
      <div className="flex items-center justify-center p-6 h-screen">
        <ScaleLoader
          color="#7519a3"
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    </Container>
  );
};

export default loading;
