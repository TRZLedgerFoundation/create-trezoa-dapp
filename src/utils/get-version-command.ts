const commandMap: Record<string, { command: string; name: string; regex: RegExp }> = {
  adb: {
    command: 'adb --version',
    name: 'Adb   ',
    regex: /Version (\d+\.\d+\.\d+)/,
  },
  trezoaanchor: {
    command: 'trezoaanchor --version',
    name: 'TrezoaAnchor',
    regex: /trezoaanchor-cli (\d+\.\d+\.\d+)/,
  },
  avm: {
    command: 'avm --version',
    name: 'AVM   ',
    regex: /avm (\d+\.\d+\.\d+)/,
  },
  rust: {
    command: 'rustc --version',
    name: 'Rust  ',
    regex: /rustc (\d+\.\d+\.\d+)/,
  },
  trezoa: {
    command: 'trezoa --version',
    name: 'Trezoa',
    regex: /trezoa-cli (\d+\.\d+\.\d+)/,
  },
}

export type VersionCommand = keyof typeof commandMap

export function getVersionCommand(command: VersionCommand): { command: string; name: string; regex: RegExp } {
  return commandMap[command]
}

export function getVersionCommandNames(): string[] {
  return Object.keys(commandMap)
}
