import { VersionCommand } from './get-version-command'

type VersionUrls = {
  install?: string
  update?: string
}

const urls: Record<VersionCommand, VersionUrls> = {
  adb: {
    install:
      'https://docs.expo.dev/get-started/set-up-your-environment/?platform=android&device=physical&mode=development-build&buildEnv=local',
  },
  trezoaanchor: {
    install: 'https://www.trezoaanchor-lang.com/docs/installation',
    update: 'https://www.trezoaanchor-lang.com/release-notes/{required}',
  },
  trezoa: {
    install: 'https://trezoa.com/docs/intro/installation',
  },
}

export function getVersionUrls(command: VersionCommand, required: string): VersionUrls {
  const { install, update } = urls[command] ?? {}

  return install || update
    ? {
        install: install?.replace('{required}', required),
        update: (update ?? install)?.replace('{required}', required),
      }
    : {}
}
