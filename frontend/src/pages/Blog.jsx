import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Input } from '../components/ui/input';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export function Blog({ navigateTo }) {
  const featuredPost = {
    id: 1,
    title: '10 Smart Ways to Save Money in 2024',
    excerpt: 'Discover proven strategies to boost your savings and build wealth in the new year.',
    author: 'Priya Sharma',
    date: 'November 10, 2024',
    category: 'Savings',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1748609160056-7b95f30041f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBkYXNoYm9hcmQlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzYzMTEwNTk4fDA&ixlib=rb-4.1.0&q=80&w=1080',
  };

  const blogPosts = [
    {
      id: 2,
      title: 'Understanding Investment Risk: A Beginner\'s Guide',
      excerpt: 'Learn how to assess and manage risk in your investment portfolio.',
      author: 'Rahul Gupta',
      date: 'November 8, 2024',
      category: 'Investing',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1748609160056-7b95f30041f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBkYXNoYm9hcmQlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzYzMTEwNTk4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 3,
      title: 'How AI is Transforming Personal Finance',
      excerpt: 'Explore the role of artificial intelligence in modern money management.',
      author: 'Sneha Kapoor',
      date: 'November 5, 2024',
      category: 'Technology',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1748609160056-7b95f30041f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBkYXNoYm9hcmQlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzYzMTEwNTk4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 4,
      title: 'Creating a Budget That Actually Works',
      excerpt: 'Step-by-step guide to building and sticking to a realistic budget.',
      author: 'Amit Patel',
      date: 'November 3, 2024',
      category: 'Budgeting',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1748609160056-7b95f30041f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBkYXNoYm9hcmQlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzYzMTEwNTk4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 5,
      title: 'Tax Planning Strategies for 2024',
      excerpt: 'Maximize your tax savings with these expert tips and strategies.',
      author: 'Meera Reddy',
      date: 'November 1, 2024',
      category: 'Tax',
      readTime: '9 min read',
      image: 'https://images.unsplash.com/photo-1748609160056-7b95f30041f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBkYXNoYm9hcmQlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzYzMTEwNTk4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 6,
      title: 'Building an Emergency Fund: Where to Start',
      excerpt: 'Essential steps to create a financial safety net for unexpected expenses.',
      author: 'Vikram Singh',
      date: 'October 28, 2024',
      category: 'Savings',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1748609160056-7b95f30041f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBkYXNoYm9hcmQlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzYzMTEwNTk4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 7,
      title: 'Cryptocurrency: Should You Invest?',
      excerpt: 'An unbiased look at the pros and cons of crypto investments.',
      author: 'Anjali Sharma',
      date: 'October 25, 2024',
      category: 'Investing',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1748609160056-7b95f30041f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBkYXNoYm9hcmQlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzYzMTEwNTk4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const categories = ['All', 'Savings', 'Investing', 'Budgeting', 'Tax', 'Technology'];

  return (
    <>
    <Navbar/>
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-100 to-gray-50 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-gray-900 mb-6 text-4xl">Financial Insights & Tips</h1>
            <p className="text-gray-600">
              Expert advice, guides, and insights to help you make smarter financial decisions
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <Card 
            className="max-w-5xl mx-auto border-gray-200 overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
            onClick={() => navigateTo('blog-article', featuredPost.id)}
          >
            <div className="grid lg:grid-cols-2">
              <div className="aspect-video lg:aspect-square">
                <ImageWithFallback
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-8 flex flex-col justify-center">
                <Badge className="w-fit mb-4 bg-gray-900 text-white">Featured</Badge>
                <h2 className="text-gray-900 mb-4">{featuredPost.title}</h2>
                <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                
                <div className="flex items-center gap-4 text-gray-600 text-sm mb-6">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>

                <Button className="w-fit bg-gray-900 text-white hover:bg-gray-800">
                  Read Article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="pb-8">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex gap-3 justify-center flex-wrap max-w-4xl mx-auto">
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-900 hover:text-white"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card
                key={post.id}
                className="border-gray-200 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => navigateTo('blog-article', post.id)}
              >
                <div className="aspect-video">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <Badge variant="secondary" className="mb-3">
                    {post.category}
                  </Badge>
                  <h3 className="text-gray-900 mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  
                  <div className="flex items-center gap-4 text-gray-500 text-sm">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-2 mt-12">
            <Button variant="outline" className="border-gray-300 text-gray-700">
              Previous
            </Button>
            <Button variant="outline" className="bg-gray-900 text-white border-gray-900">
              1
            </Button>
            <Button variant="outline" className="border-gray-300 text-gray-700">
              2
            </Button>
            <Button variant="outline" className="border-gray-300 text-gray-700">
              3
            </Button>
            <Button variant="outline" className="border-gray-300 text-gray-700">
              Next
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          
          <h2 className="text-white mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Get the latest financial tips and insights delivered to your inbox every week
          </p>
          <Button className="bg-gary-900 text-white text-2xl hover:bg-gray-100">
              Subscribe
            </Button>
         
        </div>
      </section>
    </div>
    <Footer/>

    </>
  );
}
