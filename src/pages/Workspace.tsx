import { Pill } from '../components/ui/Pill';
import { Stepper } from '../components/ui/Stepper';
import type { Step } from '../components/ui/Stepper';
import { Button } from '../components/ui/Button';

export default function Workspace() {
  const steps: Step[] = [
    {
      id: '1',
      status: 'done',
      title: 'Precedent Search',
      time: '0.4s',
      description: 'Scanned 14 similar California creative MSAs',
      tags: ['Standard: High Affinity', 'Tech & Design Focus']
    },
    {
      id: '2',
      status: 'done',
      title: 'Clause Extraction',
      time: '0.9s',
      description: (
        <div>
          34 clauses categorized into semantic taxonomy
          <div className="w-full h-1 bg-surface-dim rounded-full mt-2 overflow-hidden">
            <div className="w-full h-full bg-accent-primary"></div>
          </div>
        </div>
      ),
    },
    {
      id: '3',
      status: 'warning',
      title: 'Risk Assessment',
      pill: <Pill className="text-[10px] bg-risk-high-surface text-risk-high-text border-transparent h-5 py-0 px-2">High Priority</Pill>,
      description: (
        <div className="space-y-2">
          <div className="font-semibold text-risk-high-text">3 high-risk clauses detected & flagged</div>
          <ul className="list-disc pl-4 space-y-1">
            <li>Sec 8.2 Indemnity Ceiling — Uncapped</li>
            <li>Sec 11.4 Non-Solicitation — 24 Months (Aggressive)</li>
          </ul>
        </div>
      ),
    },
    {
      id: '4',
      status: 'active',
      title: 'Counter-Offer Negotiation',
      pill: <Pill className="text-[10px] bg-surface-container-high border-transparent h-5 py-0 px-2">Active</Pill>,
      description: (
        <div>
          Drafting friendly concession rationale & fallback terms
          <div className="text-[11px] text-ink-subdued mt-1">● Synthesizing Acme's past negotiation tolerance…</div>
        </div>
      ),
    }
  ];

  return (
    <div className="flex-1 flex flex-col h-[calc(100vh-73px)]">
      {/* Header Bar */}
      <div className="px-6 py-4 border-b border-gray-100 bg-white flex flex-col md:flex-row md:items-center justify-between gap-4 flex-shrink-0 z-10" style={{ boxShadow: '0 1px 3px 0 rgba(31,36,33,0.04)' }}>
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-surface-container-low rounded-xl flex items-center justify-center text-accent-primary">
            <span className="material-symbols-outlined">description</span>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h1 className="text-headline-sm text-ink-heavy">Master Services Agreement (MSA) — Acme Studios v2.4.docx</h1>
              <Pill className="text-[10px] h-5 py-0 px-2 border-none shadow-sm animate-pulse"><span className="w-1.5 h-1.5 bg-accent-primary rounded-full mr-1.5 inline-block" /> ANALYZING COUNTERPARTY CHANGES</Pill>
            </div>
            <div className="text-label-sm text-ink-subdued uppercase tracking-wider">
              Jurisdiction: California (US) · Updated 14m ago · Session ID: #RD-9942
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm">⬇ Download Redline</Button>
          <Button variant="primary" size="sm">↗ Share with Client</Button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden relative">
        {/* Left: Chat Thread (Fluid) */}
        <div className="flex-1 flex flex-col h-full bg-background overflow-hidden relative">
          <div className="flex-shrink-0 px-6 py-3 flex items-center justify-between text-label-sm font-semibold border-b border-gray-200/50 bg-white/50 backdrop-blur-sm z-10">
            <span className="flex items-center gap-2 text-ink-body"><span className="material-symbols-outlined text-[16px]">lock</span> Encrypted Legal Agent Thread (Model: Redline-v3-Core)</span>
            <span className="text-accent-primary">Confidence Index: 98.4%</span>
          </div>
          
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            <div className="flex items-center justify-center">
              <span className="bg-surface-container-high px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-ink-subdued">TODAY • 11:24 AM</span>
            </div>

            {/* User Message */}
            <div className="flex flex-col items-end">
              <div className="text-label-sm text-ink-subdued mb-1">Maya Lin — Design Principal</div>
              <div className="bg-accent-faint-wash text-ink-body p-4 rounded-2xl rounded-tr-sm max-w-2xl border border-accent-pale-wash shadow-sm text-body-lg leading-relaxed">
                Client pushed back on Section 8.2 (Liability Cap). They want uncapped indemnity for confidentiality breaches. How do we respond without souring the deal?
              </div>
              <div className="text-[11px] text-ink-subdued mt-1">11:25 AM · Delivered</div>
            </div>

            {/* Agent Message */}
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded bg-accent-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-[14px]">smart_toy</span>
                </div>
                <span className="text-label-sm font-semibold text-ink-heavy">REDLINE Counsel AI — Agent</span>
              </div>
              
              <div className="bg-white border border-gray-200 p-5 rounded-2xl rounded-tl-sm max-w-3xl shadow-sm space-y-4">
                <div className="bg-risk-high-surface border border-risk-high-outline p-4 rounded-xl flex gap-3">
                  <span className="material-symbols-outlined text-risk-high-text flex-shrink-0">warning</span>
                  <div>
                    <div className="font-bold text-label-sm text-risk-high-text uppercase tracking-widest mb-1">HIGH EXPOSURE DETECTED</div>
                    <div className="text-body-sm text-risk-high-text/90">Uncapped indemnity creates unlimited financial exposure for your freelance studio. A single accidental data disclosure could legally compromise all your personal and corporate assets.</div>
                  </div>
                </div>

                <div className="text-body-md text-ink-body leading-relaxed">
                  I reviewed 14 comparable California design contracts in our knowledge base. Acme Studios routinely accepts a standard multiple cap when framed as an insurance underwriting limitation. Here are two compromise structures that protect your studio while keeping negotiation tone constructive:
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Option A */}
                  <div className="border-2 border-accent-primary bg-accent-faint-wash rounded-xl p-4 cursor-pointer relative">
                    <div className="absolute top-4 right-4 w-4 h-4 rounded-full border-4 border-accent-primary bg-white"></div>
                    <div className="font-semibold text-body-md text-ink-heavy mb-2 pr-6">Option A: 3x Fee Cap <span className="ml-2 text-[10px] bg-accent-primary text-white px-2 py-0.5 rounded uppercase tracking-wider font-bold">Recommended</span></div>
                    <p className="text-body-sm text-ink-subdued mb-4">Industry standard for mid-sized commercial agencies. Ties total legal exposure strictly to aggregate project invoicing ($48,000 max).</p>
                    <div className="text-label-sm font-semibold text-accent-primary">92% Acceptance Rate &rarr;</div>
                  </div>
                  {/* Option B */}
                  <div className="border border-gray-200 bg-white rounded-xl p-4 cursor-pointer hover:border-accent-muted-tint transition-colors relative">
                    <div className="absolute top-4 right-4 w-4 h-4 rounded-full border-2 border-gray-300"></div>
                    <div className="font-semibold text-body-md text-ink-heavy mb-2 pr-6">Option B: Fixed $50k Cap <span className="ml-2 text-[10px] bg-surface-container-high text-ink-subdued px-2 py-0.5 rounded uppercase tracking-wider font-bold">Defensive Hedge</span></div>
                    <p className="text-body-sm text-ink-subdued mb-4">Mutual fixed liability ceiling for both parties, coupled with a strict gross negligence carveout definition.</p>
                    <div className="text-label-sm font-semibold text-ink-body">78% Acceptance Rate &rarr;</div>
                  </div>
                </div>

                {/* Proposed Counter-Language */}
                <div className="border border-accent-pale-wash bg-surface-bright rounded-xl p-4">
                  <div className="flex items-center justify-between mb-3 border-b border-gray-100 pb-3">
                    <span className="font-semibold text-body-sm uppercase tracking-wider text-ink-body">Proposed Counter-Language (Section 8.2)</span>
                    <Pill className="text-[10px] h-5 py-0 px-2 bg-accent-muted-tint border-none text-accent-deep">Ready to apply</Pill>
                  </div>
                  <div className="text-legal-contract text-ink-body space-y-2 mb-4">
                    <span className="bg-risk-high-surface text-risk-high-text line-through">In no event shall either party's liability for confidentiality breaches be limited.</span>
                    <span className="bg-risk-low-surface text-risk-low-text underline decoration-2 underline-offset-4 ml-1">In no event shall either party's cumulative liability under this Agreement exceed three times (3x) the total aggregate fees received by Contractor in the twelve (12) months preceding the claim.</span>
                  </div>
                  <div className="flex items-center gap-2 text-label-sm text-accent-primary mb-4 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-primary" /> Directly preserves current professional liability insurance cover.
                  </div>
                  <Button variant="primary" className="w-full">✓ 1-Click Apply to Contract</Button>
                </div>

                {/* Counter-note script */}
                <div className="bg-surface-container-low p-3 rounded-lg flex items-center justify-between">
                  <div className="flex items-center gap-2 text-body-sm text-ink-body">
                    <span className="material-symbols-outlined text-[18px] text-ink-subdued">mail</span>
                    Friendly email concession note drafted for Acme's procurement team
                  </div>
                  <button className="text-label-sm font-semibold text-accent-primary hover:underline">Copy Pitch Note</button>
                </div>

                <div className="text-[11px] text-ink-subdued uppercase tracking-wider mt-2 border-t border-gray-100 pt-3">
                  Agent evaluated in 1.8 seconds • High Reliability
                </div>
              </div>
            </div>
            
            {/* Scroll anchor */}
            <div className="h-4"></div>
          </div>

          {/* Quick Prompts & Input Bar */}
          <div className="p-4 bg-white border-t border-gray-200 z-10 flex-shrink-0">
            <div className="flex items-center gap-2 mb-3 overflow-x-auto pb-1 no-scrollbar">
              <button className="flex-shrink-0 bg-surface-container-low hover:bg-surface-container-high text-ink-body text-body-sm px-3 py-1.5 rounded-full border border-gray-200 transition-colors whitespace-nowrap">+ Request 50% deposit</button>
              <button className="flex-shrink-0 bg-surface-container-low hover:bg-surface-container-high text-ink-body text-body-sm px-3 py-1.5 rounded-full border border-gray-200 transition-colors whitespace-nowrap flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">balance</span> Add kill-fee clause</button>
              <button className="flex-shrink-0 bg-surface-container-low hover:bg-surface-container-high text-ink-body text-body-sm px-3 py-1.5 rounded-full border border-gray-200 transition-colors whitespace-nowrap flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">motion_photos_on</span> Clarify IP transfer on payment</button>
            </div>
            
            <div className="relative flex items-center bg-surface-bright border border-accent-muted-tint rounded-xl p-2 focus-within:ring-4 focus-within:ring-accent-pale-wash focus-within:border-accent-primary transition-all shadow-sm">
              <div className="flex gap-1 pr-2 border-r border-gray-200 mr-2">
                <button className="p-2 text-ink-subdued hover:text-ink-heavy transition-colors rounded-lg"><span className="material-symbols-outlined text-[20px]">attach_file</span></button>
                <button className="p-2 text-ink-subdued hover:text-ink-heavy transition-colors rounded-lg"><span className="material-symbols-outlined text-[20px]">tune</span></button>
              </div>
              <input 
                type="text" 
                placeholder="Instruct agent to rephrase, add fallback terms, or simulate counterparty rebuttal…" 
                className="flex-1 bg-transparent border-none focus:outline-none text-body-md text-ink-body placeholder-ink-subdued/60"
              />
              <div className="text-[10px] text-ink-subdued uppercase font-semibold mr-3 hidden sm:block">Press Shift + Enter for new line</div>
              <button className="w-10 h-10 rounded-full bg-accent-primary hover:bg-accent-deep text-white flex items-center justify-center transition-colors shadow-sm flex-shrink-0">
                <span className="material-symbols-outlined text-[18px]">arrow_upward</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right: Sidebar (Fixed) */}
        <div className="w-full md:w-[380px] bg-surface-bright border-l border-gray-200 overflow-y-auto flex flex-col flex-shrink-0">
          <div className="p-6 pb-4 border-b border-gray-100 bg-white sticky top-0 z-10">
            <h2 className="text-headline-sm text-ink-heavy flex items-center justify-between mb-1">
              Autonomous Review Pipeline
              <Pill className="text-[10px] bg-surface-container-high border-none">● Step 4 of 4</Pill>
            </h2>
            <p className="text-body-sm text-ink-subdued">Real-time workflow execution</p>
          </div>
          
          <div className="p-6">
            <Stepper steps={steps} className="mb-8" />
            <div className="flex items-center gap-2 text-label-sm font-semibold text-accent-primary bg-accent-faint-wash p-3 rounded-lg border border-accent-pale-wash mb-8">
              <span className="material-symbols-outlined text-[18px]">shield</span>
              Studio Defense Shield — Active & Enforced
            </div>

            {/* Financial Exposure Defense Card */}
            <div className="bg-accent-deep text-white rounded-xl p-6 mb-6 relative overflow-hidden" style={{ boxShadow: '0 4px 6px -1px rgba(31,36,33,0.06)' }}>
              <div className="relative z-10">
                <div className="text-display mb-1">$85,000</div>
                <div className="text-body-sm text-accent-muted-tint mb-6">Estimated Potential Liability Reduction</div>
                
                <div className="h-12 w-full flex items-end gap-1 mb-4">
                  <div className="w-1/2 bg-risk-high-text/80 h-full rounded-sm relative group cursor-pointer">
                    <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-ink-heavy text-white text-[10px] whitespace-nowrap px-2 py-1 rounded">Original Draft ($133k Max Risk)</div>
                  </div>
                  <div className="w-1/2 bg-accent-primary h-[36%] rounded-sm relative group cursor-pointer">
                    <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-ink-heavy text-white text-[10px] whitespace-nowrap px-2 py-1 rounded">After Redline ($48k Cap)</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-4">
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-accent-muted-tint mb-1">CLAUSES CLEARED</div>
                    <div className="text-body-lg font-semibold">31/34</div>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-accent-muted-tint mb-1">REVIEW VELOCITY</div>
                    <div className="text-body-lg font-semibold">8.2x Faster</div>
                  </div>
                </div>
              </div>
              <span className="material-symbols-outlined absolute -right-4 -bottom-4 text-[100px] text-white opacity-5 pointer-events-none">security</span>
            </div>

            {/* Counterparty Tendency */}
            <div className="bg-white border border-gray-200 rounded-xl p-4 flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center font-bold text-ink-subdued text-sm">AS</div>
                <div>
                  <div className="font-semibold text-body-sm">Acme Studios Legal Dept</div>
                  <div className="text-[11px] text-ink-subdued uppercase tracking-wider">Counterparty Tendency: Moderate / Rational</div>
                </div>
              </div>
              <span className="material-symbols-outlined text-ink-subdued">description</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
