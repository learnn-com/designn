export const undefinedAsFalse = (v?: boolean) => (v === undefined ? false : v)

export function mutuallyExclusiveTrueKeys(o: { [k: string]: any }, ...keys: string[]): string {
  return keys.reduce((p, k) => {
    const t: boolean = o[k] === true
    if (t) {
      return k
    }
    return p
  }, '')
}
