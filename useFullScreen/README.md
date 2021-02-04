# Usage

```javascript
const App = () => {
  const { element, triggerFull } = useFullscreen();
  return (
    <div>
      <img
        ref={element}
        src="https://ak5.picdn.net/shutterstock/videos/19973125/thumb/1.jpg?ip=x480"
      />
      <button onClick={triggerFull}>Full Screen</button>
    </div>
  );
};
```
