import React from "react";
import type { Metadata } from "next";
import {
  Code2,
  Cpu,
  Brain,
  Terminal,
  ExternalLink,
  BookOpen,
  GitBranch,
  Layers,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export const metadata: Metadata = {
  title: "Engineering Lab & Technical Notes",
  description:
    "Chetan Palta's technical exploration notes — Data Structures & Algorithms, LeetCode practice, AI/ML experiments, and systems architecture logs.",
};

const DSA_TOPICS = [
  {
    topic: "Arrays, Strings & Two Pointers",
    notes: "Prefix sums, sliding window techniques, in-place matrix manipulations.",
    status: "Proficient",
  },
  {
    topic: "Hashing & Hash Tables",
    notes: "Frequency maps, collision resolution, constant time lookups for optimal algorithmic passes.",
    status: "Proficient",
  },
  {
    topic: "Linked Lists, Stacks & Queues",
    notes: "Monotonic stacks, cycle detection (Floyd's algorithm), recursion stack emulation.",
    status: "Proficient",
  },
  {
    topic: "Binary Trees & Binary Search Trees",
    notes: "DFS (inorder/preorder/postorder), BFS level-order traversal, LCA, BST validation.",
    status: "Active Practice",
  },
  {
    topic: "Dynamic Programming & Recursion",
    notes: "Memoization, tabulation, state transitions, subproblem decomposition.",
    status: "Active Practice",
  },
  {
    topic: "Graphs & Disjoint Sets",
    notes: "BFS/DFS, topological sort (Kahn's), shortest path (Dijkstra), Union-Find with path compression.",
    status: "Active Exploration",
  },
];

const ML_EXPERIMENTS = [
  {
    title: "Student Performance Regression Pipeline",
    tech: "Python, scikit-learn, pandas",
    description: "Multivariate regression model predicting student outcomes based on structured study indicators. Handled multicollinearity and validated with MSE/R2 metrics.",
    link: "/projects/student-performance-predictor",
  },
  {
    title: "Real-Time Face Recognition & Biometric Encodings",
    tech: "OpenCV, dlib, NumPy",
    description: "Constructed pipeline extracting 128D facial feature vectors, calculating Euclidean distances across known subject embeddings with live webcam feeds.",
    link: "/projects/face-recognition",
  },
  {
    title: "Literature Exploration with Language Models",
    tech: "FastAPI, Vector Embeddings, LLM APIs",
    description: "Engineered semantic retrieval patterns to query academic documents and synthesize citations with zero hallucinations.",
    link: "/projects/research-copilot",
  },
];

export default function EngineeringPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono text-accent-cyan uppercase tracking-widest mb-3">
            <span>// TECHNICAL LAB & DSA</span>
          </div>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#F5F5F7] tracking-tight">
            Engineering & Algorithmic Practice.
          </h1>
          <p className="mt-4 text-[#9A9EAA] text-lg leading-relaxed">
            Continuous technical sharpening across computer science fundamentals, data structures, algorithm problem-solving, and applied AI experiments.
          </p>
        </div>

        {/* LeetCode & Competitive Programming Focus */}
        <div className="rounded-2xl border border-white/10 bg-[#10121A] p-8 lg:p-10 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-white/5 gap-6">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono text-accent-cyan">
                <Code2 className="w-4 h-4" />
                <span>PROBLEM SOLVING BENCHMARK</span>
              </div>
              <h2 className="font-heading font-bold text-2xl text-[#F5F5F7]">
                LeetCode Algorithmic Practice
              </h2>
              <p className="text-xs text-[#9A9EAA]">
                Active daily problem-solving covering core computational patterns in C++ and Python.
              </p>
            </div>

            <a
              href={PERSONAL_INFO.socials.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#141722] hover:bg-[#1A1E2D] border border-white/10 hover:border-accent-blue/40 text-xs font-mono text-white transition-all w-fit"
            >
              <span>View LeetCode Profile (@chetanx0007)</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-accent-cyan" />
            </a>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {DSA_TOPICS.map((item) => (
              <div
                key={item.topic}
                className="p-4 rounded-xl bg-[#141722] border border-white/5 space-y-2"
              >
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-white font-medium">{item.topic}</span>
                  <span className="text-[10px] text-[#58D8F0] px-2 py-0.5 rounded bg-white/5">
                    {item.status}
                  </span>
                </div>
                <p className="text-xs text-[#9A9EAA] leading-relaxed">
                  {item.notes}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* AI/ML Experiments Showcase */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono text-accent-blue uppercase tracking-widest">
            <span>// MACHINE LEARNING & INTELLIGENT SYSTEMS</span>
          </div>
          <h2 className="font-heading font-bold text-3xl text-[#F5F5F7]">
            Applied Machine Learning Experiments
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ML_EXPERIMENTS.map((exp) => (
              <div
                key={exp.title}
                className="rounded-2xl border border-white/10 bg-[#10121A] p-6 hover:border-accent-blue/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-mono text-accent-blue block mb-2">
                    {exp.tech}
                  </span>
                  <h3 className="font-heading font-bold text-lg text-white mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-xs text-[#9A9EAA] leading-relaxed">
                    {exp.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5">
                  <a
                    href={exp.link}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-[#58D8F0] hover:text-white transition-colors"
                  >
                    <span>Inspect Pipeline Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Systems Architecture Explorations */}
        <div className="rounded-2xl border border-white/10 bg-[#10121A] p-8 space-y-4">
          <h3 className="font-heading font-bold text-xl text-white">
            Architecture Log: Monolith vs Modular Edge Deployments
          </h3>
          <p className="text-xs sm:text-sm text-[#9A9EAA] leading-relaxed">
            In building the Shiva Glass Group commercial platform and transitioning the Resuone backend, key architectural observations emerged around serverless latency, edge cold starts, and database connection pooling in serverless environments. Future iterations for Resuone focus on containerized FastAPI microservices backed by connection-pooled PostgreSQL on managed clusters.
          </p>
          <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono text-[#5E6375]">
            <span className="px-2.5 py-1 rounded bg-white/5">#Architecture</span>
            <span className="px-2.5 py-1 rounded bg-white/5">#PostgreSQL</span>
            <span className="px-2.5 py-1 rounded bg-white/5">#EdgeComputing</span>
            <span className="px-2.5 py-1 rounded bg-white/5">#Serverless</span>
          </div>
        </div>
      </div>
    </div>
  );
}

