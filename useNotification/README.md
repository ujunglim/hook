# Usage

```javascript
const App = () => {
  const triggerNotif = useNotification("Can I steal your cheese?", {
    body: "please",
  });
  return (
    <div>
      <button onClick={triggerNotif}>useNotification</button>
    </div>
  );
};
```
