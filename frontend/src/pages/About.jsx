import { Target, Heart, Zap, Award, Linkedin } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function About() {
  const milestones = [
    { year: '2020', title: 'Company Founded', description: 'Started with a vision to democratize financial management' },
    { year: '2021', title: 'Launched Beta', description: 'Released beta version to 500 early adopters' },
    { year: '2022', title: 'AI Integration', description: 'Integrated advanced AI for personalized insights' },
    { year: '2023', title: '10K Users', description: 'Reached 10,000 active users milestone' },
    { year: '2024', title: 'Enterprise Launch', description: 'Introduced enterprise solutions for businesses' },
  ];

  const teamMembers = [
    {
      name: 'Arjun Mehta',
      role: 'CEO & Co-founder',
      bio: 'Former VP of Engineering at leading fintech. MIT Computer Science graduate.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjMxNjU5MzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      linkedin: '#',
    },
    {
      name: 'Sneha Kapoor',
      role: 'CTO & Co-founder',
      bio: 'AI researcher with 10+ years in machine learning and financial technology.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjMxNjU5MzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      linkedin: '#',
    },
    {
      name: 'Vikram Singh',
      role: 'Head of Product',
      bio: 'Product leader with experience at Google and Amazon. Stanford MBA.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjMxNjU5MzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      linkedin: '#',
    },
    {
      name: 'Meera Reddy',
      role: 'Head of Design',
      bio: 'Award-winning designer passionate about creating intuitive user experiences.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjMxNjU5MzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      linkedin: '#',
    },
    {
      name: 'Rahul Gupta',
      role: 'Head of Engineering',
      bio: 'Full-stack expert with focus on scalable architecture and security.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjMxNjU5MzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      linkedin: '#',
    },
    {
      name: 'Anjali Sharma',
      role: 'Head of Customer Success',
      bio: 'Customer advocate dedicated to ensuring user success and satisfaction.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjMxNjU5MzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      linkedin: '#',
    },
  ];

  const techStack = [
    { name: 'React', reason: 'Fast, component-based UI development' },
    { name: 'Node.js', reason: 'Scalable backend infrastructure' },
    { name: 'TensorFlow', reason: 'Advanced AI and ML capabilities' },
    { name: 'PostgreSQL', reason: 'Reliable and secure data storage' },
    { name: 'AWS', reason: 'Enterprise-grade cloud infrastructure' },
    { name: 'Redis', reason: 'High-performance caching layer' },
  ];

  const values = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'We exist to make financial management accessible and intelligent for everyone.',
    },
    {
      icon: Heart,
      title: 'User-Centric',
      description: 'Every decision we make prioritizes user needs and experience.',
    },
    {
      icon: Zap,
      title: 'Innovation First',
      description: 'We continuously push boundaries with cutting-edge AI and technology.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in security, accuracy, and reliability.',
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-100 to-gray-50 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-gray-900 mb-6">About FinanceAI</h1>
            <p className="text-gray-600">
              We're on a mission to empower individuals and businesses with intelligent financial tools that make money management effortless and insightful.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-gray-900 mb-6 text-center">Our Vision</h2>
            <p className="text-gray-600 mb-6">
              Founded in 2020, FinanceAI was born from a simple observation: managing personal finances shouldn't be complicated. Traditional financial tools were either too basic or overwhelmingly complex, leaving millions of people struggling to make informed financial decisions.
            </p>
            <p className="text-gray-600 mb-6">
              We envisioned a platform that leverages artificial intelligence to provide personalized insights, automate tedious tasks, and democratize access to sophisticated financial analysis that was previously only available to wealth management firms.
            </p>
            <p className="text-gray-600">
              Today, we serve over 10,000 users across India, helping them save money, build wealth, and achieve financial freedom through intelligent automation and AI-driven recommendations.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="border-gray-200 text-center">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-lg bg-gray-100 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-6 w-6 text-gray-900" />
                  </div>
                  <h3 className="text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">Our Journey</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Key milestones in our growth story
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200" />

              {/* Timeline Items */}
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <Card className="border-gray-200">
                      <CardContent className="p-6">
                        <div className="text-gray-900 mb-2">{milestone.year}</div>
                        <h3 className="text-gray-900 mb-2">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 -translate-x-1/2 h-4 w-4 rounded-full bg-gray-900 border-4 border-white" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The passionate people behind FinanceAI
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-gray-200">
                <CardContent className="p-6">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-square object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-gray-900 mb-1">{member.name}</h3>
                  <div className="text-gray-600 mb-3">{member.role}</div>
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                  <a
                    href={member.linkedin}
                    className="inline-flex items-center text-gray-700 hover:text-gray-900"
                  >
                    <Linkedin className="h-5 w-5 mr-2" />
                    LinkedIn
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">Our Tech Stack</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Built with cutting-edge technologies for reliability and performance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {techStack.map((tech, index) => (
              <Card key={index} className="border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-gray-900 mb-2">{tech.name}</h3>
                  <p className="text-gray-600">{tech.reason}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-white mb-4">
            Want to Join Our Mission?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion for innovation
          </p>
          <a
            href="mailto:careers@financeai.com"
            className="inline-block px-8 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors"
          >
            View Open Positions
          </a>
        </div>
      </section>
    </div>
  );
}
