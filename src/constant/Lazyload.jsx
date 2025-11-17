import { lazy } from "react";
import PageLoader from "../components/core/PageLoader";


export const HOME=PageLoader(
    lazy(()=>import('../Section/Home'))
);

export const ABOUT=PageLoader(
    lazy(()=>import('../Section/About'))
)


export const MainLayout=PageLoader(
    lazy(()=>import("../components/Layout/MainLayout"))
)



export const Projects=PageLoader(
    lazy(()=>import("../Section/Projects"))
)