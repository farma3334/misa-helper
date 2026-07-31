namespace MISA {
  export const THEME: string = 'dark'
  export const BOT_NAME: string = 'MISA HELPER'
  export const PREFIX: string = '+'

  export function addClass(element: Element, cls: string): void {
    element.classList.add(cls)
  }

  export function onLoad(cb: () => void): void {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', cb)
    } else {
      cb()
    }
  }

  export function setStatusDot(color: 'online' | 'offline'): void {
    const dot = document.querySelector<HTMLElement>('.status-dot')
    if (!dot) return
    dot.style.background = color === 'online' ? '#00ff9d' : '#ff4d6d'
  }
}
