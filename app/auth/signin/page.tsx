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
import { Eye, EyeOff, Sparkles } from "lucide-react"

export default function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // For demo purposes, simulate successful login
      if (process.env.NEXT_PUBLIC_SUPABASE_URL?.includes("placeholder") || !process.env.NEXT_PUBLIC_SUPABASE_URL) {
        // Simulate loading time
        await new Promise((resolve) => setTimeout(resolve, 1000))
        router.push("/dashboard")
        return
      }

      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) throw error
      router.push("/dashboard")
    } catch (error) {
      console.error("Error signing in:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleGoogleSignIn = async () => {
    try {
      // For demo purposes, simulate successful login
      if (process.env.NEXT_PUBLIC_SUPABASE_URL?.includes("placeholder") || !process.env.NEXT_PUBLIC_SUPABASE_URL) {
        router.push("/dashboard")
        return
      }

      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${window.location.origin}/dashboard`,
        },
      })
      if (error) throw error
    } catch (error) {
      console.error("Error signing in with Google:", error)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-hive-gradient-soft p-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-hive-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-hive-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-hive-300/5 rounded-full blur-3xl"></div>
      </div>

      <Card className="w-full max-w-md relative z-10 border-0 shadow-2xl bg-white/80 backdrop-blur-sm hive-card-hover">
        <CardHeader className="text-center space-y-4 pb-8">
          <div className="mx-auto w-16 h-16 bg-hive-gradient rounded-2xl flex items-center justify-center shadow-lg hive-glow">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <div>
            <CardTitle className="text-3xl font-bold hive-gradient-text">Welcome Back</CardTitle>
            <CardDescription className="text-lg text-gray-600 mt-2">
              Sign in to your Hive analytics dashboard
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {(!process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL.includes("placeholder")) && (
            <div className="bg-gradient-to-r from-hive-50 to-orange-50 border border-hive-200 rounded-xl p-4 mb-6">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-hive-500 rounded-full animate-pulse"></div>
                <p className="text-sm text-hive-700 font-medium">
                  <strong>Demo Mode:</strong> Use any email/password to explore
                </p>
              </div>
            </div>
          )}

          <form onSubmit={handleEmailSignIn} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-700 font-medium">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
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
                  placeholder="Enter your password"
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

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input type="checkbox" className="rounded border-gray-300 text-hive-500 focus:ring-hive-500" />
                <span className="text-gray-600">Remember me</span>
              </label>
              <Link href="/auth/forgot-password" className="text-hive-600 hover:text-hive-700 font-medium">
                Forgot password?
              </Link>
            </div>

            <Button
              type="submit"
              className="w-full h-12 bg-hive-gradient hover:shadow-lg hover:shadow-hive-500/25 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-[1.02]"
              disabled={loading}
            >
              {loading ? (
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Signing in...</span>
                </div>
              ) : (
                "Sign In"
              )}
            </Button>
          </form>

          <div className="relative">
            <Separator className="my-6" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="bg-white px-4 text-sm text-gray-500 font-medium">Or continue with</span>
            </div>
          </div>

          <div className="space-y-3">
            <Button
              variant="outline"
              className="w-full h-12 border-gray-200 hover:border-hive-300 hover:bg-hive-50 rounded-xl transition-all duration-300"
              onClick={handleGoogleSignIn}
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

            <Button
              variant="outline"
              className="w-full h-12 border-gray-200 hover:border-hive-300 hover:bg-hive-50 rounded-xl transition-all duration-300"
            >
              <svg className="w-5 h-5 mr-3" fill="#1877F2" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span className="font-medium">Continue with Facebook</span>
            </Button>
          </div>

          <div className="text-center pt-4">
            <p className="text-gray-600">
              Don't have an account?{" "}
              <Link href="/auth/signup" className="text-hive-600 hover:text-hive-700 font-semibold transition-colors">
                Sign up for free
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
