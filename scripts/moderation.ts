/// <reference path="core.ts" />

namespace MISA {
  interface ModerationResult {
    action: 'warn' | 'ban' | 'jail'
    target: string
    reason: string
    timestamp: number
  }

  const log: ModerationResult[] = []

  function getUserInput(selector: string): string {
    const el = document.querySelector<HTMLInputElement>(selector)
    return el?.value?.trim() ?? ''
  }

  function getReasonInput(selector: string): string {
    const el = document.querySelector<HTMLTextAreaElement>(selector)
    return el?.value?.trim() ?? ''
  }

  export function submitModeration(
    action: ModerationResult['action'],
    userSelector: string,
    reasonSelector: string,
    outputSelector: string,
  ): void {
    const target = getUserInput(userSelector)
    const reason = getReasonInput(reasonSelector)

    if (!target) {
      alert(`[ERROR] Please provide a user for ${action}.`)
      return
    }

    const entry: ModerationResult = {
      action,
      target,
      reason: reason || 'no reason provided',
      timestamp: Date.now(),
    }

    log.push(entry)
    const output = document.querySelector<HTMLElement>(outputSelector)
    if (output) {
      const time = new Date(entry.timestamp).toLocaleTimeString()
      output.innerHTML = `<span class="ok">[ OK ]</span>  ${entry.action.toUpperCase()} ${entry.target} — ${entry.reason} @ ${time}`
    }
  }

  export function getLogCount(): number {
    return log.length
  }
}
