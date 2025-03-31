
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Button from "@/components/Button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-revup-dark">
      <div className="text-center px-4 max-w-md mx-auto">
        <div className="inline-block mb-8 text-revup-red font-display">
          <span className="text-9xl font-bold">404</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">Page Not Found</h1>
        <p className="text-revup-gray text-lg mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button href="/" variant="primary" size="lg">
          Return to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
