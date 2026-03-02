import { Stage, StageData } from './types';

export const STAGES_DATA: Record<Stage, StageData> = {
  [Stage.WEALTH_FRONT_OFFICE]: {
    id: Stage.WEALTH_FRONT_OFFICE,
    persona: {
      title: 'RELATIONSHIP MANAGER',
      role: 'Client Interface',
      description: 'Onboarding and understanding client goals.'
    },
    investments: [
      { id: 'cash', label: 'CASH', color: 'cyan', pulseColor: 'cyan' },
      { id: 'savings', label: 'SAVINGS', color: 'blue', pulseColor: 'blue' }
    ],
    consulting: [
      {
        id: 'client-onboarding',
        title: 'DIGITAL ONBOARDING',
        subtitle: 'Streamlining UX',
        details: {
          stage: 'Wealth Front Office',
          diagnostic: 'High drop-off rates in manual onboarding.',
          solution: 'Automated KYC/AML integration with mobile-first UI.',
          impact: ['45% faster onboarding', '20% increase in conversion'],
          caseStudy: 'Global private bank digitized 10k+ accounts.'
        }
      }
    ],
    trends: [
      { id: 't1', text: 'TREND: Hyper-personalization is the new standard.' },
      { id: 't2', text: 'TREND: Mobile-first wealth apps growing 30% YoY.' }
    ]
  },
  [Stage.ASSET_ALLOCATION]: {
    id: Stage.ASSET_ALLOCATION,
    persona: {
      title: 'CHIEF INVESTMENT OFFICER',
      role: 'Portfolio Strategist',
      description: 'Optimizing the portfolio mix.'
    },
    investments: [
      { id: 'equities', label: 'EQUITIES', color: 'cyan', pulseColor: 'cyan' },
      { id: 'private-markets', label: 'PRIVATE MARKETS', color: 'magenta', pulseColor: 'magenta' },
      { id: 'esg', label: 'ESG', color: 'green', pulseColor: 'green' },
      { id: 'bonds', label: 'BONDS', color: 'blue', pulseColor: 'blue' }
    ],
    consulting: [
      {
        id: 'product-strategy',
        title: 'PRODUCT STRATEGY CONSULTING',
        subtitle: 'Private Markets Access',
        details: {
          stage: 'Asset Allocation Stage',
          diagnostic: 'Legacy wealth platform cannot handle alts.',
          solution: 'Hybrid Product Structuring Framework integrating PE/VC.',
          impact: ['30% reduction in time-to-market', 'Improved client onboarding'],
          caseStudy: 'Optimized alts access for global wealth manager.'
        }
      },
      {
        id: 'wealth-asset-integration',
        title: 'WEALTH-TO-ASSET INTEGRATION',
        subtitle: 'Connecting PM Systems',
        details: {
          stage: 'Asset Allocation Stage',
          diagnostic: 'Siloed data between front and middle office.',
          solution: 'Unified API layer for real-time portfolio visibility.',
          impact: ['Real-time data sync', 'Reduced operational risk'],
          caseStudy: 'Connected 5 legacy systems for a tier-1 firm.'
        }
      },
      {
        id: 'esg-framework',
        title: 'ESG FRAMEWORK DEVELOPMENT',
        subtitle: 'Navigating SFDR',
        details: {
          stage: 'Asset Allocation Stage',
          diagnostic: 'Regulatory compliance gaps in ESG reporting.',
          solution: 'Automated SFDR data collection and scoring engine.',
          impact: ['100% compliance audit trail', 'Enhanced ESG transparency'],
          caseStudy: 'Implemented SFDR framework for European fund.'
        }
      }
    ],
    trends: [
      { id: 't3', text: 'TREND: Democratization of Private Equity.' },
      { id: 't4', text: 'TREND: Direct Indexing adoption is rising.' }
    ]
  },
  [Stage.TRADING_EXECUTION]: {
    id: Stage.TRADING_EXECUTION,
    persona: {
      title: 'HEAD OF TRADING',
      role: 'Execution Specialist',
      description: 'Minimizing slippage and market impact.'
    },
    investments: [
      { id: 'algo', label: 'ALGORITHMIC', color: 'cyan', pulseColor: 'cyan' },
      { id: 'dark-pool', label: 'DARK POOLS', color: 'magenta', pulseColor: 'magenta' }
    ],
    consulting: [
      {
        id: 'execution-optimization',
        title: 'EXECUTION OPTIMIZATION',
        subtitle: 'Smart Order Routing',
        details: {
          stage: 'Trading & Execution',
          diagnostic: 'High transaction costs due to poor routing.',
          solution: 'AI-driven SOR with multi-venue connectivity.',
          impact: ['15bps savings on average', 'Reduced market impact'],
          caseStudy: 'Optimized execution for a large hedge fund.'
        }
      }
    ],
    trends: [
      { id: 't5', text: 'TREND: AI-driven execution is becoming mandatory.' },
      { id: 't6', text: 'TREND: Shift towards decentralized exchanges.' }
    ]
  },
  [Stage.REPORTING_REINVESTMENT]: {
    id: Stage.REPORTING_REINVESTMENT,
    persona: {
      title: 'CLIENT REPORTING HEAD',
      role: 'Transparency Lead',
      description: 'Closing the loop with insights.'
    },
    investments: [
      { id: 'performance', label: 'PERFORMANCE', color: 'green', pulseColor: 'green' },
      { id: 'tax', label: 'TAX EFFICIENCY', color: 'blue', pulseColor: 'blue' }
    ],
    consulting: [
      {
        id: 'reporting-automation',
        title: 'REPORTING AUTOMATION',
        subtitle: 'Real-time Insights',
        details: {
          stage: 'Reporting & Re-investment',
          diagnostic: 'Manual reporting takes weeks.',
          solution: 'Cloud-native reporting engine with dynamic dashboards.',
          impact: ['90% reduction in report generation time', 'Daily client updates'],
          caseStudy: 'Automated reporting for a multi-family office.'
        }
      }
    ],
    trends: [
      { id: 't7', text: 'TREND: Clients demand real-time transparency.' },
      { id: 't8', text: 'TREND: Tax-loss harvesting automation rising.' }
    ]
  }
};
