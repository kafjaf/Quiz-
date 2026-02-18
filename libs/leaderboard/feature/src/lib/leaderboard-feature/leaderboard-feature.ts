import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Avatar } from '@quiz-lock/shared-ui';
import { LeaderboardStore } from '@quiz-lock/leaderboard-data-access';

@Component({
  selector: 'ql-leaderboard-feature',
  standalone: true,
  imports: [CommonModule, Avatar],
  templateUrl: './leaderboard-feature.html',
  styleUrl: './leaderboard-feature.css',
})
export class LeaderboardFeature {
 readonly store = inject(LeaderboardStore);
}
