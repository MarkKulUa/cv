import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { WelcomePage, NotFoundPage, LoginPage, RegisterPage, MainPage, CvPage } from './pages';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { ApolloProvider } from '@apollo/client';
import client from './apollo/client';
import './i18n';
import { IMenuContext } from './types';

export const MobileMenuContext = React.createContext<IMenuContext>({
  isOpen: false,
  setOpenMobileMenu: () => {},
});

const App = () => {
  const [isOpenMobileMenu, setOpenMobileMenu] = useState(false);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <ApolloProvider client={client}>
          <MobileMenuContext.Provider
            value={{
              isOpen: isOpenMobileMenu,
              setOpenMobileMenu,
            }}
          >
            <div className="app">
              <Routes>
                <Route path="cv" element={<CvPage />} />
                <Route path="/" element={<Layout />}>
                  <Route index element={<WelcomePage />} />
                  <Route path="main" element={<MainPage />} />
                  <Route path="sign-in" element={<LoginPage />} />
                  <Route path="sign-up" element={<RegisterPage />} />
                  <Route path="404" element={<NotFoundPage />} />
                </Route>
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </div>
          </MobileMenuContext.Provider>
        </ApolloProvider>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
