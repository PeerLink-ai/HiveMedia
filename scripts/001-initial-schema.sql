-- Create users table
CREATE TABLE IF NOT EXISTS users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  username VARCHAR(50) UNIQUE NOT NULL,
  full_name VARCHAR(255),
  bio TEXT,
  avatar_url TEXT,
  preferred_genre VARCHAR(100),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create social_accounts table
CREATE TABLE IF NOT EXISTS social_accounts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  platform VARCHAR(50) NOT NULL, -- 'youtube', 'instagram', 'tiktok'
  platform_user_id VARCHAR(255) NOT NULL,
  username VARCHAR(255) NOT NULL,
  access_token TEXT,
  refresh_token TEXT,
  connected_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  last_sync TIMESTAMP WITH TIME ZONE,
  UNIQUE(user_id, platform)
);

-- Create content_analytics table
CREATE TABLE IF NOT EXISTS content_analytics (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  social_account_id UUID REFERENCES social_accounts(id) ON DELETE CASCADE,
  content_id VARCHAR(255) NOT NULL, -- platform-specific content ID
  content_type VARCHAR(50) NOT NULL, -- 'video', 'post', 'reel'
  title TEXT,
  description TEXT,
  thumbnail_url TEXT,
  published_at TIMESTAMP WITH TIME ZONE,
  views INTEGER DEFAULT 0,
  likes INTEGER DEFAULT 0,
  comments INTEGER DEFAULT 0,
  shares INTEGER DEFAULT 0,
  engagement_rate DECIMAL(5,2),
  watch_time INTEGER, -- in seconds
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create thumbnail_analysis table
CREATE TABLE IF NOT EXISTS thumbnail_analysis (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  content_analytics_id UUID REFERENCES content_analytics(id) ON DELETE CASCADE,
  thumbnail_url TEXT NOT NULL,
  clarity_score DECIMAL(3,2),
  emotional_appeal_score DECIMAL(3,2),
  subject_alignment_score DECIMAL(3,2),
  overall_score DECIMAL(3,2),
  recommendations TEXT,
  analyzed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create content_recommendations table
CREATE TABLE IF NOT EXISTS content_recommendations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  recommendation_type VARCHAR(50) NOT NULL, -- 'topic', 'timing', 'trend'
  title VARCHAR(255) NOT NULL,
  description TEXT,
  confidence_score DECIMAL(3,2),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  expires_at TIMESTAMP WITH TIME ZONE
);
