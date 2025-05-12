// config.ts
import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { Chain, http } from "viem";

// 2. WalletConnect 项目 ID
const projectId = "ba6959053c9d7ba9a364dab98d9fb4f0";

// 3. 配置 WAGMI
export const config = getDefaultConfig({
  appName: 'PLEDGE',
  projectId,
  chains: [bscMainnet, bscTestnet],
  transports: {
    [bscMainnet.id]: http(bscMainnet.rpcUrls.default.http[0]),
    [bscTestnet.id]: http(bscTestnet.rpcUrls.default.http[0]),
  },
  ssr: true
});

export const defaultChainId = bscMainnet.id
