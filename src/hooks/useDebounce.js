import { useState, useEffect } from 'react';

/**
 * A custom React hook that delays updating a value until a specified delay has passed
 * since the last time the value changed.
 *
 * This is highly useful for optimizing API calls based on user input (e.g., search bars),
 * preventing excessive renders or backend requests while the user is actively typing.
 *
 * @param {any} value - The state value to debounce
 * @param {number} delay - The delay in milliseconds
 * @returns {any} The debounced value
 */
function useDebounce(value, delay) {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Update debounced value after delay
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cancel the timeout if value changes (also on delay change or unmount)
    // This is how we prevent debounced value from updating if value is changed
    // within the delay period. Timeout gets cleared and restarted.
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]); // Only re-call effect if value or delay changes

  return debouncedValue;
}

export default useDebounce;
