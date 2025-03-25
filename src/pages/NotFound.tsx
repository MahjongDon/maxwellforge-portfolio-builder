
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <h1 className="text-6xl md:text-8xl font-bold mb-6">404</h1>
      <p className="text-xl md:text-2xl text-primary/70 mb-10 text-center">
        The page you're looking for doesn't exist.
      </p>
      <Link 
        to="/" 
        className="inline-block bg-primary text-white px-6 py-3 hover:bg-black transition-colors duration-300"
      >
        Return Home
      </Link>
    </div>
  );
};

export default NotFound;
