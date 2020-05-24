import "styles/main.scss";
import Layout from "components/Layout";
import pkg from "../../package.json";
import withApollo from "../../server/gql/withApollo";
import { MDXProvider, MDXProviderProps, ComponentType } from "@mdx-js/react";
import { createContext, useEffect } from "react";
import tailwindConfig from "../../tailwind.config";
import NextNprogress from "nextjs-progressbar";
import { ApolloProvider } from "@apollo/react-hooks";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../styles/theme";
declare global {
  interface Window {
    ethereum: { enable; selectedAddress };
  }
}

interface IAppContext {
  name?: string;
  theme: typeof tailwindConfig;
  ethereum?: typeof window.ethereum;
  ethAddress?: string;
}

export const AppContext = createContext<IAppContext>({
  name: pkg.name,
  theme: tailwindConfig,
});
function MyApp({ Component, pageProps, apollo, router }) {
  return (
    <ThemeProvider theme={theme}>
      <MDXProvider
        components={
          {
            wrapper: Layout,
          } as any
        }
      >
        <ApolloProvider client={apollo}>
          <AppContext.Provider
            value={{
              name: pkg.name,
              theme: tailwindConfig,
            }}
          >
            <NextNprogress
              color={"#29D"}
              startPosition={0.5}
              stopDelayMs={200}
              height={3}
            />
            <Component key={router.route} {...pageProps} />
          </AppContext.Provider>
        </ApolloProvider>
      </MDXProvider>
    </ThemeProvider>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default withApollo(MyApp);
