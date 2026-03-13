# stark-burner

A burner wallet for Starknet devnet, built on `@starknet-start/react`.

## Installation

```bash
npm install @scaffold-stark/stark-burner
```

or

```bash
yarn add @scaffold-stark/stark-burner
```

### Peer Dependencies

- `@starknet-start/react` ^1.0.0
- `@starknet-start/chains` ^1.0.0
- `starknet` ^9.0.0

## Usage

```tsx
import { createBurnerWallet } from "@scaffold-stark/stark-burner";
import { devnet } from "@starknet-start/chains";
import { StarknetConfig } from "@starknet-start/react";

const burnerWallet = createBurnerWallet(devnet);

function App() {
  return (
    <StarknetConfig extraWallets={[burnerWallet]}>
      {/* your app */}
    </StarknetConfig>
  );
}
```

### Switching Burner Accounts

```ts
// Switch to a different pre-funded devnet account by index
burnerWallet.switchAccount(0); // first account
burnerWallet.switchAccount(3); // fourth account
```

### Available Exports

- `createBurnerWallet(chain?)` — creates a `MockWallet` configured with pre-funded devnet accounts
- `burnerAccounts` — array of pre-funded devnet account details (address, private key, public key)
- `burnerWalletId`, `burnerWalletName`, `burnerWalletIcon` — wallet metadata constants
- `BurnerConnectorError`, `BurnerConnectorErrorList` — error types

## License

MIT
