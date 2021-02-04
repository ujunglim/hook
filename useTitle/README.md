# Usage

Hook to update your document's title.

```javascript
import React from "react";
import useTitle from "@hook/use-title";

const App = () => {
  const titleUpdater = useTitle("Loading");
  setTimeout(() => titleUpdater("Home"), 3000);
  return <h1>useTitle</h1>;
};
```
