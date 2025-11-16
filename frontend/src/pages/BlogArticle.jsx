import { Calendar, User, Clock, Share2, Facebook, Twitter, Linkedin, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useNavigate } from 'react-router-dom';

export function BlogArticle({ blogId, navigateTo }) {
  const navigate=useNavigate();
  // Mock article data - in a real app, this would be fetched based on blogId
  const article = {
    title: '10 Smart Ways to Save Money in 2024',
    author: 'Priya Sharma',
    date: 'November 10, 2024',
    readTime: '8 min read',
    category: 'Savings',
    coverImage: 'https://images.unsplash.com/photo-1748609160056-7b95f30041f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBkYXNoYm9hcmQlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzYzMTEwNTk4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    content: `
      <p>In today's fast-paced economy, finding ways to save money has never been more important. Whether you're saving for a major purchase, building an emergency fund, or planning for retirement, these ten strategies will help you maximize your savings in 2024.</p>

      <h2>1. Automate Your Savings</h2>
      <p>The easiest way to save money is to make it automatic. Set up automatic transfers from your checking account to your savings account on payday. This "pay yourself first" approach ensures you save before you have a chance to spend.</p>

      <h2>2. Track Your Spending</h2>
      <p>You can't manage what you don't measure. Use a budgeting app like FinanceAI to track every rupee you spend. This awareness alone can help you identify unnecessary expenses and redirect that money to savings.</p>

      <h2>3. Cancel Unused Subscriptions</h2>
      <p>Review your bank statements and identify subscriptions you no longer use. That gym membership you haven't visited in months? The streaming service you forgot about? These small expenses add up quickly.</p>

      <h2>4. Cook at Home More Often</h2>
      <p>Eating out is convenient but expensive. By cooking at home just a few more times per week, you could save thousands of rupees monthly. Meal planning on weekends can make this easier.</p>

      <h2>5. Use the 24-Hour Rule</h2>
      <p>Before making any non-essential purchase, wait 24 hours. This cooling-off period helps you distinguish between impulse buys and things you genuinely need.</p>

      <h2>6. Negotiate Your Bills</h2>
      <p>Don't be afraid to negotiate with service providers. Call your internet, phone, and insurance companies annually to ask for better rates. Competition is fierce, and they often have promotions available.</p>

      <h2>7. Buy Generic Brands</h2>
      <p>Generic or store brands are often just as good as name brands but cost significantly less. This applies to everything from groceries to medications.</p>

      <h2>8. Maximize Credit Card Rewards</h2>
      <p>If you use credit cards, make sure you're maximizing rewards and cashback. Choose cards that align with your spending patterns, but always pay the full balance to avoid interest charges.</p>

      <h2>9. Create a Savings Challenge</h2>
      <p>Make saving fun with a challenge. Try the 52-week challenge where you save an increasing amount each week, or challenge yourself to a no-spend month on discretionary items.</p>

      <h2>10. Invest in Energy Efficiency</h2>
      <p>While there's an upfront cost, investing in energy-efficient appliances, LED bulbs, and proper insulation can significantly reduce your monthly utility bills over time.</p>

      <h2>Conclusion</h2>
      <p>Saving money doesn't mean sacrificing quality of life. It's about being intentional with your spending and making small changes that add up to significant savings over time. Start with one or two of these strategies and gradually incorporate more as they become habits.</p>

      <p>Remember, the goal isn't perfection but progress. Every rupee saved is a step toward financial security and freedom.</p>
    `,
  };

  const relatedArticles = [
    {
      id: 2,
      title: 'Understanding Investment Risk',
      category: 'Investing',
      image: 'https://images.unsplash.com/photo-1748609160056-7b95f30041f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBkYXNoYm9hcmQlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzYzMTEwNTk4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 3,
      title: 'How AI is Transforming Personal Finance',
      category: 'Technology',
      image: 'https://images.unsplash.com/photo-1748609160056-7b95f30041f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBkYXNoYm9hcmQlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzYzMTEwNTk4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 4,
      title: 'Creating a Budget That Actually Works',
      category: 'Budgeting',
      image: 'https://images.unsplash.com/photo-1748609160056-7b95f30041f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBkYXNoYm9hcmQlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzYzMTEwNTk4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Back Button */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 lg:px-8 py-4">
          <Button
            variant="ghost"
            onClick={() => navigate('/blog')}
            className="text-gray-700 hover:text-gray-900"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Button>
        </div>
      </div>

      {/* Article Header */}
      <article className="py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Meta Info */}
            <div className="mb-6">
              <Badge className="bg-gray-900 text-white mb-4">{article.category}</Badge>
              <h1 className="text-gray-900 mb-6">{article.title}</h1>
              
              <div className="flex items-center gap-6 text-gray-600">
                <div className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  <span>{article.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <span>{article.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span>{article.readTime}</span>
                </div>
              </div>
            </div>

            {/* Cover Image */}
            <div className="aspect-video rounded-xl overflow-hidden mb-8">
              <ImageWithFallback
                src={article.coverImage}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Share Buttons */}
            <div className="flex items-center gap-3 mb-8 pb-8 border-b border-gray-200">
              <span className="text-gray-600">Share:</span>
              <Button variant="outline" size="sm" className="border-gray-300">
                <Facebook className="h-4 w-4 mr-2" />
                Facebook
              </Button>
              <Button variant="outline" size="sm" className="border-gray-300">
                <Twitter className="h-4 w-4 mr-2" />
                Twitter
              </Button>
              <Button variant="outline" size="sm" className="border-gray-300">
                <Linkedin className="h-4 w-4 mr-2" />
                LinkedIn
              </Button>
            </div>

            {/* Article Content */}
            <div 
              className="prose prose-gray max-w-none mb-12"
              dangerouslySetInnerHTML={{ __html: article.content }}
              style={{
                color: '#4b5563',
                lineHeight: '1.75',
              }}
            />

            {/* Author Bio */}
            <Card className="border-gray-200 bg-gray-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjMxNjU5MzN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt={article.author}
                    className="h-16 w-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-gray-900 mb-2">About {article.author}</h3>
                    <p className="text-gray-600 mb-3">
                      Priya is a certified financial planner with over 10 years of experience helping individuals and families achieve their financial goals. She specializes in budgeting, savings strategies, and financial literacy.
                    </p>
                    <div className="flex gap-2">
                      <a href="#" className="text-gray-600 hover:text-gray-900">
                        <Twitter className="h-5 w-5" />
                      </a>
                      <a href="#" className="text-gray-600 hover:text-gray-900">
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-gray-900 mb-8">Related Articles</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {relatedArticles.map((post) => (
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
                    <h3 className="text-gray-900">{post.title}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
