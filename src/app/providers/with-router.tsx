import { BrowserRouter, Link, RouterProvider, createBrowserRouter } from "react-router-dom";


export const WithRouter = (component: () => React.ReactNode) => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: component(),
        },
        {
            path: "about",
            element: <div>About</div>,
        },
    ]);

    return (
        <BrowserRouter>
            <RouterProvider router={router}/>
        </BrowserRouter>
    )
}
