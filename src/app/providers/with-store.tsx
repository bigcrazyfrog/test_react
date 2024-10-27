import { Provider } from "react-redux";
import { store } from '../store';
import React, {ComponentType } from "react";

export const WithStore = (component: () => React.ReactNode) => {
    return (
        <Provider store={store}>{component()}</Provider>
    )
}

