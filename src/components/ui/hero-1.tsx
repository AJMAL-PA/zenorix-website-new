"use client";

import React, { useState, useRef } from 'react';
import { NeonButton } from '@/components/ui/neon-button';
import { ArrowRight } from 'lucide-react';

interface NavigationItem {
  name: string
  href: string
}

interface AnnouncementBanner {
  text: string
  linkText: string
  linkHref: string
}

interface CallToAction {
  text: string
  href: string
  variant: 'primary' | 'secondary'
}

interface HeroLandingProps {
  // Logo and branding
  logo?: {
    src: string
    alt: string
    companyName: string
  }
  
  // Navigation
  navigation?: NavigationItem[]
  loginText?: string
  loginHref?: string
  
  // Hero content
  title: React.ReactNode
  description: string
  announcementBanner?: AnnouncementBanner
  callToActions?: CallToAction[]
  
  // Styling options
  titleSize?: 'small' | 'medium' | 'large'
  gradientColors?: {
    from: string
    to: string
  }
  
  // Additional customization
  className?: string
}

const defaultProps: Partial<HeroLandingProps> = {
  logo: {
    src: "https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600",
    alt: "Company Logo",
    companyName: "Your Company"
  },
  navigation: [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
  ],
  loginText: "Log in",
  loginHref: "#",
  titleSize: "large",
  gradientColors: {
    from: "oklch(0.646 0.222 41.116)",
    to: "oklch(0.488 0.243 264.376)"
  },
  callToActions: [
    { text: "Get started", href: "#", variant: "primary" },
    { text: "Learn more", href: "#", variant: "secondary" }
  ]
}

export function HeroLanding(props: HeroLandingProps) {
  const {
    title,
    description,
    announcementBanner,
    callToActions,
    titleSize,
    className
  } = { ...defaultProps, ...props }

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const titleRef = useRef<HTMLHeadingElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLHeadingElement>) => {
    if (titleRef.current) {
      const rect = titleRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };


  const getTitleSizeClasses = () => {
    switch (titleSize) {
      case 'small':
        return 'text-2xl sm:text-3xl md:text-5xl'
      case 'medium':
        return 'text-2xl sm:text-4xl md:text-6xl'
      case 'large':
      default:
        return 'text-3xl sm:text-5xl md:text-7xl'
    }
  }

  const renderCallToAction = (cta: CallToAction, index: number) => {
    if (cta.variant === 'primary') {
      return (
        <a key={index} href={cta.href}>
          <NeonButton
            variant="default"
            size="lg"
            neon
            className="text-sm sm:text-base font-semibold border-purple-600 hover:border-purple-400 shadow-[0_0_18px_2px_rgba(147,51,234,0.25)] hover:shadow-[0_0_28px_4px_rgba(147,51,234,0.45)] hover:brightness-110 hover:bg-gradient-to-br hover:from-[#4c1d95] hover:via-[#2e0854] hover:to-[#1c0036] transition-all duration-300"
          >
            {cta.text}
          </NeonButton>
        </a>
      )
    } else {
      return (
        <a key={index} href={cta.href}>
          <NeonButton
            variant="outline"
            size="lg"
            neon
            className="text-sm sm:text-base font-semibold border-purple-800 hover:border-purple-600 shadow-[0_0_12px_1px_rgba(147,51,234,0.15)] hover:shadow-[0_0_22px_3px_rgba(147,51,234,0.35)] hover:brightness-110 hover:bg-gradient-to-br hover:from-[#4c1d95] hover:via-[#2e0854] hover:to-[#1c0036] transition-all duration-300 flex items-center justify-between gap-3 pl-8 pr-2 py-2"
          >
            <span>{cta.text}</span>
            <span className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 group-hover:scale-105 shadow-[0_0_12px_rgba(255,255,255,0.6)]">
              <ArrowRight className="w-4 h-4" />
            </span>
          </NeonButton>
        </a>
      )
    }
  }

  return (
    <div className={`min-h-screen w-screen overflow-x-hidden relative bg-transparent ${className || ''}`}>




      <div className="relative isolate px-6 pt-4 overflow-hidden min-h-screen flex flex-col justify-center">        
        <div className="mx-auto max-w-4xl pt-28 sm:pt-36 pb-12">
          {/* Announcement banner */}
          {announcementBanner && (
            <div className="hidden sm:mb-2 sm:flex sm:justify-center">
              <div className="relative rounded-full px-2 py-1 text-xs sm:px-3 sm:text-sm/6 text-muted-foreground ring-1 ring-border hover:ring-ring transition-all">
                {announcementBanner.text}{' '}
                <a href={announcementBanner.linkHref} className="font-semibold text-purple-500 hover:text-purple-400 transition-colors">
                  <span aria-hidden="true" className="absolute inset-0" />
                  {announcementBanner.linkText} <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          )}
          
          <div className="text-center">
            <h1 
              ref={titleRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className={`${getTitleSizeClasses()} font-semibold tracking-tight text-balance text-foreground relative inline-block`}
            >
              {title}
              
              {/* Cursor Spotlight Effect */}
              <div 
                className={`pointer-events-none absolute rounded-full border border-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.4)] mix-blend-screen transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                style={{
                  width: '100px',
                  height: '100px',
                  left: mousePosition.x - 50,
                  top: mousePosition.y - 50,
                  background: 'radial-gradient(circle, rgba(168,85,247,0.15) 0%, rgba(168,85,247,0) 70%)',
                  zIndex: 10
                }}
              />
            </h1>
            <p className="mt-6 sm:mt-8 text-base sm:text-lg font-medium text-pretty text-muted-foreground sm:text-xl/8">
              {description}
            </p>
            
            {/* Call to action buttons */}
            {callToActions && callToActions.length > 0 && (
              <div className="mt-8 sm:mt-10 flex items-center justify-center gap-x-4 sm:gap-x-6">
                {callToActions.map((cta, index) => renderCallToAction(cta, index))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

// Export types for consumers
export type { HeroLandingProps, NavigationItem, AnnouncementBanner, CallToAction }
