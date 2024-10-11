"use client";
import Dashboard from "./dashboard/layout";
import store from "../store/store";
import { Provider } from "react-redux";

export default function Home() {
  return (
    <Provider store={store}>
      <Dashboard />
    </Provider>
  );
}
