# Usage

```javascript
const App = () => {
  const { y } = useScroll();

  return (
    <div style={{ height: "100vh" }}>
      <h1 style={{ /*position: "fixed",*/ color: y > 10 ? "red" : "blue" }}>
        useScroll
      </h1>
    </div>
  );
};
```
