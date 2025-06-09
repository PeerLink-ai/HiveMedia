"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Youtube, Instagram, Music } from "lucide-react"
import { useRouter } from "next/navigation"

const contentGenres = [
  "Gaming",
  "Beauty & Fashion",
  "Tech Reviews",
  "Lifestyle",
  "Comedy",
  "Education",
  "Music",
  "Cooking",
  "Fitness",
  "Travel",
  "DIY",
  "Business",
]

const socialPlatforms = [
  { name: "YouTube", icon: Youtube, color: "bg-red-500" },
  { name: "Instagram", icon: Instagram, color: "bg-pink-500" },
  { name: "TikTok", icon: Music, color: "bg-black" },
]

export default function Onboarding() {
  const [step, setStep] = useState(1)
  const [bio, setBio] = useState("")
  const [selectedGenre, setSelectedGenre] = useState("")
  const [connectedPlatforms, setConnectedPlatforms] = useState<string[]>([])
  const router = useRouter()

  const handlePlatformConnect = (platform: string) => {
    if (connectedPlatforms.includes(platform)) {
      setConnectedPlatforms(connectedPlatforms.filter((p) => p !== platform))
    } else {
      setConnectedPlatforms([...connectedPlatforms, platform])
    }
  }

  const handleComplete = () => {
    // Save profile data and redirect to dashboard
    router.push("/dashboard")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50 p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-purple-600">
            {step === 1 ? "Tell us about yourself" : "Connect your accounts"}
          </CardTitle>
          <CardDescription>
            {step === 1
              ? "Help us personalize your Hive experience"
              : "Link your social media accounts to start tracking analytics"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {step === 1 ? (
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  placeholder="Tell us about your content and what makes you unique..."
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  rows={4}
                />
              </div>

              <div className="space-y-2">
                <Label>Content Genre</Label>
                <Select value={selectedGenre} onValueChange={setSelectedGenre}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your primary content genre" />
                  </SelectTrigger>
                  <SelectContent>
                    {contentGenres.map((genre) => (
                      <SelectItem key={genre} value={genre.toLowerCase()}>
                        {genre}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button
                onClick={() => setStep(2)}
                className="w-full bg-purple-600 hover:bg-purple-700"
                disabled={!bio || !selectedGenre}
              >
                Continue
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="text-center text-sm text-gray-600 mb-6">Connect at least one platform to continue</div>

              <div className="grid gap-4">
                {socialPlatforms.map((platform) => {
                  const Icon = platform.icon
                  const isConnected = connectedPlatforms.includes(platform.name)

                  return (
                    <div
                      key={platform.name}
                      className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                        isConnected ? "border-purple-500 bg-purple-50" : "border-gray-200 hover:border-gray-300"
                      }`}
                      onClick={() => handlePlatformConnect(platform.name)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className={`p-2 rounded-full ${platform.color} text-white`}>
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <h3 className="font-semibold">{platform.name}</h3>
                            <p className="text-sm text-gray-600">Connect your {platform.name} account</p>
                          </div>
                        </div>
                        {isConnected && (
                          <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                            Connected
                          </Badge>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="flex space-x-4">
                <Button variant="outline" onClick={() => setStep(1)} className="flex-1">
                  Back
                </Button>
                <Button
                  onClick={handleComplete}
                  className="flex-1 bg-purple-600 hover:bg-purple-700"
                  disabled={connectedPlatforms.length === 0}
                >
                  Complete Setup
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
