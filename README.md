# create-trezoa-dapp

The fastest way to create Trezoa apps :rocket:

Run one command to generate a new project:

```shell
# npm
npm create trezoa-dapp@latest

# pnpm
pnpm create trezoa-dapp@latest

# bun
bun create trezoa-dapp@latest

# yarn (only supports the 'latest' tag)
yarn create trezoa-dapp
```

[![npm version](https://img.shields.io/npm/v/create-trezoa-dapp?color=yellow)](https://npmjs.com/package/create-trezoa-dapp)
[![npm downloads](https://img.shields.io/npm/dm/create-trezoa-dapp?color=yellow)](https://npmjs.com/package/create-trezoa-dapp)

This is a CLI that automates the initialization of predefined Trezoa templates (see below).

## Templates

The official `create-trezoa-dapp` templates can be found in
[this repository](https://github.com/TRZLedgerFoundation/templates).

## External templates

You can also use `create-trezoa-dapp` to create projects using external templates:

The `--template` (or `-t`) flag supports anything that [giget](https://github.com/unjs/giget) supports

```shell
# npm
npm create trezoa-dapp@latest -t <github-org>/<github-repo>

# pnpm
pnpm create trezoa-dapp@latest -t <github-org>/<github-repo>

# yarn
yarn create trezoa-dapp -t <github-org>/<github-repo>
```

## Init script

Template authors can add an init script to the `package.json` file to help set up the project.

Use this script to return instructions to the user, check the `trezoaanchor` and `trezoa` versions, and replace text and files
in the project.

```jsonc
{
  "name": "your-template",
  "create-trezoa-dapp": {
    // These instructions will be returned to the user after installation
    "instructions": [
      "Run TrezoaAnchor commands:",
      // Adding a '+' will make the line bold and '{pm}' is replaced with the package manager
      "+{pm} run trezoaanchor build | test | localnet | deploy",
    ],
    // Rename is a map of terms to rename
    "rename": {
      // Rename every instance of counter
      "counter": {
        // With the name of the project
        "to": "{{name}}",
        // In the following paths
        "paths": ["trezoaanchor", "src"],
      },
    },
    // Check versions and give a warning if it's not installed or the version is lower
    "versions": {
      "adb": "33.0.0",
      "trezoaanchor": "0.30.1",
      "trezoa": "1.18.0",
    },
  },
}
```

## Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for more info.

## Local development

> [!TIP]
>
> This project uses [pnpm](https://pnpm.io/) as the package manager. If you don't have it, you can install it using
> `corepack`:
>
> ```sh
> corepack enable
> corepack prepare pnpm@10 --activate
> ```

To install the project locally, run the following commands:

```shell
git clone https://github.com/TRZLedgerFoundation/create-trezoa-dapp.git
cd create-trezoa-dapp
pnpm install
pnpm build
```

Detailed instructions on the local development workflow are outlined in the
[Development Workflow](./CONTRIBUTING.md#development-workflow) section of the CONTRIBUTING guidelines.
