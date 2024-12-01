type NavigationPath =
  | 'root'
  | 'news'
  | 'events'
  | 'fighters'
  | 'forum'
  | 'leaderboard'
  | 'profile'
  | 'login'
  | 'register'
  | 'forgotPassword'
  | 'dashboard'
  | 'dashboardNews'
  | 'dashboardNewsEditor'
  | 'dashboardUsers';

export type NavigationLinks = Record<NavigationPath, string>;
