import { log } from '@clack/prompts'
import { InitScriptVersions } from './init-script-schema'
import { initScriptVersionCheck } from './init-script-version-check'

export async function initScriptVersion(versions?: InitScriptVersions, verbose = false) {
  const tag = `initScriptVersion`
  if (!versions) {
    if (verbose) {
      log.warn(`${tag}: no versions found`)
    }
    return
  }
  await initScriptVersionCheck('adb', versions.adb, verbose)
  await initScriptVersionCheck('trezoaanchor', versions.trezoaanchor, verbose)
  await initScriptVersionCheck('trezoa', versions.trezoa, verbose)
  if (verbose) {
    log.warn(`${tag}: done`)
  }
}
