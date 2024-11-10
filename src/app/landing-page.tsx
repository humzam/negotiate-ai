import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col dark bg-gray-900 text-white">
      <header className="py-6 px-4 sm:px-6 lg:px-8 border-b border-gray-800">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            NegotiateAI
          </Link>
          <nav className="hidden sm:flex space-x-8">
            <Link href="#features" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              How It Works
            </Link>
            <Link href="#pricing" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Pricing
            </Link>
          </nav>
          <Button variant="secondary" className="hidden sm:inline-flex">
            Get Started
          </Button>
        </div>
      </header>

      <main className="flex-grow">
        <section className="py-20 sm:py-32">
          <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Negotiate Your Worth with AI
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Get a professionally crafted email to negotiate your job offer, salary, or promotion. Powered by AI, tailored for you.
            </p>
            <Button size="lg">
              Start Negotiating
            </Button>
          </div>
        </section>

        <section id="features" className="py-20 bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Why Choose NegotiateAI</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "AI-Powered", description: "Leverage cutting-edge AI to craft persuasive negotiation emails" },
                { title: "Customized", description: "Tailored responses based on your specific situation and goals" },
                { title: "Professional", description: "Receive a polished, ready-to-send email in minutes" },
              ].map((feature, index) => (
                <div key={index} className="bg-gray-700 p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-white">How It Works</h2>
              <ol className="text-left text-gray-300 mb-8 space-y-4">
                <li>1. Input your offer details and negotiation goals</li>
                <li>2. Our AI analyzes your information and market data</li>
                <li>3. Receive a professionally crafted negotiation email</li>
                <li>4. Review, personalize, and send your response</li>
              </ol>
              <Button variant="secondary">
                See a Sample Email
              </Button>
            </div>
          </div>
        </section>

        <section id="pricing" className="py-20 bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Simple Pricing</h2>
            <div className="max-w-md mx-auto bg-gray-700 p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-center text-white mb-4">One-Time Service</h3>
              <p className="text-4xl font-bold text-center text-white mb-6">$49</p>
              <ul className="text-gray-300 mb-8 space-y-2">
                <li>✓ AI-generated negotiation email</li>
                <li>✓ Customized to your situation</li>
                <li>✓ Professional formatting</li>
                <li>✓ 24/7 availability</li>
              </ul>
              <Button className="w-full">Get Your Negotiation Email</Button>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-white">Ready to Negotiate?</h2>
              <p className="text-gray-300 mb-8">
                Don't leave money on the table. Let NegotiateAI help you craft the perfect response to secure the compensation you deserve.
              </p>
              <Button size="lg">
                Start Your Negotiation
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">&copy; 2023 NegotiateAI. All rights reserved.</p>
            <nav className="flex space-x-4 mt-4 sm:mt-0">
              <Link href="#" className="text-sm text-gray-300 hover:text-white">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-gray-300 hover:text-white">
                Terms of Service
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}