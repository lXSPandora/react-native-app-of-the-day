import { FluidNavigator } from 'react-navigation-fluid-transitions'

import AppDetails from './components/AppDetails'
import AppList from './components/AppList'

export const ROUTE_NAMES = {
  LIST: 'LIST',
  DETAILS: 'DETAILS',
}

export const Router = FluidNavigator(
  {
    [ROUTE_NAMES.LIST]: {
      screen: AppList,
    },
    [ROUTE_NAMES.DETAILS]: {
      screen: AppDetails,
    },
  },
  {
    initialRouteName: ROUTE_NAMES.LIST,
  },
)
