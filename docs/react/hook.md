# Hook 学习

## useDebounce
函数式组件 防抖
原因：
```typeScript
import { useCallback, useRef, useEffect } from 'react';

export const useDebounce = (fn: () => void, delay: number, dep: any[] = []) => {
    const { current } = useRef<any>({ fn, timer: null });
    useEffect(
        function() {
            current.fn = fn;
        },
        [fn]
    );

    return useCallback(function(this: any, ...args) {
        if (current.timer) {
            clearTimeout(current.timer);
        }
        current.timer = setTimeout(() => {
            current.fn.call(this, ...args);
        }, delay);
    }, dep);
};

```