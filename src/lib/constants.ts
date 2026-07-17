export const DEFAULT_PIPELINE_STAGES = [
  { name: "Lead", position: 0, color: "#94a3b8", isWon: false, isLost: false },
  { name: "Qualified", position: 1, color: "#38bdf8", isWon: false, isLost: false },
  { name: "Proposal", position: 2, color: "#a78bfa", isWon: false, isLost: false },
  { name: "Negotiation", position: 3, color: "#fbbf24", isWon: false, isLost: false },
  { name: "Won", position: 4, color: "#34d399", isWon: true, isLost: false },
  { name: "Lost", position: 5, color: "#f87171", isWon: false, isLost: true },
] as const;

export const INVITE_EXPIRY_DAYS = 7;
