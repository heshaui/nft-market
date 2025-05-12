// config.ts
import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { http } from "viem";
import {
	mainnet,
	optimism,
	polygon,
	sepolia,
  } from 'wagmi/chains';

// 2. WalletConnect 项目 ID
const projectId = "ba6959053c9d7ba9a364dab98d9fb4f0";

// 3. 配置 WAGMI
export const config = getDefaultConfig({
  appName: 'PLEDGE',
  projectId,
  chains: [
	mainnet,
	optimism,
	polygon,
	sepolia,],
  transports: {
    [sepolia.id]: http('https://sepolia.infura.io/v3/d8ed0bd1de8242d998a1405b6932ab33')
  },
  ssr: true
});
