declare type RootState = ReturnType<typeof import("./index").store.getState>;
declare type AppDispatch = ReturnType<typeof import(".index").store.dispatch>;