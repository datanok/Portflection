"use client";

import { SessionProvider } from "next-auth/react";
import { Provider } from 'react-redux'
import store from "./redux/store";

const Providers = ({ children, session }) => (
  <Provider store={store}>
    <SessionProvider session={session}>{children}</SessionProvider>
  </Provider>
);

export default Providers;
