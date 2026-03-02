export enum Stage {
  WEALTH_FRONT_OFFICE = 'Wealth Management Front Office',
  ASSET_ALLOCATION = 'Asset Allocation',
  TRADING_EXECUTION = 'Trading & Execution',
  REPORTING_REINVESTMENT = 'Reporting & Re-investment'
}

export interface Persona {
  title: string;
  role: string;
  description: string;
}

export interface InvestmentType {
  id: string;
  label: string;
  color: string;
  pulseColor: string;
}

export interface ConsultingBlock {
  id: string;
  title: string;
  subtitle: string;
  details: {
    stage: string;
    diagnostic: string;
    solution: string;
    impact: string[];
    caseStudy: string;
  };
}

export interface Trend {
  id: string;
  text: string;
}

export interface StageData {
  id: Stage;
  persona: Persona;
  investments: InvestmentType[];
  consulting: ConsultingBlock[];
  trends: Trend[];
}
