"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"
import { Eye, EyeOff, Sparkles, Check } from "lucide-react"

export default function SignUp() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [username, setUsername] = useState("")
  const [fullName, setFullName] = useState("")
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // For demo purposes, simulate successful signup
      if (process.env.NEXT_PUBLIC_SUPABASE_URL?.includes("placeholder") || !process.env.NEXT_PUBLIC_SUPABASE_URL) {
        // Simulate loading time
        await new Promise((resolve) => setTimeout(resolve, 1000))
        router.push("/onboarding")
        return
      }

      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            username,
            full_name: fullName,
          },
        },
      })

      if (error) throw error

      // Redirect to profile setup
      router.push("/onboarding")
    } catch (error) {
      console.error("Error signing up:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleGoogleSignUp = async () => {
    try {
      // For demo purposes, simulate successful signup
      if (process.env.NEXT_PUBLIC_SUPABASE_URL?.includes("placeholder") || !process.env.NEXT_PUBLIC_SUPABASE_URL) {
        router.push("/onboarding")
        return
      }

      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${window.location.origin}/onboarding`,
        },
      })
      if (error) throw error
    } catch (error) {
      console.error("Error signing up with Google:", error)
    }
  }

  const benefits = [
    "Advanced analytics across all platforms",
    "AI-powered content recommendations",
    "Thumbnail optimization insights",
    "Audience growth tracking",
  ]

  return (
    <div className="min-h-screen flex items-center justify-center bg-hive-gradient-soft p-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-hive-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-hive-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-hive-300/5 rounded-full blur-3xl"></div>
      </div>

      <div className="w-full max-w-4xl relative z-10 grid lg:grid-cols-2 gap-8 items-center">
        {/* Left side - Benefits */}
        <div className="hidden lg:block space-y-8">
          <div>
            <h1 className="text-4xl font-bold hive-gradient-text mb-4">Join thousands of creators</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Get the insights you need to grow your audience and create better content across all platforms.
            </p>
          </div>

          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-hive-gradient rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-gray-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-hive-200/50">
            <p className="text-gray-600 italic">
              "Hive helped me increase my engagement by 150% in just 3 months. The AI recommendations are incredible!"
            </p>
            <div className="mt-4 flex items-center space-x-3">
              <div className="w-10 h-10 bg-hive-gradient rounded-full"></div>
              <div>
                <p className="font-semibold text-gray-900">Sarah Johnson</p>
                <p className="text-sm text-gray-600">YouTube Creator, 2.3M subscribers</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Sign up form */}
        <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm hive-card-hover">
          <CardHeader className="text-center space-y-4 pb-6">
            <div className="mx-auto w-16 h-16 bg-hive-gradient rounded-2xl flex items-center justify-center shadow-lg hive-glow">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <div>
              <CardTitle className="text-3xl font-bold hive-gradient-text">Create Account</CardTitle>
              <CardDescription className="text-lg text-gray-600 mt-2">
                Start your journey to better content analytics
              </CardDescription>
            </div>
          </CardHeader>

          {(!process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL.includes("placeholder")) && (
            <div className="mx-6 mb-6 bg-gradient-to-r from-hive-50 to-orange-50 border border-hive-200 rounded-xl p-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-hive-500 rounded-full animate-pulse"></div>
                <p className="text-sm text-hive-700 font-medium">
                  <strong>Demo Mode:</strong> Fill out the form to explore the platform
                </p>
              </div>
            </div>
          )}

          <CardContent className="space-y-6">
            <form onSubmit={handleSignUp} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-gray-700 font-medium">
                    Full Name
                  </Label>
                  <Input
                    id="fullName"
                    placeholder="John Doe"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="h-12 border-gray-200 focus:border-hive-500 focus:ring-hive-500/20 rounded-xl"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="username" className="text-gray-700 font-medium">
                    Username
                  </Label>
                  <Input
                    id="username"
                    placeholder="johndoe"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="h-12 border-gray-200 focus:border-hive-500 focus:ring-hive-500/20 rounded-xl"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700 font-medium">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 border-gray-200 focus:border-hive-500 focus:ring-hive-500/20 rounded-xl"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-700 font-medium">
                  Password
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a strong password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="h-12 border-gray-200 focus:border-hive-500 focus:ring-hive-500/20 rounded-xl pr-12"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div className="flex items-start space-x-3 text-sm">
                <input
                  type="checkbox"
                  className="mt-1 rounded border-gray-300 text-hive-500 focus:ring-hive-500"
                  required
                />
                <p className="text-gray-600 leading-relaxed">
                  I agree to the{" "}
                  <Link href="/terms" className="text-hive-600 hover:text-hive-700 font-medium">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-hive-600 hover:text-hive-700 font-medium">
                    Privacy Policy
                  </Link>
                </p>
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-hive-gradient hover:shadow-lg hover:shadow-hive-500/25 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-[1.02]"
                disabled={loading}
              >
                {loading ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Creating account...</span>
                  </div>
                ) : (
                  "Create Account"
                )}
              </Button>
            </form>

            <div className="relative">
              <Separator className="my-6" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="bg-white px-4 text-sm text-gray-500 font-medium">Or continue with</span>
              </div>
            </div>

            <Button
              variant="outline"
              className="w-full h-12 border-gray-200 hover:border-hive-300 hover:bg-hive-50 rounded-xl transition-all duration-300"
              onClick={handleGoogleSignUp}
            >
              <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <span className="font-medium">Continue with Google</span>
            </Button>

            <div className="text-center pt-4">
              <p className="text-gray-600">
                Already have an account?{" "}
                <Link href="/auth/signin" className="text-hive-600 hover:text-hive-700 font-semibold transition-colors">
                  Sign in
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
