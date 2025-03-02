import type { DebugPayloadProps } from '@app/common/Debug'

export class Debug {
  public static info<T>(payload: DebugPayloadProps<T>) {
    // eslint-disable-next-line no-console
    console.info('%c %s ', 'color:black;background:#cdddea;', 'info', payload)
  }

  public static warn<T>(payload: DebugPayloadProps<T>) {
    // eslint-disable-next-line no-console
    console.warn('%c %s ', 'color:black;background:#ffd700;', 'warn', payload)
  }

  public static error<T>(payload: DebugPayloadProps<T>) {
    // eslint-disable-next-line no-console
    console.error('%c %s ', 'color:black;background:#d99cb5;', 'error', payload)
  }
}
