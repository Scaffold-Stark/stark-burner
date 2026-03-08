import { MockWallet } from "@starknet-start/react";
import { Account, AccountInterface, RpcProvider } from "starknet";
import { Chain, devnet } from "@starknet-start/chains";
import { BurnerAccount, burnerAccounts } from "./devnetAccounts";

export const burnerWalletId = "burner-wallet";
export const burnerWalletName = "Burner Wallet";

function createAccountInstances(
  accounts: BurnerAccount[],
  chain: Chain,
): AccountInterface[] {
  const rpcUrl = chain.rpcUrls.public.http[0] || "http://127.0.0.1:5050/rpc";
  const provider = new RpcProvider({ nodeUrl: rpcUrl });

  return accounts.map(
    (acc) =>
      new Account({
        provider,
        address: acc.accountAddress,
        signer: acc.privateKey,
      }),
  );
}

export function createBurnerWallet(chain: Chain = devnet): MockWallet {
  const accountInstances = createAccountInstances(burnerAccounts, chain);

  return new MockWallet(
    {
      // MockWallet uses "sepolia" for any non-mainnet chain (including devnet)
      sepolia: accountInstances,
      mainnet: accountInstances,
    },
    {
      id: burnerWalletId,
      name: burnerWalletName,
    },
  );
}
