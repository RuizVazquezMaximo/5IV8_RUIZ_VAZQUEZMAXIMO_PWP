function memoize(fn) {
    const lengthMap = new Map();

    return function (...args) {
        const length = args.length;

        if (!lengthMap.has(length)) lengthMap.set(length, length ? new Map() : fn());

        let cache = lengthMap.get(length);

        for (let i = 0; i < length; i++) {
            const arg = args[i];
            if (!cache.has(arg)) cache.set(arg, i === args.length - 1 ? fn(...args) : new Map());
            cache = cache.get(arg);
        }

        return cache;
    }
}
