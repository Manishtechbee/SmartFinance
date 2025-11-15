import { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import { ArrowRight, Brain, Wallet, Bell, TrendingUp, Users, Shield, CheckCircle, ChevronLeft, ChevronRight, Star, MessageCircle, Mail, Instagram, Twitter, Linkedin } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { CardContent } from '../components/ui/CardContent';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import pic from "../assets/hero.jpg"
import Footer from '../components/layout/Footer';

export default function Home({ navigateTo }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [pricingMode, setPricingMode] = useState('monthly'); // monthly/yearly toggle
  const [faqOpen, setFaqOpen] = useState(null);
  const navigate= useNavigate();

  // Auto-slide demo carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % demoScreenshots.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    { icon: Brain, title: 'AI-Driven Insights', description: 'Get personalized financial recommendations powered by advanced machine learning algorithms.' },
    { icon: Wallet, title: 'Full Finance Automation', description: 'Automatically categorize transactions and track your spending across all accounts.' },
    { icon: Bell, title: 'Smart Budget Alerts', description: 'Receive intelligent notifications when you\'re approaching your budget limits.' },
    { icon: TrendingUp, title: 'Investment Tracking', description: 'Monitor your portfolio performance and get AI-powered investment suggestions.' },
    { icon: Users, title: 'Collaborative Tools', description: 'Share budgets and financial goals with family members or business partners.' },
    { icon: Shield, title: 'Bank-Level Security', description: 'Your data is protected with 256-bit encryption and multi-factor authentication.' },
  ];

  const demoScreenshots = [
    { title: 'Dashboard Overview', image: 'https://images.unsplash.com/photo-1748609160056-7b95f30041f0?crop=entropy&cs=tinysrgb&fit=max&w=1080' },
    { title: 'Transaction Analysis', image: 'https://images.unsplash.com/photo-1748609160056-7b95f30041f0?crop=entropy&cs=tinysrgb&fit=max&w=1080' },
    { title: 'Budget Planning', image: 'https://images.unsplash.com/photo-1748609160056-7b95f30041f0?crop=entropy&cs=tinysrgb&fit=max&w=1080' },
  ];

  const howItWorks = [
    { step: '01', title: 'Connect Accounts', description: 'Securely link your bank accounts, credit cards, and investment portfolios in minutes.', icon: Wallet },
    { step: '02', title: 'Analyze Insights', description: 'Our AI analyzes your financial data to identify patterns and opportunities.', icon: Brain },
    { step: '03', title: 'Smart Recommendations', description: 'Receive personalized advice to optimize spending, savings, and investments.', icon: TrendingUp },
  ];

  const testimonials = [
    { name: 'Rajesh Kumar', role: 'Entrepreneur', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&w=1080', feedback: 'FinanceAI transformed how I manage my business finances. The AI insights helped me save over ₹5 lakhs this year!', rating: 5 },
    { name: 'Priya Sharma', role: 'Software Engineer', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&w=1080', feedback: 'The automated budget tracking is incredible. I finally have control over my spending habits.', rating: 5 },
    { name: 'Amit Patel', role: 'Doctor', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&w=1080', feedback: 'Best financial tool I\'ve ever used. The investment tracking feature is a game-changer.', rating: 5 },
  ];

  const pricingPlans = [
    { name: 'Basic', monthly: '₹0', yearly: '₹0', period: 'Forever Free', features: ['Up to 3 bank accounts','Basic transaction tracking','Monthly reports','Email support'], cta: 'Get Started', highlighted: false },
    { name: 'Pro', monthly: '₹499', yearly: '₹4990', period: 'per month', features: ['Unlimited bank accounts','AI-powered insights','Real-time alerts','Investment tracking','Priority support','Custom reports'], cta: 'Start Free Trial', highlighted: true },
    { name: 'Enterprise', monthly: 'Custom', yearly: 'Custom', period: 'Contact Us', features: ['Everything in Pro','Multi-user access','Advanced analytics','API access','Dedicated account manager','Custom integrations'], cta: 'Contact Sales', highlighted: false },
  ];

  const faq = [
    { question: 'Is FinanceAI secure?', answer: 'Yes! All data is encrypted with bank-level security and we use multi-factor authentication.' },
    { question: 'Can I link multiple bank accounts?', answer: 'Absolutely, you can link unlimited accounts depending on your plan.' },
    { question: 'Is there a free trial?', answer: 'Yes, our Pro plan comes with a 7-day free trial without requiring a credit card.' },
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % demoScreenshots.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + demoScreenshots.length) % demoScreenshots.length);

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-100 to-gray-50 py-20 lg:py-32"
      style={{
    backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.4)), url(${pic})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
      >
        <div className="absolute inset-0 bg-grid-gray-900/[0.02] bg-[size:40px_40px]" />
        <div className="container mx-auto px-4 lg:px-8 relative text-center">
          <h1 className="text-5xl font-bold text-gray-100 mb-4">
            Smart Finance Management
            <br />
            <span className="bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
              Powered by AI
            </span>
          </h1>
          <p className="text-gray-100 mb-8 max-w-2xl mx-auto">
            Take control of your financial future with AI-driven insights, automated tracking, and intelligent recommendations. Trusted by 10,000+ users.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button onClick={() => navigate('/dashboard')} size="lg" className="bg-gray-900 text-white hover:bg-slate-800">
              Get Started Free <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button onClick={() => navigate('/features')} size="lg" variant="outline" className="border-gray-500 bg-gray-50/10 text-white hover:bg-gray-500">
              Explore Features
            </Button>
          </div>
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div><div className="text-gray-300 mb-1">10,000+</div><div className="text-gray-100">Active Users</div></div>
            <div><div className="text-gray-300 mb-1">98%</div><div className="text-gray-100">Accuracy</div></div>
            <div><div className="text-gray-300 mb-1">₹2 Cr+</div><div className="text-gray-100">Money Saved</div></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 text-center mb-16">
          <h2 className="text-gray-900 mb-4 text-3xl font-bold">Why Choose FinanceAI</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Powerful features designed to give you complete control over your financial life.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto px-4 lg:px-8">
          {features.map((f, idx) => (
            <Card key={idx} className="border-gray-200 hover:shadow-xl transition-shadow transform hover:-translate-y-2 duration-300">
              <CardContent className="p-6 text-center">
                <div className="h-12 w-12 rounded-lg bg-gray-100 flex items-center justify-center mb-4 hover:bg-gray-200 transition">
                  <f.icon className="h-6 w-6 text-gray-900" />
                </div>
                <h3 className="text-gray-900 mb-2 font-semibold">{f.title}</h3>
                <p className="text-gray-600 text-sm">{f.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Demo Carousel */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8 text-center mb-16">
          <h2 className="text-gray-900 mb-4 text-3xl font-bold">See It In Action</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Explore our intuitive dashboard and powerful features.</p>
        </div>
        <div className="max-w-5xl mx-auto relative rounded-xl overflow-hidden shadow-2xl bg-white">
          <div className="aspect-video relative">
            <ImageWithFallback src={demoScreenshots[currentSlide].image} alt={demoScreenshots[currentSlide].title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-white mb-2 font-semibold">{demoScreenshots[currentSlide].title}</h3>
            </div>
          </div>
          <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-lg"><ChevronLeft className="h-6 w-6 text-gray-900" /></button>
          <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-lg"><ChevronRight className="h-6 w-6 text-gray-900" /></button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {demoScreenshots.map((_, i) => (
              <button key={i} onClick={() => setCurrentSlide(i)} className={`h-2 w-2 rounded-full transition-all ${i === currentSlide ? 'bg-white w-8' : 'bg-white/50'}`} />
            ))}
          </div>
        </div>
        <div className="text-center mt-8">
          <Button onClick={() => navigate('/dashboard')} variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-100">View Live Demo</Button>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 text-center mb-16">
          <h2 className="text-gray-900 mb-4 text-3xl font-bold">How It Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Get started in three simple steps</p>
        </div>
        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto relative">
          {howItWorks.map((step, i) => (
            <div key={i} className="text-center relative">
              <div className="h-16 w-16 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 text-white flex items-center justify-center mx-auto mb-6">
                <step.icon className="h-8 w-8" />
              </div>
              <div className="text-gray-400 mb-2">{step.step}</div>
              <h3 className="text-gray-900 mb-3 font-semibold">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
              {i < howItWorks.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gray-200">
                  <ArrowRight className="absolute right-0 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center mb-16">
          <h2 className="text-white mb-4 text-3xl font-bold">Trusted by Thousands</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">See what our users have to say about FinanceAI</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <Card key={i} className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">{[...Array(t.rating)].map((_, idx) => <Star key={idx} className="h-5 w-5 fill-yellow-500 text-yellow-500" />)}</div>
                <p className="text-gray-300 mb-6">"{t.feedback}"</p>
                <div className="flex items-center gap-3">
                  <ImageWithFallback src={t.image} alt={t.name} className="h-12 w-12 rounded-full object-cover" />
                  <div>
                    <div className="text-white">{t.name}</div>
                    <div className="text-gray-400">{t.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8 text-center mb-16">
          <h2 className="text-gray-900 mb-4 text-3xl font-bold">Simple, Transparent Pricing</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Choose the plan that's right for you</p>
          <div className="flex justify-center gap-4 mt-6 mb-12">
            <Button onClick={() => setPricingMode('monthly')} variant={pricingMode === 'monthly' ? 'default' : 'outline'}>Monthly</Button>
            <Button onClick={() => setPricingMode('yearly')} variant={pricingMode === 'yearly' ? 'default' : 'outline'}>Yearly</Button>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, idx) => (
            <Card key={idx} className={`${plan.highlighted ? 'border-gray-900 shadow-xl ring-2 ring-gray-900' : 'border-gray-200'}`}>
              <CardContent className="p-8 text-center">
                {plan.highlighted && <div className="inline-block px-3 py-1 rounded-full bg-gray-900 text-white text-sm mb-4">Most Popular</div>}
                <h3 className="text-gray-900 mb-2 font-semibold">{plan.name}</h3>
                <div className="mb-1"><span className="text-gray-900">{pricingMode === 'monthly' ? plan.monthly : plan.yearly}</span></div>
                <div className="text-gray-600 mb-6">{plan.period}</div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-gray-900 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{f}</span>
                    </li>
                  ))}
                </ul>
                <Button onClick={() => navigate('/pricing')} className={plan.highlighted ? 'w-full bg-gray-900 text-white hover:bg-gray-800' : 'w-full border-gray-300 text-gray-700 hover:bg-gray-100'} variant={plan.highlighted ? 'default' : 'outline'}>
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 text-center mb-16">
          <h2 className="text-gray-900 mb-4 text-3xl font-bold">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">Answers to common questions about FinanceAI</p>
          <div className="max-w-3xl mx-auto">
            {faq.map((q, i) => (
              <div key={i} className="border-b border-gray-200 py-4 cursor-pointer" onClick={() => setFaqOpen(faqOpen === i ? null : i)}>
                <div className="flex justify-between items-center text-gray-900 font-semibold">
                  {q.question}
                  <span>{faqOpen === i ? '-' : '+'}</span>
                </div>
                {faqOpen === i && <p className="mt-2 text-gray-600 text-sm">{q.answer}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-700 to-gray-900 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to take control of your finances?</h2>
        <p className="mb-8 text-gray-200 max-w-2xl mx-auto">Start your free trial today and experience the power of AI-driven finance management.</p>
        <Button onClick={() => navigate('/register')} size="lg" className="bg-gray-900 text-white hover:bg-slate-900 ">
          Get Started Free
        </Button>
      </section>

      <Footer/>
    </div>
  );
}
