import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Avatar } from '@quiz-lock/shared-ui';
import { LeaderboardStore } from '@quiz-lock/leaderboard-data-access';
import { LucideAngularModule } from 'lucide-angular'; 


@Component({
  selector: 'ql-leaderboard-feature',
  standalone: true,
  imports: [CommonModule, Avatar, LucideAngularModule],
  templateUrl: './leaderboard-feature.html',
  styleUrl: './leaderboard-feature.css',
})
export class LeaderboardFeature {
 readonly store = inject(LeaderboardStore);
}
