hooks? usestate hook? statemanagement


🧩 1. What are Hooks in React?
Definition:
Hooks are special functions in React that let you use state and other React features without writing a class component.
Before Hooks, we could use state only in class components.
But with Hooks, we can use state, lifecycle methods, and context in functional components.





⚙️ 2. What is the useState Hook?
Definition:
useState is a built-in Hook that allows you to create state variables in a functional component.
Think of state as data that can change over time (for example, count, input value, toggle status, etc.)
   syntax
const [state, setState] = useState(initialValue)
state → the current value
setState → function used to update the value
useState(initialValue) → sets the initial value