import { useState } from 'react';
import { CheckCircle, HelpCircle, Mail, Phone } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export function Pricing({ navigateTo }) {
  const [billingPeriod, setBillingPeriod] = useState('monthly');
  const navigate= useNavigate();

  const pricingPlans = [
    {
      name: 'Free',
      monthlyPrice: '₹0',
      yearlyPrice: '₹0',
      description: 'Perfect for getting started with basic financial tracking',
      features: [
        'Up to 3 bank accounts',
        'Basic transaction tracking',
        'Monthly reports',
        'Email support',
        'Mobile app access',
        '1 budget category',
      ],
      restrictions: [
        'No AI insights',
        'No investment tracking',
        'Limited to 100 transactions/month',
      ],
      cta: 'Get Started',
      highlighted: false,
    },
    {
      name: 'Starter',
      monthlyPrice: '₹299',
      yearlyPrice: '₹2,999',
      description: 'For individuals who want more control over their finances',
      features: [
        'Up to 10 bank accounts',
        'Advanced transaction tracking',
        'Weekly & monthly reports',
        'Priority email support',
        'Budget alerts',
        '10 budget categories',
        'Unlimited transactions',
        'Export data (CSV)',
      ],
      restrictions: [
        'Basic AI insights only',
        'Limited investment tracking',
      ],
      cta: 'Start Free Trial',
      highlighted: false,
    },
    {
      name: 'Pro',
      monthlyPrice: '₹699',
      yearlyPrice: '₹6,999',
      description: 'Advanced features for serious money managers',
      features: [
        'Unlimited bank accounts',
        'Full AI-powered insights',
        'Real-time alerts & notifications',
        'Complete investment tracking',
        'Priority chat & email support',
        'Unlimited budget categories',
        'Custom reports & analytics',
        'Advanced data export',
        'Receipt scanning (OCR)',
        'Multi-currency support',
        'Goal tracking',
        'Financial forecasting',
      ],
      restrictions: [],
      cta: 'Start Free Trial',
      highlighted: true,
      savingsLabel: billingPeriod === 'yearly' ? 'Save ₹1,389/year' : null,
    },
    {
      name: 'Enterprise',
      monthlyPrice: 'Custom',
      yearlyPrice: 'Custom',
      description: 'Tailored solutions for businesses and teams',
      features: [
        'Everything in Pro',
        'Multi-user access (unlimited)',
        'Role-based permissions',
        'Advanced analytics dashboard',
        'API access',
        'White-label options',
        'Dedicated account manager',
        'Custom integrations',
        'SLA guarantees',
        '24/7 phone support',
        'Onboarding assistance',
        'Quarterly business reviews',
      ],
      restrictions: [],
      cta: 'Contact Sales',
      highlighted: false,
    },
  ];

  const faqs = [
    {
      question: 'How does the free trial work?',
      answer: 'All paid plans come with a 14-day free trial. No credit card required. You can cancel anytime during the trial period without being charged.',
    },
    {
      question: 'Can I change my plan later?',
      answer: 'Yes! You can upgrade or downgrade your plan at any time. When upgrading, you\'ll be charged the prorated amount. When downgrading, the change will take effect at the next billing cycle.',
    },
    {
      question: 'Is my financial data secure?',
      answer: 'Absolutely. We use bank-level 256-bit encryption and comply with international security standards. Your data is stored in secure data centers and we never share it with third parties.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, debit cards, UPI, net banking, and digital wallets. For enterprise plans, we also offer invoice-based billing.',
    },
    {
      question: 'Do you offer refunds?',
      answer: 'Yes, we offer a 30-day money-back guarantee. If you\'re not satisfied with our service within the first 30 days, contact us for a full refund.',
    },
    {
      question: 'How many bank accounts can I connect?',
      answer: 'The Free plan allows up to 3 accounts, Starter allows 10, while Pro and Enterprise plans offer unlimited bank account connections.',
    },
    {
      question: 'Can I export my data?',
      answer: 'Yes, all paid plans include data export features. You can export your transactions, reports, and analytics in CSV, PDF, or Excel formats.',
    },
    {
      question: 'Is there a discount for annual billing?',
      answer: 'Yes! When you choose annual billing, you save approximately 17% compared to monthly billing. Plus, you won\'t have to worry about monthly payments.',
    },
    {
      question: 'What happens when I reach my transaction limit?',
      answer: 'Only the Free plan has a transaction limit (100/month). If you exceed this, you\'ll be prompted to upgrade. All paid plans offer unlimited transactions.',
    },
    {
      question: 'Do you offer student or non-profit discounts?',
      answer: 'Yes! We offer 50% discounts for students and registered non-profit organizations. Contact our support team with valid documentation to apply.',
    },
  ];

  const calculateYearlySavings = (monthly, yearly) => {
    if (monthly === 'Custom' || yearly === 'Custom' || monthly === '₹0') return null;
    const monthlyNum = parseInt(monthly.replace(/[^0-9]/g, ''));
    const yearlyNum = parseInt(yearly.replace(/[^0-9]/g, ''));
    const savings = (monthlyNum * 12) - yearlyNum;
    return savings > 0 ? savings : null;
  };

  return (
    <>
    <Navbar/>
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-100 to-gray-50 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-gray-900 mb-6 text-4xl">Simple, Transparent Pricing</h1>
            <p className="text-gray-600 mb-8">
              Choose the plan that's right for you. All plans include 14-day free trial.
            </p>

            {/* Billing Toggle */}
            <div className="inline-flex items-center bg-white rounded-lg p-1 border border-gray-200">
              <button
                onClick={() => setBillingPeriod('monthly')}
                className={`px-6 py-2 rounded-md transition-colors ${
                  billingPeriod === 'monthly'
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingPeriod('yearly')}
                className={`px-6 py-2 rounded-md transition-colors ${
                  billingPeriod === 'yearly'
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Yearly
                <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                  Save 17%
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`${
                  plan.highlighted
                    ? 'border-gray-900 shadow-2xl ring-2 ring-gray-900 lg:-mt-4 lg:mb-4'
                    : 'border-gray-200'
                } relative`}
              >
                {plan.highlighted && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-gray-900 text-white px-4 py-1 rounded-full text-sm">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <CardContent className="p-8">
                  <h3 className="text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6 min-h-[3rem]">{plan.description}</p>

                  <div className="mb-6">
                    <div className="flex items-baseline mb-1">
                      <span className="text-gray-900">
                        {billingPeriod === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                      </span>
                      {plan.monthlyPrice !== '₹0' && plan.monthlyPrice !== 'Custom' && (
                        <span className="text-gray-600 ml-2">
                          /{billingPeriod === 'monthly' ? 'month' : 'year'}
                        </span>
                      )}
                    </div>
                    {billingPeriod === 'yearly' && plan.savingsLabel && (
                      <div className="text-green-600 text-sm">{plan.savingsLabel}</div>
                    )}
                  </div>

                  <Button
                    onClick={() => navigate(plan.cta === 'Contact Sales' ? '/contact' : '/dashboard')}
                    className={
                      plan.highlighted
                        ? 'w-full bg-gray-900 text-white hover:bg-gray-800 mb-6'
                        : 'w-full border-gray-300 text-gray-700 hover:bg-gray-100 mb-6'
                    }
                    variant={plan.highlighted ? 'default' : 'outline'}
                  >
                    {plan.cta}
                  </Button>

                  <div className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-gray-900 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {plan.restrictions.length > 0 && (
                    <div className="pt-6 border-t border-gray-200">
                      <div className="text-gray-500 text-sm mb-3">Limitations:</div>
                      <div className="space-y-2">
                        {plan.restrictions.map((restriction, i) => (
                          <div key={i} className="text-gray-500 text-sm">
                            • {restriction}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-gray-900 mb-4 text-2xl">Frequently Asked Questions</h2>
              <p className="text-gray-600">
                Everything you need to know about our pricing and plans
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-gray-200 rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left text-gray-900 hover:no-underline text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact for Enterprise */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <Card className="max-w-4xl mx-auto border-gray-200">
            <CardContent className="p-12">
              <div className="text-center mb-8">
                <h2 className="text-gray-900 mb-4">Need an Enterprise Solution?</h2>
                <p className="text-gray-600">
                  Contact our sales team for custom pricing and dedicated support
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                <div className="flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                    <Mail className="h-6 w-6 text-gray-900" />
                  </div>
                  <h3 className="text-gray-900 mb-2">Email Us</h3>
                  <a href="mailto:sales@financeai.com" className="text-gray-600 hover:text-gray-900">
                    sales@financeai.com
                  </a>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                    <Phone className="h-6 w-6 text-gray-900" />
                  </div>
                  <h3 className="text-gray-900 mb-2">Call Us</h3>
                  <a href="tel:+919876543210" className="text-gray-600 hover:text-gray-900">
                    +91 98765 43210
                  </a>
                </div>
              </div>

              <div className="text-center mt-8">
                <Button
                  onClick={() => navigate('/contact')}
                  className="bg-gray-900 text-white hover:bg-gray-800"
                >
                  Request Custom Quote
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
    <Footer/>
    </>
  );
}
