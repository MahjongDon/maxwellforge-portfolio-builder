
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, ArrowLeft } from 'lucide-react';

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // Mock blog posts data - in a real app, this would come from an API
  const blogPosts = [
    {
      slug: "top-5-budget-destinations-for-2025",
      title: "Top 5 Budget Destinations for 2025",
      excerpt: "Traveling doesn't have to cost a fortune. From the stunning beaches of Vietnam to the historic streets of Budapest, our top 5 budget destinations for 2025 offer incredible experiences without the premium price tag.",
      content: `Traveling on a budget doesn't mean sacrificing adventure. In 2025, these five destinations offer incredible experiences without breaking the bank:

Vietnam – Affordable street food, stunning landscapes, and budget-friendly hostels.

Portugal – Charming cities like Lisbon and Porto offer great value for money.

Bolivia – From the salt flats to Lake Titicaca, adventure awaits at low costs.

Georgia – A hidden gem with affordable wine, hiking, and historic sites.

Indonesia (outside Bali) – Explore Lombok or Yogyakarta for untouched beauty on a budget.

Each destination provides rich culture, delicious cuisine, and wallet-friendly accommodations. Ready to plan your trip?`,
      imageUrl: "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?q=80&w=2670&auto=format&fit=crop",
      date: "March 15, 2025"
    },
    {
      slug: "how-to-pack-light-for-a-week-long-trip",
      title: "How to Pack Light for a Week-Long Trip",
      excerpt: "Mastering the art of packing light can transform your travel experience. This guide breaks down exactly what you need for a week away, from versatile clothing options to compact toiletries.",
      content: `Packing light saves you time, money, and stress. Follow these tips to streamline your luggage for a week-long adventure:

✔ Choose a carry-on – Avoid checked baggage fees and long waits.
✔ Versatile clothing – Neutral colors and layers mix and match easily.
✔ Limit shoes – Wear your bulkiest pair and pack one extra.
✔ Use packing cubes – Stay organized and maximize space.
✔ Toiletries in travel sizes – Opt for reusable mini bottles.

With these tricks, you'll travel efficiently and never overpack again!`,
      imageUrl: "https://images.unsplash.com/photo-1541185934-01b600ea069c?q=80&w=2642&auto=format&fit=crop",
      date: "March 10, 2025"
    },
    {
      slug: "save-money-on-flights-with-these-hacks",
      title: "Save Money on Flights with These Hacks",
      excerpt: "Airline tickets often represent the biggest expense in travel budgets. Learn the insider strategies for finding dramatically cheaper flights, from mastering search engine algorithms to utilizing fare alerts.",
      content: `Airfare can be a major travel expense, but smart strategies can help you score the best deals:

✈ Be flexible with dates – Flying mid-week is often cheaper.
✈ Use incognito mode – Avoid dynamic pricing based on search history.
✈ Set fare alerts – Apps like Hopper or Google Flights track price drops.
✈ Book early (or last-minute) – Ideal windows vary by destination.
✈ Consider budget airlines – Just watch for hidden fees!

With these tips, you'll fly farther for less.`,
      imageUrl: "https://images.unsplash.com/photo-1559066653-edfd1e6bbbd5?q=80&w=2574&auto=format&fit=crop",
      date: "March 5, 2025"
    }
  ];

  useEffect(() => {
    // Find the post with the matching slug
    const foundPost = blogPosts.find(p => p.slug === slug);
    
    if (foundPost) {
      setPost(foundPost);
    }
    
    setLoading(false);
  }, [slug]);

  const handleNavigate = (section: string) => {
    if (section === 'home') {
      navigate('/');
    } else if (section === 'blog') {
      navigate('/');
      setTimeout(() => {
        const blogElement = document.getElementById('blog');
        if (blogElement) {
          blogElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else if (section === 'about') {
      navigate('/');
      setTimeout(() => {
        const aboutElement = document.getElementById('about');
        if (aboutElement) {
          aboutElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const goBack = () => {
    navigate(-1);
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header onNavigate={handleNavigate} />
        <div className="flex-1 flex items-center justify-center flex-col p-8">
          <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
          <p className="mb-6">Sorry, we couldn't find the blog post you're looking for.</p>
          <button onClick={goBack} className="wf-btn flex items-center">
            <ArrowLeft size={16} className="mr-2" />
            Go Back
          </button>
        </div>
        <Footer onNavigate={handleNavigate} />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header onNavigate={handleNavigate} />
      
      <main className="flex-1 py-12">
        <div className="wf-container">
          <button 
            onClick={goBack} 
            className="flex items-center text-wanderfree-blue mb-6 hover:underline transition-all"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to blog
          </button>
          
          <Card className="overflow-hidden border-none shadow-md">
            <div className="aspect-[21/9] w-full relative overflow-hidden">
              <img 
                src={post.imageUrl} 
                alt={post.title}
                className="w-full h-full object-cover" 
              />
            </div>
            
            <CardContent className="p-8">
              <div className="flex items-center text-gray-500 text-sm mb-4">
                <Calendar size={16} className="mr-2" />
                <span>{post.date}</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-6">{post.title}</h1>
              
              <div className="prose prose-lg max-w-none">
                {post.content.split('\n\n').map((paragraph: string, index: number) => (
                  <p key={index} className="mb-4">{paragraph}</p>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

export default BlogPostPage;
