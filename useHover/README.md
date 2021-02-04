# Usage

```javascript
const App = () => {
  const sayHello = () => console.log("say hello");
  const title = useHover(sayHello);

  return (
    <div>
      <h1 ref={title}>useHover</h1>
    </div>
  );
};
```
