import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  ArrowRight,
  Rocket,
  BarChart3,
  Zap,
  Users,
  Layers,
  Grid3X3,
  ShoppingCart,
  Database,
  Terminal,
} from "lucide-react"

export default function Component() {
  return (
    <div className="min-h-screen text-white p-8 mt-20 mb-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-6xl font-bold leading-tight mb-2">Start with a Template,</h1>
          <h1 className="text-6xl font-bold leading-tight">level-up with Plugins</h1>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-12 gap-6 mb-16">
          {/* Large Startup Card */}
          <div className="col-span-7">
            <Card className="relative h-[400px] bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900 border-0 overflow-hidden">
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <span className="text-purple-600 font-bold text-sm">M</span>
                    </div>
                    <span className="text-white font-medium">Mabit</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-white/80">
                    <span>All Pages</span>
                    <span>Features</span>
                    <span>Reviews</span>
                    <span>Pricing</span>
                    <Button size="sm" className="bg-white text-purple-600 hover:bg-white/90">
                      Get This Template
                    </Button>
                  </div>
                </div>

                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 bg-gray-300 rounded-full border-2 border-white"></div>
                      <div className="w-8 h-8 bg-gray-400 rounded-full border-2 border-white"></div>
                      <div className="w-8 h-8 bg-gray-500 rounded-full border-2 border-white"></div>
                    </div>
                    <span className="text-sm text-white/80">Powered by 12,000+ people</span>
                  </div>

                  <h2 className="text-4xl font-bold mb-6">
                    Fastest way to manage payment
                    <br />
                    anytime you want.
                  </h2>

                  <div className="flex items-center justify-center gap-4">
                    <Button
                      variant="outline"
                      className="bg-transparent border-white text-white hover:bg-white hover:text-purple-600"
                    >
                      Download From App Store
                    </Button>
                    <Button className="bg-purple-800 hover:bg-purple-700">See Pricing</Button>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Rocket className="w-5 h-5" />
                  <span className="text-lg font-medium">Startup</span>
                </div>

                {/* Phone mockup */}
                <div className="absolute bottom-8 right-8 w-32 h-64 bg-black rounded-3xl border-4 border-gray-800 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400 mb-2">$12,765.00</div>
                    <div className="text-xs text-gray-400">Available Balance</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Template Cards Grid */}
          <div className="col-span-5 grid grid-cols-2 gap-6">
            {/* Agency Card */}
            <Card className="h-[190px] bg-gradient-to-br from-blue-600 to-blue-800 border-0 p-6 flex flex-col justify-between">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Agency</h3>
              </div>
            </Card>

            {/* Business Card */}
            <Card className="h-[190px] bg-gradient-to-br from-orange-500 to-orange-700 border-0 p-6 flex flex-col justify-between">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Business</h3>
              </div>
            </Card>

            {/* Portfolio Card */}
            <Card className="h-[190px] bg-gradient-to-br from-lime-500 to-green-600 border-0 p-6 flex flex-col justify-between">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <Layers className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <div className="text-4xl font-bold mb-2" style={{ fontFamily: "serif" }}>
                  LUCAS
                  <br />
                  MILLER
                </div>
                <h3 className="text-lg font-medium">Portfolio</h3>
              </div>
            </Card>

            {/* SaaS Card */}
            <Card className="h-[190px] bg-gradient-to-br from-red-500 to-orange-600 border-0 p-6 flex flex-col justify-between">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <div className="text-sm text-white/80 mb-1">Scale Without Limits</div>
                <div className="text-sm text-white/80 mb-3">With Noisy</div>
                <h3 className="text-2xl font-bold">SaaS</h3>
              </div>
            </Card>
          </div>
        </div>
        
        {/* Browse Marketplace */}
        <div className="text-center">
          <Button variant="link" className="text-white text-lg font-medium p-0 h-auto">
            Browse the Marketplace
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  )
}
