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
    <div className="pt-32 pb-24 min-h-screen bg-cosmos-void">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-soft uppercase tracking-widest">
            <span>// TECHNICAL LAB & DSA EXPLORATION</span>
          </div>
          <h1 className="font-heading font-black text-4xl sm:text-6xl lg:text-7xl text-silver-pure tracking-[-0.03em] leading-tight">
            Engineering & Algorithmic Practice.
          </h1>
          <p className="text-base sm:text-xl text-silver-muted font-light leading-relaxed">
            Continuous technical sharpening across computer science fundamentals, data structures, algorithm problem-solving, and applied AI experiments.
          </p>
        </div>

        {/* LeetCode & Competitive Programming Focus */}
        <div className="rounded-3xl border border-white/[0.08] bg-cosmos-card p-8 lg:p-12 shadow-2xl backdrop-blur-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-8 border-b border-white/[0.06] gap-6">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-soft">
                <Code2 className="w-4 h-4 text-indigo-bright" />
                <span>PROBLEM SOLVING BENCHMARK</span>
              </div>
              <h2 className="font-heading font-black text-2xl sm:text-3xl text-silver-pure tracking-tight">
                LeetCode Algorithmic Practice
              </h2>
              <p className="text-xs sm:text-sm text-silver-muted font-light">
                Active problem-solving covering core computational patterns in C++ and Python.
              </p>
            </div>

            <a
              href={PERSONAL_INFO.socials.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cosmos-elevated hover:bg-cosmos-elevated/80 border border-white/10 hover:border-cyan-soft/40 text-xs font-mono text-silver-pure transition-all w-fit"
            >
              <span>View LeetCode Profile (@chetanx0007)</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-cyan-soft" />
            </a>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {DSA_TOPICS.map((item) => (
              <div
                key={item.topic}
                className="p-5 rounded-2xl bg-cosmos-elevated/60 border border-white/[0.05] space-y-2.5"
              >
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-silver-pure font-medium">{item.topic}</span>
                  <span className="text-[10px] text-cyan-soft px-2 py-0.5 rounded bg-white/[0.05]">
                    {item.status}
                  </span>
                </div>
                <p className="text-xs text-silver-muted leading-relaxed font-light">
                  {item.notes}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* AI/ML Experiments Showcase */}
        <div className="space-y-8">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-indigo-bright uppercase tracking-widest">
              <span>// MACHINE LEARNING & INTELLIGENT SYSTEMS</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-silver-pure tracking-tight">
              Applied Machine Learning Experiments
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ML_EXPERIMENTS.map((exp) => (
              <div
                key={exp.title}
                className="rounded-3xl border border-white/[0.08] bg-cosmos-card p-7 hover:border-indigo-bright/40 transition-all flex flex-col justify-between backdrop-blur-md"
              >
                <div>
                  <span className="text-[11px] font-mono text-indigo-bright block mb-2">
                    {exp.tech}
                  </span>
                  <h3 className="font-heading font-bold text-lg text-silver-pure mb-2 tracking-tight">
                    {exp.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-silver-muted leading-relaxed font-light">
                    {exp.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.06]">
                  <a
                    href={exp.link}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-soft hover:text-white transition-colors"
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
        <div className="rounded-3xl border border-white/[0.08] bg-cosmos-card p-8 lg:p-10 space-y-4 backdrop-blur-md">
          <h3 className="font-heading font-bold text-xl text-silver-pure">
            Architecture Log: Monolith vs Modular Edge Deployments
          </h3>
          <p className="text-xs sm:text-sm text-silver-muted leading-relaxed font-light">
            In building the Shiva Glass Group commercial platform and transitioning the Resuone backend, key architectural observations emerged around serverless latency, edge cold starts, and database connection pooling in serverless environments. Future iterations for Resuone focus on containerized FastAPI microservices backed by connection-pooled PostgreSQL on managed clusters.
          </p>
          <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono text-silver-dark">
            <span className="px-3 py-1 rounded-lg bg-white/[0.04]">#Architecture</span>
            <span className="px-3 py-1 rounded-lg bg-white/[0.04]">#PostgreSQL</span>
            <span className="px-3 py-1 rounded-lg bg-white/[0.04]">#EdgeComputing</span>
            <span className="px-3 py-1 rounded-lg bg-white/[0.04]">#Serverless</span>
          </div>
        </div>
      </div>
    </div>
  );
}
