# Usage

```javascript
const App = () => {
  const fadeInH1 = useFadeIn();
  const fadeInP = useFadeIn(5, 2);
  return (
    <div>
      <h1 {...fadeInH1}>useFadeIn</h1>
      <p {...fadeInP}>hello my name is yuyu</p>
    </div>
  );
};
```
