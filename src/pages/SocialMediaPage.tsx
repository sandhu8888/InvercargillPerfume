import React from 'react';
import { ExternalLink, Star, Heart, MessageCircle, Share2, Play, CheckCircle } from 'lucide-react';

interface SocialChannel {
  id: string;
  name: string;
  handle: string;
  url: string;
  description: string;
  followers: string;
  badge: string;
  iconName: string;
}

const SOCIAL_CHANNELS: SocialChannel[] = [
  {
    id: 'tiktok',
    name: 'TikTok',
    handle: '@eperfumestorenz',
    url: 'https://www.tiktok.com/@eperfumestorenz',
    description: 'Trending perfume oil unboxings, 18-hour longevity wear tests, and brand-inspired fragrance comparisons.',
    followers: '14.2K Followers',
    badge: 'Trending Fragrance Content',
    iconName: 'TikTok'
  },
  {
    id: 'instagram',
    name: 'Instagram',
    handle: '@eperfumestorenz',
    url: 'https://www.instagram.com/eperfumestorenz',
    description: 'Minimalist luxury aesthetic visuals, daily fragrance drops, Southland boutique moments, and customer tags.',
    followers: '9.8K Followers',
    badge: 'Daily Visual Drops',
    iconName: 'Instagram'
  },
  {
    id: 'facebook',
    name: 'Facebook',
    handle: 'facebook.com/eperfumestorenz',
    url: 'https://www.facebook.com/eperfumestorenz',
    description: 'Invercargill local announcements, community scent reviews, customer discussions, and nationwide promotions.',
    followers: '6.5K Community',
    badge: 'Community & Updates',
    iconName: 'Facebook'
  },
  {
    id: 'youtube',
    name: 'YouTube',
    handle: '@eperfumestorenz',
    url: 'https://www.youtube.com/@eperfumestorenz',
    description: 'Comprehensive fragrance reviews, non-alcoholic scent layering tutorials, and perfume oil education.',
    followers: '4.2K Subscribers',
    badge: 'Video Guides & Reviews',
    iconName: 'YouTube'
  },
  {
    id: 'google',
    name: 'Google Business Page',
    handle: 'ePerfumeStore Invercargill',
    url: 'https://maps.google.com/?q=Shop+3+24+Leven+Street+Invercargill+9810+New+Zealand',
    description: 'Official verified Google business profile. Check our 5.0-star verified customer ratings, leave reviews, and get GPS directions to Shop 3/24 Leven Street.',
    followers: '5.0 ★ Rating (150+ Reviews)',
    badge: 'Verified Boutique Listing',
    iconName: 'Google'
  }
];

const MOCK_SOCIAL_POSTS = [
  {
    id: 'post-1',
    platform: 'Instagram',
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=600&q=80',
    caption: 'Pure Rouge Saffron oil catching the Invercargill morning light. 100% alcohol-free, projecting for over 18 hours. #ePerfumeStoreNZ',
    likes: '1,248',
    comments: '86'
  },
  {
    id: 'post-2',
    platform: 'TikTok',
    image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=600&q=80',
    caption: 'Testing our Imperial Birch oil vs the $650 designer spray. Result? The oil was still projecting strong after 14 hours! Link in bio.',
    likes: '4,892',
    comments: '312'
  },
  {
    id: 'post-3',
    platform: 'Instagram',
    image: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=600&q=80',
    caption: 'Behind the scenes at Shop 3/24 Leven Street, hand-pouring our latest batch of Santale Mystique 33. #Invercargill',
    likes: '894',
    comments: '42'
  },
  {
    id: 'post-4',
    platform: 'YouTube',
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=600&q=80',
    caption: 'Full Guide: Why Reed Diffusers dry out fast and how pure botanical oils diffuse consistently for 6 months without evaporation.',
    likes: '2,105',
    comments: '178'
  }
];

export const SocialMediaPage: React.FC = () => {
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[11px] font-mono tracking-widest uppercase text-neutral-500 block mb-2">
            Connect & Follow Across New Zealand
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold uppercase tracking-tight text-black">
            ePerfumeStore Social Channels
          </h1>
          <p className="text-xs sm:text-sm text-neutral-600 mt-2 font-sans leading-relaxed">
            Follow our fragrance journey, watch fragrance note breakdowns, discover exclusive flash drops, and leave a review on our official Google Business Page.
          </p>
        </div>

        {/* Channels Grid: TikTok, Facebook, Instagram, YouTube, Google Page */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {SOCIAL_CHANNELS.map((channel) => (
            <div
              key={channel.id}
              className="border-2 border-black p-6 bg-white flex flex-col justify-between hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-black mb-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider">
                    {channel.name}
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-wider border border-black px-2 py-0.5">
                    {channel.badge}
                  </span>
                </div>

                <div className="mb-2">
                  <h3 className="font-serif text-xl font-bold text-black">
                    {channel.handle}
                  </h3>
                  <span className="text-xs font-mono text-neutral-500 font-semibold">
                    {channel.followers}
                  </span>
                </div>

                <p className="text-xs text-neutral-700 leading-relaxed font-sans mt-3">
                  {channel.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-200">
                <a
                  href={channel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-black text-white hover:bg-neutral-800 py-3 px-4 text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 transition-colors"
                >
                  <span>
                    {channel.id === 'google'
                      ? 'Visit Google Page & Reviews'
                      : channel.id === 'youtube'
                      ? 'Subscribe on YouTube'
                      : `Open on ${channel.name}`}
                  </span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}

          {/* Special Google Review Callout Box */}
          <div className="border-2 border-black p-6 bg-neutral-900 text-white flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1 text-white mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-white stroke-white" />
                ))}
              </div>
              <h3 className="font-serif text-lg font-bold uppercase tracking-tight">
                Review Our Invercargill Store
              </h3>
              <p className="text-xs text-neutral-300 mt-2 leading-relaxed">
                Have you sampled our non-alcoholic perfume oils at Shop 3/24 Leven Street or received an online order? Your Google Review supports our local Southland business!
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-700">
              <a
                href="https://maps.google.com/?q=Shop+3+24+Leven+Street+Invercargill+9810+New+Zealand"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-white text-black hover:bg-neutral-200 py-3 px-4 text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 transition-colors text-center"
              >
                <span>Write A 5-Star Google Review</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Community Visual Feed Spotlight */}
        <div className="border border-black p-8 bg-neutral-50 mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-black">
            <div>
              <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-500">
                Community Showcase
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold uppercase tracking-tight">
                Latest Social Media Posts & Reels
              </h3>
            </div>
            <p className="text-xs font-mono text-neutral-600">
              Tag <strong>#ePerfumeStoreNZ</strong> to be featured
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {MOCK_SOCIAL_POSTS.map((post) => (
              <div key={post.id} className="border border-black bg-white overflow-hidden group">
                <div className="relative aspect-square overflow-hidden bg-neutral-200">
                  <img
                    src={post.image}
                    alt={post.caption}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-2 left-2 bg-black text-white text-[10px] uppercase font-mono font-bold px-2 py-0.5">
                    {post.platform}
                  </div>
                </div>

                <div className="p-4 space-y-3">
                  <p className="text-xs text-neutral-800 line-clamp-3 font-sans leading-relaxed">
                    {post.caption}
                  </p>

                  <div className="flex items-center justify-between text-[11px] text-neutral-500 pt-2 border-t border-neutral-100 font-mono">
                    <span className="flex items-center gap-1">
                      <Heart className="w-3.5 h-3.5" /> {post.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="w-3.5 h-3.5" /> {post.comments}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Direct Inquiries Banner */}
        <div className="text-center space-y-2 border-t border-black pt-10">
          <h4 className="font-serif text-lg font-bold uppercase tracking-wider">
            Brand Collaborations & Inquiries
          </h4>
          <p className="text-xs text-neutral-600">
            For PR, influencer samples, or wholesale inquiries, direct your email to{' '}
            <a href="mailto:eperfumestorenz@gmail.com" className="font-bold underline text-black">
              eperfumestorenz@gmail.com
            </a>{' '}
            or call{' '}
            <a href="tel:021958113" className="font-bold underline text-black">
              021 958 113
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
};
