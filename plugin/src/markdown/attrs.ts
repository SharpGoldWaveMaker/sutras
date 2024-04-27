export type Attrs = {
    identifier: string;
    codes: string;
}

const attrRE = /\b(?<key>\w+)(="(?<value>[^"]*)")?/g;

export function parseAttrs(attrStr: string): Attrs {
    const attrs: Record<string, any> = {};
    let rez: RegExpExecArray | null = null;
    while ((rez = attrRE.exec(attrStr))) {
      const { key, value } = rez.groups!;
      const newValue = value === void 0 ? true : value;
      if (Array.isArray(attrs[key])) {
        attrs[key].push(newValue);
      } else if (!attrs[key]) {
        attrs[key] = newValue;
      } else {
        attrs[key] = [attrs[key], newValue];
      }
    }
    return attrs as Attrs
}