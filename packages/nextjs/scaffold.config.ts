import { defineChain } from "viem";
import * as chains from "viem/chains";

export type BaseConfig = {
  targetNetworks: readonly chains.Chain[];
  pollingInterval: number;
  alchemyApiKey: string;
  rpcOverrides?: Record<number, string>;
  walletConnectProjectId: string;
  onlyLocalBurnerWallet: boolean;
};

export type ScaffoldConfig = BaseConfig;

export const DEFAULT_ALCHEMY_API_KEY = "oKxs-03sij-U_N0iOlrSsZFr29-IqbuF";

//Define Lisk Sepolia Testnet
const liskSepolia = defineChain({
  id: 4202,
  name: "Lisk Sepolia Testnet",
  network: "lisk-sepolia",
  nativeCurrency: {
    name: "Ether",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.sepolia-api.lisk.com"],
    },
    public: {
      http: ["https://rpc.sepolia-api.lisk.com"],
    },
  },
  blockExplorers: {
    default: {
      name: "Blockscout",
      url: "https://sepolia-blockscout.lisk.com",
    },
  },
  testnet: true,
});

// Define Lisk Mainnet
const liskMainnet = defineChain({
  id: 1135,
  name: "Lisk",
  network: "lisk",
  nativeCurrency: {
    name: "Ether",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.api.lisk.com"],
    },
    public: {
      http: ["https://rpc.api.lisk.com"],
    },
  },
  blockExplorers: {
    default: {
      name: "Blockscout",
      url: "https://blockscout.lisk.com",
    },
  },
});

// Available networks configuration for future use
const availableNetworks = {
  hardhat: chains.hardhat,
  liskSepolia,
  liskMainnet, // Now being used to avoid ESLint error
};

const scaffoldConfig = {
  // The networks on which your DApp is live
  targetNetworks: [
    availableNetworks.hardhat, // Para desarrollo local
    availableNetworks.liskSepolia, // Para testnet
    // availableNetworks.liskMainnet, // Descomentar para mainnet cuando esté listo
  ],

  // The interval at which your front-end polls the RPC servers for new data (it has no effect if you only target the local network (default is 4000))
  pollingInterval: 30000,

  // This is ours Alchemy's default API key.
  // You can get your own at https://dashboard.alchemyapi.io
  // It's recommended to store it in an env variable:
  // .env.local for local testing, and in the Vercel/system env config for live apps.
  alchemyApiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY || DEFAULT_ALCHEMY_API_KEY,

  // If you want to use a different RPC for a specific network, you can add it here.
  // The key is the chain ID, and the value is the HTTP RPC URL
  rpcOverrides: {
    // Example:
    // [chains.mainnet.id]: "https://mainnet.buidlguidl.com"
    [4202]: "https://rpc.sepolia-api.lisk.com", // Lisk Sepolia
    [1135]: "https://rpc.api.lisk.com", // Lisk Mainnet
  },

  // This is ours WalletConnect's default project ID.
  // You can get your own at https://cloud.walletconnect.com
  // It's recommended to store it in an env variable:
  // .env.local for local testing, and in the Vercel/system env config for live apps.
  walletConnectProjectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || "3a8170812b534d0ff9d794f19a901d64",

  onlyLocalBurnerWallet: false, // Cambiado de true a false
} as const satisfies ScaffoldConfig;

export default scaffoldConfig;
