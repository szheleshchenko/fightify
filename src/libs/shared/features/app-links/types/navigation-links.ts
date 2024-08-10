type NavigationPath =
  | 'root'
  | 'news'
  | 'events'
  | 'fighters'
  | 'forum'
  | 'leaderboard'
  | 'profile'
  | 'login'
  | 'forgotPassword';

export type NavigationLinks = Record<NavigationPath, string>;
