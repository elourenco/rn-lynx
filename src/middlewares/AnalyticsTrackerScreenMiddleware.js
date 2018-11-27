import { NavigationActions } from 'react-navigation';

const getActiveRouteName = navigationState => {
  if (!navigationState) {
    return null;
  }
  const route = navigationState.routes[navigationState.index];
  if (route.routes) {
    return getActiveRouteName(route);
  }
  return route.routeName;
};

export default store => next => action => {
  if (
    action.type !== NavigationActions.NAVIGATE
    && action.type !== NavigationActions.BACK
  ) {
    return next(action);
  }

  const currentScreen = getActiveRouteName(store.getState().navigation);
  const result = next(action);
  const nextScreen = getActiveRouteName(store.getState().navigation);
  if (nextScreen !== currentScreen) {
    // tracker.trackScreenView(nextScreen);
  }
  return result;
};
