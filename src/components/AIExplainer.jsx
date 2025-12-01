import React from 'react';
import { Bot, Network } from 'lucide-react';

const AIExplainer = () => {
    return (
        <section id="ai-agents" className="py-20 bg-background">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">AI Agents vs. Agentic AI</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Understanding the evolution from single-task automation to autonomous, collaborative intelligence.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                    {/* AI Agents Card */}
                    <div className="bg-gradient-to-br from-blue-900/20 to-background-card p-8 rounded-2xl border border-blue-500/20">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-14 h-14 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center shadow-lg shadow-blue-900/20">
                                <Bot size={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-white">What is an AI Agent?</h3>
                        </div>
                        <ul className="space-y-4 text-gray-400">
                            <li className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2" />
                                <span><strong>Autonomous Tasks:</strong> Can perform specific actions without constant human oversight.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2" />
                                <span><strong>Tool Usage:</strong> Capable of using defined tools (APIs, search) to complete goals.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2" />
                                <span><strong>Workflow Driven:</strong> Follows a set of instructions or a decision tree.</span>
                            </li>
                        </ul>
                    </div>

                    {/* Agentic AI Card */}
                    <div className="bg-gradient-to-br from-secondary/10 to-background-card p-8 rounded-2xl border border-secondary/20 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-3xl" />
                        <div className="flex items-center gap-4 mb-6 relative z-10">
                            <div className="w-14 h-14 rounded-xl bg-secondary/20 text-secondary flex items-center justify-center shadow-lg shadow-secondary/20">
                                <Network size={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-white">What is Agentic AI?</h3>
                        </div>
                        <ul className="space-y-4 text-gray-400 relative z-10">
                            <li className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2" />
                                <span><strong>Multi-Agent Collaboration:</strong> Systems where multiple agents interact to solve complex problems.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2" />
                                <span><strong>Orchestration:</strong> Dynamic management of resources and sub-agents.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2" />
                                <span><strong>Continuous Learning:</strong> Adapts strategies based on feedback loops and outcomes.</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Comparison Table */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-white/10">
                                <th className="py-4 px-6 text-sm font-bold text-gray-500 uppercase tracking-wider">Feature</th>
                                <th className="py-4 px-6 text-sm font-bold text-gray-500 uppercase tracking-wider">Traditional AI</th>
                                <th className="py-4 px-6 text-sm font-bold text-blue-400 uppercase tracking-wider">AI Agents</th>
                                <th className="py-4 px-6 text-sm font-bold text-secondary uppercase tracking-wider">Agentic AI</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm text-gray-400">
                            <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                <td className="py-4 px-6 font-medium text-white">Autonomy</td>
                                <td className="py-4 px-6">None (Human driven)</td>
                                <td className="py-4 px-6">Task-level</td>
                                <td className="py-4 px-6 font-semibold text-secondary">System-level</td>
                            </tr>
                            <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                <td className="py-4 px-6 font-medium text-white">Decision Making</td>
                                <td className="py-4 px-6">Rule-based / Pattern</td>
                                <td className="py-4 px-6">Goal-oriented</td>
                                <td className="py-4 px-6 font-semibold text-secondary">Strategic & Adaptive</td>
                            </tr>
                            <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                <td className="py-4 px-6 font-medium text-white">Integration</td>
                                <td className="py-4 px-6">Isolated</td>
                                <td className="py-4 px-6">Tool-connected</td>
                                <td className="py-4 px-6 font-semibold text-secondary">Ecosystem-aware</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default AIExplainer;
