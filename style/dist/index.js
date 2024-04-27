import { computed, inject, ref, unref } from 'vue';
export const defaultNamespace = 'su';
const statePrefix = 'is-';
function _bem(namespace, block, blockSuffix, element, modifier) {
    let cls = `${namespace}-${block}`;
    if (blockSuffix)
        cls += `-${blockSuffix}`;
    if (element)
        cls += `__${element}`;
    if (modifier)
        cls += `--${modifier}`;
    return cls;
}
export const namespaceContextKey = Symbol('namespaceContextKey');
export function useGetDerivedNamespace(namespaceOverrides) {
    const derivedNamespace = namespaceOverrides || inject(namespaceContextKey, ref(defaultNamespace));
    const namespace = computed(() => {
        return unref(derivedNamespace) || defaultNamespace;
    });
    return namespace;
}
;
export function useNamespace(block, namespaceOverrides) {
    const namespace = useGetDerivedNamespace(namespaceOverrides);
    const b = (blockSuffix = '') => _bem(namespace.value, block, blockSuffix, '', '');
    const e = (element) => (element ? _bem(namespace.value, block, '', element, '') : '');
    const m = (modifier) => (modifier ? _bem(namespace.value, block, '', '', modifier) : '');
    const be = (blockSuffix, element) => blockSuffix && element ? _bem(namespace.value, block, blockSuffix, element, '') : '';
    const em = (element, modifier) => element && modifier ? _bem(namespace.value, block, '', element, modifier) : '';
    const bm = (blockSuffix, modifier) => blockSuffix && modifier ? _bem(namespace.value, block, blockSuffix, '', modifier) : '';
    const bem = (blockSuffix, element, modifier) => blockSuffix && element && modifier
        ? _bem(namespace.value, block, blockSuffix, element, modifier)
        : '';
    const is = (name, ...args) => {
        const state = args.length >= 1 ? args[0] : true;
        return name && state ? `${statePrefix}${name}` : '';
    };
    // for css var
    // --el-xxx: value;
    const cssVar = (object) => {
        const styles = {};
        for (const key in object) {
            if (object[key])
                styles[`--${namespace.value}-${key}`] = object[key];
        }
        return styles;
    };
    // with block
    const cssVarBlock = (object) => {
        const styles = {};
        for (const key in object) {
            if (object[key])
                styles[`--${namespace.value}-${block}-${key}`] = object[key];
        }
        return styles;
    };
    const cssVarName = (name) => `--${namespace.value}-${name}`;
    const cssVarBlockName = (name) => `--${namespace.value}-${block}-${name}`;
    return {
        namespace,
        b,
        e,
        m,
        be,
        em,
        bm,
        bem,
        is,
        // css
        cssVar,
        cssVarName,
        cssVarBlock,
        cssVarBlockName,
    };
}
;
export function classNames(...args) {
    const classes = [];
    for (let i = 0; i < args.length; i++) {
        const value = args[i];
        if (!value)
            continue;
        if (typeof value === 'string') {
            classes.push(value);
        }
        else if (Array.isArray(value)) {
            for (let i = 0; i < value.length; i++) {
                const inner = classNames(value[i]);
                if (inner) {
                    classes.push(inner);
                }
            }
        }
        else if (typeof value === 'object') {
            for (const name in value) {
                if (value[name]) {
                    classes.push(name);
                }
            }
        }
    }
    return classes.join(' ');
}
