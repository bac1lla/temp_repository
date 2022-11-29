import {
    ADMIN_ROUTE,
    BASKET_ROUTE,
    DEVICE_ROUTE, FIRSTPAGE,
    FIRTHPAGE,
    LAB_ROUTE,
    REGISTRATION_ROUTE, RESPAGE, SECONDPAGE,
    SHOP_ROUTE, THIRDPAGE
} from "./utils/consts";
// import Admin from "./pages/Admin";
// import Basket from "./pages/Basket";
// import Shop from "./pages/Shop";
import Auth from "./pages/Auth";
import Lab from "./pages/Lab";
import First from "./pages/First"
import Second from "./pages/Second";
import SecondPage from "./pages/Second";
import Third from "./pages/Third";
import Res from "./pages/Res";
// import DevicePage from "./pages/DevicePage";

export const authRoutes = [
    // {
    //     path: ADMIN_ROUTE,
    //     Component: <Admin />
    // },
    // {
    //     path: BASKET_ROUTE,
    //     Component: <Basket />
    // },
]

export const publicRoutes = [
    // {
    //     path: SHOP_ROUTE,
    //     Component: <Shop />
    // },
    // {
    //     path: LOGIN_ROUTE,
    //     Component: <Auth />
    // },
    {
        path: REGISTRATION_ROUTE,
        Component: <Auth />
    },
    {
        path: LAB_ROUTE,
        Component: <Lab />
    },
    {
        path: FIRSTPAGE,
        Component: <First />
    },
    {
        path: SECONDPAGE,
        Component: <SecondPage />
    },
    {
        path: THIRDPAGE,
        Component: <Third />
    },
    {
        path: FIRSTPAGE,
        Component: <Lab />
    },
    {
        path: FIRSTPAGE,
        Component: <Lab />
    },
    {
        path: RESPAGE,
        Component: <Res />
    },

    // {
    //     path: DEVICE_ROUTE + '/:id',
    //     Component: <DevicePage />
    // },
]