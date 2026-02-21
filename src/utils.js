// utility functions shared across components
export const uid = () => Math.random().toString(36).substr(2,9);
export const cl = v => JSON.parse(JSON.stringify(v));
