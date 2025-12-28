export function getTemplatesUrl() {
  return (
    process.env.TEMPLATES_URL ??
    `https://raw.githubusercontent.com/TRZLedgerFoundation/templates/refs/heads/main/templates.json`
  )
}
