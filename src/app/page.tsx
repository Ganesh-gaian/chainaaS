"use client";
import Dashboard from "./dashboard/layout";
import { Provider } from "react-redux";
import store from "../store/store";

export default function Home() {
  return (
    <Provider store={store}>
      <Dashboard />
    </Provider>
  );
}
