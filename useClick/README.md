# Usage

```javascript
const App = () => {
  const sayHello = () => console.log("say hello");
  const title = useClick(sayHello);
  return (
    <div>
      <h1 ref={title}>useClick</h1>
    </div>
  );
};
```
