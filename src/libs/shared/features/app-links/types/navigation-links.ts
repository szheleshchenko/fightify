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
  | 'forgotPassword';

export type NavigationLinks = Record<NavigationPath, string>;
