import client from "./client";

export const getExchanges = () => client.get("/exchanges");
