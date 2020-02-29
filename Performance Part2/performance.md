# react performance optimizations

We can use "?react_perf" to make chrome web tools to recognize react components, and show the render tree, also highlight updates that show a flash from white to red representing the number of re-rendering ocurring in the component.

We can re-render only the parts that interest us with, shouldComponentUpdate or React PureComponent

There's a tool called "Why did you update?", checks components that not need to re-render

btw: react setState is async

## resume

Only load what's needed:
    - Code Spliting
    - Tree Shaking
Avoid blocking main thread
Avoid Memory Leaks
Avoid Multiple Re-rendering