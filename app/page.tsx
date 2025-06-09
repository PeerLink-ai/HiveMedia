import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  BarChart3,
  TrendingUp,
  Users,
  Zap,
  Shield,
  Smartphone,
  Youtube,
  Instagram,
  Music,
  Star,
  ArrowRight,
  Sparkles,
  Play,
} from "lucide-react"

const features = [
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Get detailed insights into your content performance across all platforms with real-time data.",
  },
  {
    icon: TrendingUp,
    title: "Growth Tracking",
    description: "Monitor your audience growth and engagement trends over time with predictive insights.",
  },
  {
    icon: Users,
    title: "Audience Insights",
    description: "Understand your audience demographics, behavior patterns, and optimal posting times.",
  },
  {
    icon: Zap,
    title: "AI Recommendations",
    description: "Get personalized suggestions to optimize your content strategy and boost engagement.",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Your data is protected with enterprise-grade security measures and privacy controls.",
  },
  {
    icon: Smartphone,
    title: "Mobile Ready",
    description: "Access your analytics anywhere with our mobile-optimized platform and native apps.",
  },
]

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "YouTube Creator",
    content: "Hive helped me increase my engagement by 150% in just 3 months! The AI recommendations are spot-on.",
    avatar: "/placeholder.svg?height=40&width=40",
    subscribers: "2.3M subscribers",
  },
  {
    name: "Mike Chen",
    role: "Instagram Influencer",
    content: "The thumbnail analysis feature is incredible. My click-through rates have never been better.",
    avatar: "/placeholder.svg?height=40&width=40",
    subscribers: "890K followers",
  },
  {
    name: "Emma Davis",
    role: "TikTok Creator",
    content: "Finally, all my analytics in one place. Hive is a complete game-changer for content creators!",
    avatar: "/placeholder.svg?height=40&width=40",
    subscribers: "1.5M followers",
  },
]

const stats = [
  { number: "50K+", label: "Active Creators" },
  { number: "2.5B+", label: "Content Analyzed" },
  { number: "150%", label: "Avg. Growth Increase" },
  { number: "99.9%", label: "Uptime" },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-hive-gradient rounded-xl flex items-center justify-center shadow-lg">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold hive-gradient-text">Hive</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#features" className="text-gray-600 hover:text-hive-600 font-medium transition-colors">
                Features
              </Link>
              <Link href="#pricing" className="text-gray-600 hover:text-hive-600 font-medium transition-colors">
                Pricing
              </Link>
              <Link href="#testimonials" className="text-gray-600 hover:text-hive-600 font-medium transition-colors">
                Reviews
              </Link>
              <Link href="/auth/signin">
                <Button variant="ghost" className="text-gray-600 hover:text-hive-600">
                  Sign In
                </Button>
              </Link>
              <Link href="/auth/signup">
                <Button className="bg-hive-gradient hover:shadow-lg hover:shadow-hive-500/25 text-white rounded-xl">
                  Get Started Free
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-hive-50 via-orange-50 to-red-50 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-hive-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-hive-400/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-hive-300/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Badge variant="secondary" className="mb-6 bg-hive-100 text-hive-700 border-hive-200 px-4 py-2 rounded-full">
            🚀 Now supporting YouTube, Instagram & TikTok
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            Supercharge Your
            <span className="hive-gradient-text block mt-2">Content Strategy</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Hive empowers content creators with powerful analytics, AI-driven insights, and optimization tools to grow
            their audience and boost engagement across all platforms.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link href="/auth/signup">
              <Button
                size="lg"
                className="bg-hive-gradient hover:shadow-xl hover:shadow-hive-500/25 text-white px-8 py-4 text-lg rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-hive-200 hover:border-hive-300 hover:bg-hive-50 px-8 py-4 text-lg rounded-xl"
            >
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </Button>
          </div>

          {/* Platform Icons */}
          <div className="flex justify-center items-center space-x-12 mb-16">
            <div className="flex items-center space-x-3 text-gray-600 bg-white/60 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-lg">
              <Youtube className="w-8 h-8 text-red-500" />
              <span className="font-semibold">YouTube</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-600 bg-white/60 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-lg">
              <Instagram className="w-8 h-8 text-pink-500" />
              <span className="font-semibold">Instagram</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-600 bg-white/60 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-lg">
              <Music className="w-8 h-8 text-black" />
              <span className="font-semibold">TikTok</span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold hive-gradient-text mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Everything you need to <span className="hive-gradient-text">succeed</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive tools and insights to help you create better content and grow your audience faster than ever
              before.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card
                  key={index}
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hive-card-hover bg-white/80 backdrop-blur-sm"
                >
                  <CardHeader className="pb-4">
                    <div className="w-14 h-14 bg-hive-gradient rounded-2xl flex items-center justify-center mb-6 shadow-lg hive-glow">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-gray-600 leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-gradient-to-br from-hive-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Loved by <span className="hive-gradient-text">creators worldwide</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join thousands of content creators who trust Hive to grow their audience and optimize their content
              strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-xl bg-white/80 backdrop-blur-sm hive-card-hover">
                <CardContent className="pt-8">
                  <div className="flex items-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 text-lg leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-hive-gradient rounded-full mr-4"></div>
                    <div>
                      <div className="font-bold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                      <div className="text-xs text-hive-600 font-medium">{testimonial.subscribers}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-hive-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to grow your audience?</h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Join thousands of creators who use Hive to optimize their content and boost engagement. Start your free
            trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/signup">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-hive-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-xl font-semibold shadow-lg"
              >
                Start Your Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg rounded-xl"
            >
              Schedule Demo
            </Button>
          </div>
          <p className="text-white/80 text-sm mt-6">No credit card required • 14-day free trial • Cancel anytime</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-hive-gradient rounded-xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">Hive</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Empowering content creators with powerful analytics and insights to grow their audience.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-lg">Product</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    API
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Integrations
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-lg">Support</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Status
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Community
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 text-lg">Company</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Press
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Hive. All rights reserved. Made with ❤️ for content creators.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
