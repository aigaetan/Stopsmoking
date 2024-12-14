export interface Challenge {
  id: number;
  title: string;
  description: string;
  durationHours: number;
  completed: boolean;
  reward: number;
}

export const challenges: Challenge[] = [
  {
    id: 1,
    title: "First Hour",
    description: "Stay smoke-free for one hour",
    durationHours: 1,
    completed: false,
    reward: 0.5
  },
  {
    id: 2,
    title: "Morning Victory",
    description: "Don't smoke for the first 3 hours after waking up",
    durationHours: 3,
    completed: false,
    reward: 1.5
  },
  {
    id: 3,
    title: "Half Day Champion",
    description: "Complete 12 hours without smoking",
    durationHours: 12,
    completed: false,
    reward: 6
  },
  {
    id: 4,
    title: "24 Hour Milestone",
    description: "Stay smoke-free for a full day",
    durationHours: 24,
    completed: false,
    reward: 15
  }
];