
import { useRef } from 'react';
import BlogPost from './BlogPost';

const BlogSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const blogPosts = [
    {
      title: "Top 5 Budget Destinations for 2025",
      excerpt: "Explore affordable destinations like Bali, Portugal, and Vietnam. These spots offer stunning views, rich culture, and low costs for travelers. Bali's beaches are perfect for relaxation, while Portugal's historic charm comes at a fraction of Western Europe's prices. Vietnam's street food and landscapes are unbeatable for budget adventurers. Plan your 2025 trip now and save big!",
      content: `Traveling on a budget doesn't mean sacrificing adventure. In 2025, these five destinations offer incredible experiences without breaking the bank:

Vietnam – Affordable street food, stunning landscapes, and budget-friendly hostels.

Portugal – Charming cities like Lisbon and Porto offer great value for money.

Bolivia – From the salt flats to Lake Titicaca, adventure awaits at low costs.

Georgia – A hidden gem with affordable wine, hiking, and historic sites.

Indonesia (outside Bali) – Explore Lombok or Yogyakarta for untouched beauty on a budget.

Each destination provides rich culture, delicious cuisine, and wallet-friendly accommodations. Ready to plan your trip?`,
      imageUrl: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "How to Pack Light for a Week-Long Trip",
      excerpt: "Packing light is easier than you think. Stick to versatile clothing: 3 tops, 2 bottoms, and 1 pair of shoes. Use packing cubes to stay organized and roll your clothes to save space. Don't forget a reusable water bottle and a small daypack for excursions. Skip the extras—most hotels have toiletries. Travel smarter, not heavier!",
      content: `Packing light saves you time, money, and stress. Follow these tips to streamline your luggage for a week-long adventure:

✔ Choose a carry-on – Avoid checked baggage fees and long waits.
✔ Versatile clothing – Neutral colors and layers mix and match easily.
✔ Limit shoes – Wear your bulkiest pair and pack one extra.
✔ Use packing cubes – Stay organized and maximize space.
✔ Toiletries in travel sizes – Opt for reusable mini bottles.

With these tricks, you'll travel efficiently and never overpack again!`,
      imageUrl: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Save Money on Flights with These Hacks",
      excerpt: "Book flights on Tuesdays for the best deals, and use incognito mode to avoid price hikes. Be flexible with dates—midweek flights are often cheaper. Sign up for fare alerts on Skyscanner or Google Flights to catch sales. Consider nearby airports for better rates, and always clear your cookies before booking. Fly budget, travel more!",
      content: `Airfare can be a major travel expense, but smart strategies can help you score the best deals:

✈ Be flexible with dates – Flying mid-week is often cheaper.
✈ Use incognito mode – Avoid dynamic pricing based on search history.
✈ Set fare alerts – Apps like Hopper or Google Flights track price drops.
✈ Book early (or last-minute) – Ideal windows vary by destination.
✈ Consider budget airlines – Just watch for hidden fees!

With these tips, you'll fly farther for less.`,
      imageUrl: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    }
  ];
  
  return (
    <section id="blog" ref={sectionRef} className="py-24 bg-gray-50">
      <div className="wf-container max-w-content">
        <div className="text-center mb-16">
          <span className="text-wanderfree-blue font-medium">LATEST ARTICLES</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Budget Travel Insights</h2>
          <p className="text-gray-600 max-w-xl mx-auto">Explore our latest tips and tricks to travel more while spending less.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <BlogPost 
              key={index}
              title={post.title}
              excerpt={post.excerpt}
              content={post.content}
              imageUrl={post.imageUrl}
              delay={index + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
