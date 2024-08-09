import { LoadComponent } from "@/shared/components/load_component";
import { ERouterPath } from "@/shared/enum/route";
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const MainPage = LoadComponent(lazy(async () => import("@/pages/main")));

export const route = createBrowserRouter([
    {
        path: ERouterPath.MAIN,
        element: <MainPage/>
    }
])