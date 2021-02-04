# Usage

```javascript
import useInput from "@hook/use-input";

const App = () => {
  // ===== Declaration of validator functions =======
  const maxLenValid = (value) => value.length <= 10;
  const notIncludeValid = (value) => !value.includes("@");

  const name = useInput("Mr. ", maxLenValid);
  const email = useInput("@", notIncludeValid);
  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Name" {...name.props} />
      <input placeholder="Email" {...email.props} />
    </div>
  );
};

