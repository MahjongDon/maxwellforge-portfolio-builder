
interface FooterProps {
  onNavigate: (section: string) => void;
}

const Footer = ({ onNavigate }: FooterProps) => {
  return (
    <footer className="py-10 bg-gray-100">
      <div className="wf-container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600">© 2025 WanderFree</p>
          </div>
          
          <div className="flex space-x-8">
            <a 
              href="#"
              className="text-gray-600 hover:text-wanderfree-blue transition-colors"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('home');
              }}
            >
              Home
            </a>
            <a 
              href="#blog"
              className="text-gray-600 hover:text-wanderfree-blue transition-colors"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('blog');
              }}
            >
              Blog
            </a>
            <a 
              href="#about"
              className="text-gray-600 hover:text-wanderfree-blue transition-colors"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('about');
              }}
            >
              About
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
