useCallback
useCallback is a React Hook that memoizes (saves) a function, so it’s not recreated on every render — unless its dependencies change.

Think of it like this:
React normally creates a new version of every function every time the component re-renders.
useCallback stops that from happening.


🧩 When to Use useCallback
You pass functions to child components (especially if they use React.memo).
The same function reference is needed between renders.
You want to avoid unnecessary re-renders.