export const ownLogger = (store) => (next) => (action) => {
    store.getState();
    next(action);
    store.getState();
}