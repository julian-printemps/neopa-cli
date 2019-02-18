# Neopa boilerplate CLI

This is the command-line interface for Neopa Boilerplate. It downloads and installs blank templates in any of the two Neopa Nuxt.js frameworks:

- [Neopa Boilerplate - Basic](https://gitlab.neopa.jp/neopa/neopa-boilerplate-foundation)
- [Neopa Boilerplate - Admin](https://gitlab.neopa.jp/neopa/neopa-admin-boilerplate)

## Requirements

You'll need the following software installed to get started.

  * [Node.js](http://nodejs.org) 0.12+: Use the installer provided on the NodeJS website.
    * With Node installed, run `[sudo] npm install -g gulp bower`.
  * [Git](http://git-scm.com/downloads): Use the installer for your OS.
    * Windows users can also try [Git for Windows](http://git-for-windows.github.io/).

## Installing

The Neopa Boilerplate CLI is installed through npm.

```bash
npm install -g neopa-cli
```

This will add the `neopa` command to your system.

### Updating

The CLI periodically gets updates that add features or fix bugs. Use npm to upgrade the CLI to the newest version.

```bash
npm update -g neopa-cli
```

To check what version you currently have, use `-v`.

```bash
neopa -v
```

## Commands

### New

Starts the setup process for a new Neopa Boilerplate project. The CLI will ask you which framework you want to use and a folder name for the project.

```bash
neopa new
```

### Watch

While inside of your app's folder, use the `npm run dev` command to assemble your app and run a test server.

```bash
cd appName
npm run dev
```

While this process is running, you can view the assembled app in your browser, at this URL:

```
http://localhost:3000
```

### Build

To build your app for production, use `npm run build`.

```bash
npm run build
```

### Generate

To build your pre-rendered app for production, use `npm run generate`.

```bash
npm run generate
```

### Update

Updates your packages, which includes Neopa Boilerplate. Run this command when you want to update an existing project to the newest version of Neopa Boilerplate.

```bash
neopa update
```

### Help

Lists all available commands in the CLI.

```bash
neopa help
```
