
import React, { useEffect, useRef } from 'react';

interface MenuItem {
  name: string;
  price: string;
  description: string;
  image: string;
}

const menuItems: MenuItem[] = [
  {
    name: 'Espresso',
    price: '$3',
    description: 'Rich and bold single-shot espresso with a perfect golden crema.',
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    name: 'Latte',
    price: '$4',
    description: 'Smooth espresso with steamed milk and a light layer of foam.',
    image: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80'
  },
  {
    name: 'Cappuccino',
    price: '$4',
    description: 'Equal parts espresso, steamed milk, and silky milk foam.',
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  }
];

const Menu = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    itemRefs.current.forEach(item => {
      if (item) observer.observe(item);
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      itemRefs.current.forEach(item => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);

  return (
    <section id="menu" className="joe-section">
      <div 
        ref={sectionRef}
        className="text-center mb-16 fade-in-section"
      >
        <div className="inline-block px-3 py-1 bg-joe-blue/10 rounded-full mb-4">
          <span className="text-joe-blue text-sm font-medium">Our Offerings</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Discover Our Menu
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our coffee beans are ethically sourced and roasted in-house to ensure the freshest, most flavorful experience with every cup.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {menuItems.map((item, index) => (
          <div
            key={index}
            ref={el => itemRefs.current[index] = el}
            className="menu-card group fade-in-section"
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className="relative h-40 mb-4 overflow-hidden rounded-lg">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <span className="text-lg font-medium text-joe-blue">{item.price}</span>
            </div>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
