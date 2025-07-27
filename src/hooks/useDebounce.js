import { useEffect, useState } from 'react';

function useDebounce({ value, delay }) {
    const [debounceValue, SetDebounceValue] = useState(value);
    useEffect(() => {
        const handle = setTimeout(() => {
            SetDebounceValue(value);
            return () => clearTimeout(handle);
        }, delay);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);
    return debounceValue;
}

export default useDebounce;
