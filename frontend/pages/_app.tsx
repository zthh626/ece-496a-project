import "../styles/globals.css";
import type { AppProps } from "next/app";
import { WagmiConfig, createClient } from "wagmi";
import { getDefaultProvider } from "ethers";
function MyApp({ Component, pageProps }: AppProps) {
  const client = createClient({
    autoConnect: true,
    provider: getDefaultProvider(),
  });

  return (
    <WagmiConfig client={client}>
      <Component {...pageProps} />
    </WagmiConfig>
  );
}
export default MyApp;
