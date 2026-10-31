import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, Tag, Share2 } from "lucide-react";
import { JOURNAL_ARTICLES } from "@/data/portfolioData";

interface Props {
  params: { slug: string };
}

const ARTICLES_CONTENT: Record<
  string,
  {
    title: string;
    date: string;
    readTime: string;
    tags: string[];
    content: React.ReactNode;
  }
> = {
  "building-commercial-website-from-scratch": {
    title: "Architecting a Commercial Enterprise Website from Scratch",
    date: "October 2025",
    readTime: "6 min read",
    tags: ["Engineering", "React", "Production", "Case Study"],
    content: (
      <div className="space-y-6 text-[#9A9EAA] leading-relaxed text-base">
        <p>
          Developing a complete commercial web platform single-handedly brings an entirely different set of challenges compared to textbook tutorials or classroom assignments. When I began developing the web infrastructure for <strong>Shiva Glass Group</strong> (a prominent distributor of architectural glass and fittings), the primary challenge was not merely writing clean React code; it was designing a reliable, extensible system that non-technical stakeholders and prospective clients could navigate with zero friction.
        </p>
        <h3 className="font-heading font-bold text-xl text-white pt-4">
          1. Discovery and Domain Information Modeling
        </h3>
        <p>
          Architectural glass entails extensive specifications: thickness grades, beveling parameters, sound reduction acoustic indices, safety laminates, and custom hardware fittings. Transforming these physical catalog sheets into structured TypeScript interfaces required deliberate domain modeling.
        </p>
        <div className="p-4 rounded-xl bg-[#141722] border border-white/5 font-mono text-xs text-accent-cyan">
          {`interface GlassProduct {
  id: string;
  name: string;
  category: 'toughened' | 'laminated' | 'reflective' | 'fluted';
  thicknessRange: string[]; // e.g. ['4mm', '6mm', '8mm', '12mm']
  applications: string[];
  specSheetPdfUrl?: string;
}`}
        </div>
        <h3 className="font-heading font-bold text-xl text-white pt-4">
          2. Eliminating Frontend Bloat
        </h3>
        <p>
          Commercial visitors frequently browse catalogs on mobile networks. Heavy libraries and uncontrolled assets were strictly banned. By keeping dependencies lean, optimizing imagery, and implementing responsive lazy-loading, mobile navigation remained snappy with zero Cumulative Layout Shift (CLS).
        </p>
        <h3 className="font-heading font-bold text-xl text-white pt-4">
          3. Deployment & Continuous Integration
        </h3>
        <p>
          Configuring automated previews allowed stakeholder feedback loops to be rapid and clear. The platform was published to production with zero downtime, cementing my understanding of modern web engineering lifecycles.
        </p>
      </div>
    ),
  },
  "implementing-seo-for-business-website": {
    title: "Engineering Search Engine Optimization for Business Applications",
    date: "November 2025",
    readTime: "5 min read",
    tags: ["SEO", "Performance", "Web Architecture"],
    content: (
      <div className="space-y-6 text-[#9A9EAA] leading-relaxed text-base">
        <p>
          Many developers treat Search Engine Optimization (SEO) as an afterthought — perhaps tacking on a few meta tags before hitting deploy. For commercial platforms like <strong>Shiva Glass Group</strong>, SEO is a fundamental engineering discipline directly affecting discovery and customer acquisition.
        </p>
        <h3 className="font-heading font-bold text-xl text-white pt-4">
          1. Schema.org JSON-LD Structured Data
        </h3>
        <p>
          Search engine crawlers consume structured entities far better than generic paragraph scraping. By injecting JSON-LD schemas representing the <code>LocalBusiness</code>, <code>Organization</code>, and individual product specifications, crawlers immediately understand business hours, geographic presence in Punjab, and product classifications.
        </p>
        <h3 className="font-heading font-bold text-xl text-white pt-4">
          2. Canonical URLs and Dynamic Sitemaps
        </h3>
        <p>
          Eliminating duplicate content penalties requires precise canonical routing. Every dynamic catalog route explicitly references its primary canonical URL, paired with an automated XML sitemap generator that registers updates on deployment.
        </p>
        <h3 className="font-heading font-bold text-xl text-white pt-4">
          3. Core Web Vitals as an SEO Factor
        </h3>
        <p>
          Google prioritizes user experience metrics: Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative Layout Shift (CLS). By optimizing font preloading and image sizes, the website maintained top-tier performance scores across desktop and mobile.
        </p>
      </div>
    ),
  },
  "reviving-college-major-project-resuone": {
    title: "Architecture & Post-Mortem: Reviving College Major Project Resuone",
    date: "December 2025",
    readTime: "7 min read",
    tags: ["PostgreSQL", "Full-Stack", "Architecture", "DevOps"],
    content: (
      <div className="space-y-6 text-[#9A9EAA] leading-relaxed text-base">
        <p>
          During our campus placement preparation, my team noticed a persistent failure point: students with capable technical skills were being filtered out by Applicant Tracking Systems (ATS) due to non-standard resume layouts, invisible text layers, and unparsable column formats. We engineered <strong>Resuone</strong> to enforce structured, ATS-compliant formats with built-in NLP heuristics.
        </p>
        <h3 className="font-heading font-bold text-xl text-white pt-4">
          The Problem: Resource Exhaustion on Ephemeral Free Tiers
        </h3>
        <p>
          Resuone launched as a React SPA with a Node.js / PostgreSQL backend deployed on a free cloud hosting tier. Following active usage across student batches, the backend service hit connection limits and usage caps, rendering dynamic generation intermittently unavailable.
        </p>
        <h3 className="font-heading font-bold text-xl text-white pt-4">
          The Engineering Post-Mortem & Restoration Blueprint
        </h3>
        <p>
          Rather than abandoning the project, this experience presented a valuable lesson in cloud infrastructure economics and backend resilience:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm">
          <li><strong>Connection Pooling:</strong> Direct PostgreSQL connections in serverless tiers exhaust socket pools quickly. Migrating to Supabase/Prisma with PgBouncer solves this bottleneck.</li>
          <li><strong>Client-Side PDF Generation:</strong> Offloading standard PDF rendering from the server to client-side Web Workers significantly reduces compute costs on the backend.</li>
          <li><strong>Containerization:</strong> Packaging the backend service into a Docker container allows seamless deployment to self-hosted or fixed-cost cloud nodes without surprise usage caps.</li>
        </ul>
      </div>
    ),
  },
  "practical-ml-student-performance": {
    title: "From Raw Data to Prediction: Engineering a Clean ML Pipeline",
    date: "January 2026",
    readTime: "5 min read",
    tags: ["Machine Learning", "Python", "scikit-learn"],
    content: (
      <div className="space-y-6 text-[#9A9EAA] leading-relaxed text-base">
        <p>
          The <strong>Student Performance Predictor</strong> was conceived to understand how everyday habits (study hours, attendance percentage, prior test scores, and sleep consistency) influence academic outcomes.
        </p>
        <h3 className="font-heading font-bold text-xl text-white pt-4">
          1. Exploratory Data Analysis & Multicollinearity
        </h3>
        <p>
          Before training any model, exploratory data analysis using pandas and seaborn identified high correlation between practice test frequency and final exam scores. Feature scaling using StandardScaler prevented larger numerical scales from skewing regression coefficients.
        </p>
        <h3 className="font-heading font-bold text-xl text-white pt-4">
          2. Model Selection & Error Metrics
        </h3>
        <p>
          We evaluated Linear Regression alongside Ridge and Lasso models to penalize overfitting. Validation on an 80/20 train-test split confirmed solid R2 scores and acceptable Mean Squared Error (MSE), demonstrating that even straightforward models yield high predictive utility when features are clean.
        </p>
        <h3 className="font-heading font-bold text-xl text-white pt-4">
          3. Interactive Deployment with Streamlit
        </h3>
        <p>
          A model tucked away in a Jupyter Notebook provides limited practical value. Wrapping the trained weights into a lightweight Streamlit dashboard allows students to input their study metrics and immediately observe predicted outcomes.
        </p>
      </div>
    ),
  },
};

export async function generateStaticParams() {
  return JOURNAL_ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = ARTICLES_CONTENT[params.slug];
  if (!article) return { title: "Article Not Found" };
  return {
    title: `${article.title} | Engineering Journal`,
    description: `Read "${article.title}" by Chetan Palta.`,
  };
}

export default function ArticlePage({ params }: Props) {
  const article = ARTICLES_CONTENT[params.slug];
  if (!article) {
    notFound();
  }

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Back Link */}
        <Link
          href="/journal"
          className="inline-flex items-center gap-2 text-xs font-mono text-accent-blue hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Journal Archive</span>
        </Link>

        {/* Article Header */}
        <div className="space-y-4 pb-8 border-b border-white/10">
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#9A9EAA]">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-accent-blue" />
              <span>{article.date}</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-accent-cyan" />
              <span>{article.readTime}</span>
            </span>
          </div>

          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#F5F5F7] tracking-tight leading-tight">
            {article.title}
          </h1>

          <div className="flex flex-wrap gap-2 pt-2">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 rounded-md text-xs font-mono bg-white/5 text-[#9A9EAA]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Content Body */}
        <div className="prose prose-invert max-w-none">
          {article.content}
        </div>

        {/* Author Footer */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#9A9EAA]">
          <div>Written by Chetan Palta · AI + Full-Stack Developer</div>
          <Link
            href="/contact"
            className="text-accent-blue hover:text-white transition-colors"
          >
            Have feedback? Let's connect →
          </Link>
        </div>
      </div>
    </div>
  );
}

