import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProductsPage } from "./pages/ProductsPage";
import { ProductPage } from "./pages/ProductPage";
import { ErrorPage } from "./pages/ErrorPage";
import { HomePage } from "./pages/HomePage";
import { lazy, Suspense } from "react";
import App from "./App";
const AdminPage = lazy(() => import('./pages/AdminPage'));

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: 'products',
                element: <ProductsPage />,
            },
            {
                path: 'admin',
                element: (
                <Suspense 
                    fallback={<div className="text-center p-5 text-xl text-slate-900">Loading ...</div>}>
                    <AdminPage />
                </Suspense>
                ),
            },
            {
                path: 'products/:id',
                element: <ProductPage />,
            },
        ],
    },
]);

export function Routes() {
    return <RouterProvider router={router} />
}