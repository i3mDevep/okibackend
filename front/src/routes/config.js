import LoginScreen from '../views/login'
import ProductListScreen from '../views/products/products-list'
import ProductCreateScreen from '../views/products/products-create'
import ProviderScreen from '../views/providers'
import MarkScreen from '../views/marks'
import SideBarConfig from '../components/layout/sidebar';
import CardShopScreen from '../views/card-shop'
import SaleGlobalList from '../containers/sales/SaleGlobalList'
import HomeScreen from '../views/home'

export const settings = {
  path_default_access_restricted: "/",
  path_default_access_allow: "/app",
};


const Cm3 = () => <h1>perro</h1>;

 
const routes = [
  {
    name: 'Login',
    exact: true,
    path: '/',
    type_route: 'public',
    restricted: true,
    component: LoginScreen,
  },
  {
    name: 'Restablecer contraseña',
    path: '/app',
    type_route: 'private',
    layout: SideBarConfig,
    component: HomeScreen,
    routes: [
      {
        path: '/app/products',
        component: ProductListScreen,
        type_route: 'private',
        routes: [
          {
            path: '/app/products/detail/:id',
            component: Cm3,
            type_route: 'private',
          },
          {
            path: '/app/products/create',
            component: ProductCreateScreen,
            exact: true,
            type_route: 'private',
          },
        ]
      },
      {
        path: '/app/providers',
        component: ProviderScreen,
        exact: true,
        type_route: 'private',
      },
      {
        path: '/app/marks',
        component: MarkScreen,
        exact: true,
        type_route: 'private',
      },
      {
        path: '/app/card-shop',
        component: CardShopScreen,
        exact: true,
        type_route: 'private',
      },
      {
        path: '/app/sales',
        component: SaleGlobalList,
        exact: true,
        type_route: 'private',
      }
    ]
  },
]
export default routes