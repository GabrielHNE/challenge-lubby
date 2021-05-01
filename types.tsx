/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Repos: undefined;
  Seguidores: undefined;
  Seguindo: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type User = {
  login: string;
  name: string;
  email: string | null;
  location: string | null;
  company: string | null;
  bio: string | null;
  avatar_url: string;
  followers_url: string;
  following_url: string;
  organizations_url: string;
  starred_url: string;
  public_repos: string;
  public_gists: string;
  followers: number;
  following: number;
}

export type Repo = {
  name: string;
  description: string | null;
  stargazers_count: number | string;
  _private:  boolean;
}