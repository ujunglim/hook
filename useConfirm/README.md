# Usage

```javascript
const App = () => {
  const deleteWorld = () => console.log("Deleting the world...");
  const absort = () => console.log("Absorted.");
  const confirmDelete = useConfirm("Are you sure?", deleteWorld, absort);
  return (
    <div>
      <h1>useConfirm</h1>
      <button onClick={confirmDelete}>Delete the world</button>
    </div>
  );
};
```
