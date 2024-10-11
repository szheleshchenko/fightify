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
  | 'dashboard';

export type NavigationLinks = Record<NavigationPath, string>;
