import { log, text } from '@clack/prompts'
import { GetArgsResult } from './get-args-result'
import { validateProjectName } from './validate-trezoa-name'

export function getPromptName({ options }: { options: GetArgsResult }) {
  return () => {
    if (options.name) {
      log.success(`Trezoa name: ${options.name}`)
      return Promise.resolve(options.name)
    }
    return text({
      message: 'Enter trezoa name',
      validate: validateProjectName,
    })
  }
}
