// import {
//   ApplicationConfig,
//   provideBrowserGlobalErrorListeners, isDevMode,
// } from '@angular/core';
// import { provideRouter } from '@angular/router';
// import { appRoutes } from './app.routes';
// import { provideServiceWorker } from '@angular/service-worker';
// import { AlertTriangle, ChevronRight, Crown, Gem, Info, Share2, Timer, Trophy, Zap } from 'lucide-angular';

// export const appConfig: ApplicationConfig = {
//   providers: [provideBrowserGlobalErrorListeners(), provideRouter(appRoutes), provideServiceWorker('ngsw-worker.js', {
//             enabled: !isDevMode(),
//             registrationStrategy: 'registerWhenStable:30000'
//           }), provideServiceWorker('ngsw-worker.js', {
//             enabled: !isDevMode(),
//             registrationStrategy: 'registerWhenStable:30000'
//           }),
//               provideLucideIcons({ Zap, Timer, Trophy, Share2, Crown, Gem, ChevronRight, Info, AlertTriangle })
//         ],
// };

import { ApplicationConfig, importProvidersFrom, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideServiceWorker } from '@angular/service-worker';
// ✅ Importation propre depuis la racine
import { 
  LucideAngularModule, 
  Zap, 
  Timer, 
  Trophy, 
  Share2, 
  Crown, 
  Gem, 
  Info, 
  AlertTriangle, 
  ChevronRight,
  User,
  Linkedin,
  Facebook,
  Instagram,
  Send,
  MessageCircle,
  Users,
  ExternalLink,
  BarChart3,
  Target,

} from 'lucide-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000'
    }),
    // ✅ On déclare les icônes ici
    importProvidersFrom(
      LucideAngularModule.pick({ 
        Zap, 
        Timer, 
        Trophy, 
        Share2, 
        Crown, 
        Gem, 
        Info, 
        AlertTriangle, 
        ChevronRight, 
        User, 
        Linkedin,
        ExternalLink,
        Facebook,
        Instagram,
        Send,
        MessageCircle,
        Users,
        BarChart3,
        Target
      })
    )
  ],
};