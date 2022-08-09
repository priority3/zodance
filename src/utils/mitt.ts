/**
 * http://github.com/developit/mitt
 */

export type EventType = string | symbol
export type Handler<T = any> = (event?: T) => void
export type WildcardHandler = (type: EventType, event?: any) => void

export type EventHandlerList = Array<Handler>
export type WildCardEventHandlerList = Array<WildcardHandler>

export type EventHandlerMap = Map<EventType, EventHandlerList | WildCardEventHandlerList>

// emit event
export interface Emitter {
  all: EventHandlerMap

  on<T = any>(type: EventType, handle: Handler<T>): void
  on(type: '*', handler: WildcardHandler): void

  emit<T = any>(type: EventType, event?: T): void
  emit(type: '*', event?: any): void

  off<T = any>(type: EventType, Handler: Handler<T>): void
  off(type: '*', handle: WildcardHandler): void

  clear(): void
}

export default function mitt(all?: EventHandlerMap): Emitter {
  all = all || new Map()

  return {
    all,
    on<T = any>(type: EventType, handle: Handler<T>): void {
      const handlers = all?.get(type)
      const added = handlers && handlers.push(handle)
      if (!added)
        all?.set(type, [handle])
    },
    emit<T = any>(type: EventType, event?: T): void {
      let handlers = all!.get(type)
      if (handlers) {
        (handlers as EventHandlerList)
          .slice()
          .forEach((handler) => {
            handler(event!)
          })
      }
      handlers = all!.get('*')
      if (handlers) {
        (handlers as WildCardEventHandlerList)
          .slice()
          .forEach((handler) => {
            handler(type, event!)
          })
      }
    },
    off<T = any>(type: EventType, handler: Handler<T>): void {
      const handlers = all?.get(type)
      if (handlers) {
        if (handler)
          handlers.splice(handlers.indexOf(handler) >>> 0, 1)
        else
          all?.set(type, [])
      }
    },
    // clear all
    clear(): void {
      this.all.clear()
    },
  }
}
