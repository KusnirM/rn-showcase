export type RootStackParamList = {
  Home: undefined;
  UiComponents: undefined;
};

// Type-safe navigation pre celú appku
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
