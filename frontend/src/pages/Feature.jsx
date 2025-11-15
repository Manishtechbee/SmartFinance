import { Brain, Wallet, TrendingUp, PieChart, Bell, Shield, Users, RefreshCw, BarChart3, DollarSign, Target, Smartphone, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';

export function Features({ navigateTo }) {
    const navigate= useNavigate();
  const featureCategories = [
    {
      id: 'automation',
      name: 'Finance Automation',
      icon: RefreshCw,
      features: ['Automatic transaction categorization', 'Smart receipt scanning', 'Recurring payment detection', 'Auto-sync with banks'],
    },
    {
      id: 'ai',
      name: 'AI Analytics',
      icon: Brain,
      features: ['Spending pattern analysis', 'Predictive insights', 'Anomaly detection', 'Personalized recommendations'],
    },
    {
      id: 'budgeting',
      name: 'Budget Planning',
      icon: Target,
      features: ['Flexible budget templates', 'Category-wise limits', 'Real-time tracking', 'Smart alerts'],
    },
    {
      id: 'investment',
      name: 'Investment Tracking',
      icon: TrendingUp,
      features: ['Portfolio monitoring', 'Performance analytics', 'Risk assessment', 'Market insights'],
    },
  ];

  const detailedFeatures = [
    {
      icon: Brain,
      title: 'AI-Driven Financial Insights',
      description: 'Our advanced artificial intelligence engine analyzes your spending patterns, income trends, and financial behavior to provide personalized recommendations. The AI learns from your habits and adapts its suggestions to help you make smarter financial decisions.',
      benefits: [
        'Personalized spending insights',
        'Predictive cash flow analysis',
        'Smart savings recommendations',
        'Fraud detection and alerts',
      ],
      image: 'gradient-1',
    },
    {
      icon: Wallet,
      title: 'Automated Transaction Tracking',
      description: 'Say goodbye to manual data entry. Our platform automatically syncs with your bank accounts and credit cards, categorizing every transaction in real-time. Smart algorithms learn to recognize your merchants and spending patterns for accurate categorization.',
      benefits: [
        'Automatic bank synchronization',
        'Intelligent categorization',
        'Receipt scanning with OCR',
        'Multi-currency support',
      ],
      image: 'gradient-2',
    },
    {
      icon: Target,
      title: 'Smart Budget Management',
      description: 'Create flexible budgets that adapt to your lifestyle. Set category-wise limits, track progress in real-time, and receive intelligent alerts when you\'re approaching your limits. Our AI suggests optimal budget allocations based on your income and goals.',
      benefits: [
        'Customizable budget templates',
        'Real-time progress tracking',
        'Smart overspending alerts',
        'Monthly comparison reports',
      ],
      image: 'gradient-3',
    },
    {
      icon: TrendingUp,
      title: 'Investment Portfolio Tracking',
      description: 'Monitor all your investments in one place. Track stocks, mutual funds, real estate, and more. Get AI-powered insights on portfolio performance, risk levels, and rebalancing recommendations to optimize your investment strategy.',
      benefits: [
        'Multi-asset portfolio tracking',
        'Performance analytics',
        'Risk score calculation',
        'Rebalancing suggestions',
      ],
      image: 'gradient-4',
    },
    {
      icon: Bell,
      title: 'Intelligent Notifications',
      description: 'Stay informed with smart alerts that matter. Get notified about unusual spending, bill due dates, budget milestones, and investment opportunities. Customize notification preferences to receive only what\'s relevant to you.',
      benefits: [
        'Budget limit alerts',
        'Bill payment reminders',
        'Unusual activity detection',
        'Goal milestone notifications',
      ],
      image: 'gradient-5',
    },
    {
      icon: Shield,
      title: 'Bank-Level Security',
      description: 'Your financial data is protected with military-grade 256-bit encryption. We use multi-factor authentication, secure data centers, and comply with international security standards. Your information is never shared with third parties.',
      benefits: [
        '256-bit encryption',
        'Multi-factor authentication',
        'Secure data centers',
        'SOC 2 Type II certified',
      ],
      image: 'gradient-6',
    },
  ];

  const comparisonPlans = [
    {
      feature: 'Bank Accounts',
      basic: '3',
      pro: 'Unlimited',
      enterprise: 'Unlimited',
    },
    {
      feature: 'AI Insights',
      basic: false,
      pro: true,
      enterprise: true,
    },
    {
      feature: 'Investment Tracking',
      basic: false,
      pro: true,
      enterprise: true,
    },
    {
      feature: 'Budget Categories',
      basic: '10',
      pro: 'Unlimited',
      enterprise: 'Unlimited',
    },
    {
      feature: 'Multi-user Access',
      basic: false,
      pro: false,
      enterprise: true,
    },
    {
      feature: 'API Access',
      basic: false,
      pro: false,
      enterprise: true,
    },
    {
      feature: 'Priority Support',
      basic: false,
      pro: true,
      enterprise: true,
    },
    {
      feature: 'Custom Reports',
      basic: false,
      pro: true,
      enterprise: true,
    },
    {
      feature: 'Dedicated Account Manager',
      basic: false,
      pro: false,
      enterprise: true,
    },
  ];

  return (
    <>
    <Navbar/>
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-100 to-gray-50 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-gray-900 mb-6 text-2xl">Powerful Features for Complete Financial Control</h1>
            <p className="text-gray-600">
              Everything you need to manage, track, and grow your wealth in one intelligent platform
            </p>
          </div>
        </div>
      </section>

      {/* Feature Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featureCategories.map((category) => (
              <Card key={category.id} className="border-gray-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center mb-4">
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-gray-900 mb-4">{category.name}</h3>
                  <ul className="space-y-2">
                    {category.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-600">
                        <CheckCircle className="h-4 w-4 text-gray-900 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-24">
            {detailedFeatures.map((feature, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-12 items-center`}
              >
                <div className="flex-1">
                  <div className="h-12 w-12 rounded-lg bg-gray-100 flex items-center justify-center mb-6">
                    <feature.icon className="h-6 w-6 text-gray-900" />
                  </div>
                  <h2 className="text-gray-900 mb-4">{feature.title}</h2>
                  <p className="text-gray-600 mb-6">{feature.description}</p>
                  
                  <div className="space-y-3 mb-8">
                    {feature.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-gray-900 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    onClick={() => navigateTo('register')}
                    className="bg-gray-900 text-white hover:bg-gray-800"
                  >
                    Try This Feature
                  </Button>
                </div>

                <div className="flex-1">
                  <div className={`aspect-[4/3] rounded-xl bg-gradient-to-br ${
                    index % 6 === 0 ? 'from-gray-700 to-gray-900' :
                    index % 6 === 1 ? 'from-gray-600 to-gray-800' :
                    index % 6 === 2 ? 'from-gray-500 to-gray-700' :
                    index % 6 === 3 ? 'from-gray-800 to-gray-950' :
                    index % 6 === 4 ? 'from-gray-400 to-gray-600' :
                    'from-gray-700 to-gray-900'
                  } shadow-2xl flex items-center justify-center`}>
                    <feature.icon className="h-24 w-24 text-white/20" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">Compare Plans</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the plan that best fits your needs
            </p>
          </div>

          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-4 text-gray-900">Feature</th>
                  <th className="text-center py-4 px-4 text-gray-900">Basic</th>
                  <th className="text-center py-4 px-4 text-gray-900">Pro</th>
                  <th className="text-center py-4 px-4 text-gray-900">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisonPlans.map((row, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-4 px-4 text-gray-700">{row.feature}</td>
                    <td className="py-4 px-4 text-center text-gray-600">
                      {typeof row.basic === 'boolean' ? (
                        row.basic ? (
                          <CheckCircle className="h-5 w-5 text-gray-900 mx-auto" />
                        ) : (
                          <span className="text-gray-400">—</span>
                        )
                      ) : (
                        row.basic
                      )}
                    </td>
                    <td className="py-4 px-4 text-center text-gray-600">
                      {typeof row.pro === 'boolean' ? (
                        row.pro ? (
                          <CheckCircle className="h-5 w-5 text-gray-900 mx-auto" />
                        ) : (
                          <span className="text-gray-400">—</span>
                        )
                      ) : (
                        row.pro
                      )}
                    </td>
                    <td className="py-4 px-4 text-center text-gray-600">
                      {typeof row.enterprise === 'boolean' ? (
                        row.enterprise ? (
                          <CheckCircle className="h-5 w-5 text-gray-900 mx-auto" />
                        ) : (
                          <span className="text-gray-400">—</span>
                        )
                      ) : (
                        row.enterprise
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-center mt-8">
            <Button
              onClick={() => navigateTo('pricing')}
              className="bg-gray-900 text-white hover:bg-gray-800"
            >
              View Detailed Pricing
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-white mb-4">
            Ready to Experience These Features?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Start your free trial today and discover how FinanceAI can transform your financial management
          </p>
          <Button
            onClick={() => navigate('/dashboard')}
            size="lg"
            className="bg-blue-900 text-white hover:bg-gray-100"
          >
            Start Free Trial
          </Button>
        </div>
      </section>
    </div>
    </>
  );
}
