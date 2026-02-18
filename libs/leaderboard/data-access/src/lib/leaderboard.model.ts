export interface LeaderboardEntry {
  rank: number;
  pseudo: string;
  score: number;
  isMe?: boolean;
  avatarUrl?: string;
}