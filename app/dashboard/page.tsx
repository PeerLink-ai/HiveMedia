"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { TrendingUp, TrendingDown, Eye, Heart, MessageCircle, Calendar, Target, Lightbulb } from "lucide-react"

// Mock data for demonstration
const performanceData = [
  { name: "Mon", views: 4000, engagement: 2400 },
  { name: "Tue", views: 3000, engagement: 1398 },
  { name: "Wed", views: 2000, engagement: 9800 },
  { name: "Thu", views: 2780, engagement: 3908 },
  { name: "Fri", views: 1890, engagement: 4800 },
  { name: "Sat", views: 2390, engagement: 3800 },
  { name: "Sun", views: 3490, engagement: 4300 },
]

const platformData = [
  { name: "YouTube", value: 45, color: "#FF0000" },
  { name: "Instagram", value: 35, color: "#E4405F" },
  { name: "TikTok", value: 20, color: "#000000" },
]

const recentContent = [
  {
    id: 1,
    title: "10 Tips for Better Content Creation",
    platform: "YouTube",
    views: 15420,
    likes: 892,
    comments: 156,
    engagement: 6.8,
    thumbnail: "/placeholder.svg?height=60&width=100",
  },
  {
    id: 2,
    title: "Behind the Scenes: My Setup Tour",
    platform: "Instagram",
    views: 8930,
    likes: 1240,
    comments: 89,
    engagement: 14.9,
    thumbnail: "/placeholder.svg?height=60&width=100",
  },
  {
    id: 3,
    title: "Quick Tutorial: Video Editing",
    platform: "TikTok",
    views: 23100,
    likes: 2890,
    comments: 234,
    engagement: 13.5,
    thumbnail: "/placeholder.svg?height=60&width=100",
  },
]

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-gray-600">Welcome back! Here's your content performance overview.</p>
            </div>
            <div className="flex space-x-3">
              <Button variant="outline">
                <Calendar className="w-4 h-4 mr-2" />
                Last 7 days
              </Button>
              <Button className="bg-purple-600 hover:bg-purple-700">
                <Target className="w-4 h-4 mr-2" />
                Sync Data
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Views</CardTitle>
              <Eye className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">47,892</div>
              <p className="text-xs text-muted-foreground flex items-center">
                <TrendingUp className="w-3 h-3 mr-1 text-green-500" />
                +12.5% from last week
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Engagement Rate</CardTitle>
              <Heart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8.4%</div>
              <p className="text-xs text-muted-foreground flex items-center">
                <TrendingUp className="w-3 h-3 mr-1 text-green-500" />
                +2.1% from last week
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Likes</CardTitle>
              <Heart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5,022</div>
              <p className="text-xs text-muted-foreground flex items-center">
                <TrendingDown className="w-3 h-3 mr-1 text-red-500" />
                -3.2% from last week
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Comments</CardTitle>
              <MessageCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">479</div>
              <p className="text-xs text-muted-foreground flex items-center">
                <TrendingUp className="w-3 h-3 mr-1 text-green-500" />
                +8.7% from last week
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Charts and Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Performance Overview</CardTitle>
              <CardDescription>Views and engagement over the last 7 days</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="views" stroke="#8884d8" strokeWidth={2} />
                  <Line type="monotone" dataKey="engagement" stroke="#82ca9d" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Platform Distribution</CardTitle>
              <CardDescription>Content performance by platform</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={platformData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {platformData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="mt-4 space-y-2">
                {platformData.map((platform) => (
                  <div key={platform.name} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: platform.color }} />
                      <span className="text-sm">{platform.name}</span>
                    </div>
                    <span className="text-sm font-medium">{platform.value}%</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Content and Recommendations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Content</CardTitle>
              <CardDescription>Your latest posts and their performance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentContent.map((content) => (
                  <div key={content.id} className="flex items-center space-x-4 p-3 border rounded-lg">
                    <img
                      src={content.thumbnail || "/placeholder.svg"}
                      alt={content.title}
                      className="w-16 h-10 object-cover rounded"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium truncate">{content.title}</h4>
                      <div className="flex items-center space-x-2 mt-1">
                        <Badge variant="secondary" className="text-xs">
                          {content.platform}
                        </Badge>
                        <span className="text-xs text-gray-500">{content.engagement}% engagement</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium">{content.views.toLocaleString()}</div>
                      <div className="text-xs text-gray-500">views</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>AI Recommendations</CardTitle>
              <CardDescription>Personalized insights to boost your content</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-start space-x-3">
                    <Lightbulb className="w-5 h-5 text-blue-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-blue-900">Optimal Posting Time</h4>
                      <p className="text-sm text-blue-700 mt-1">
                        Your audience is most active on Tuesdays at 7 PM. Consider scheduling your next video then.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-start space-x-3">
                    <Target className="w-5 h-5 text-green-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-green-900">Trending Topic</h4>
                      <p className="text-sm text-green-700 mt-1">
                        "AI Tools for Creators" is trending in your niche. Create content around this topic.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <div className="flex items-start space-x-3">
                    <TrendingUp className="w-5 h-5 text-purple-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-purple-900">Thumbnail Optimization</h4>
                      <p className="text-sm text-purple-700 mt-1">
                        Your thumbnails with bright colors get 23% more clicks. Try using more vibrant designs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
