// public
const loadLoginPage = () =>
  import('./public/login/login.component').then((m) => m.LoginComponent);
const loadRegisterPage = () =>
  import('./public/register/register.component').then(
    (m) => m.RegisterComponent
  );

// features
const loadHomePage = () =>
  import('./features/home/home.component').then((m) => m.HomeComponent);
const loadRankingsPage = () =>
  import('./features/rankings/rankings.component').then(
    (m) => m.RankingsComponent
  );
const loadProfilePage = () =>
  import('./features/profile/profile.component').then(
    (m) => m.ProfileComponent
  );

const loadFeaturesPage = () =>
  import('./features/features.component').then((m) => m.FeaturesComponent);

const loadPublicPage = () =>
  import('./public/public.component').then((m) => m.PublicComponent);

export {
  loadHomePage,
  loadRankingsPage,
  loadProfilePage,
  loadLoginPage,
  loadRegisterPage,
  loadFeaturesPage,
  loadPublicPage,
};
