# Usage

```javascript
import useTabs from "@hook/use-tabs";

const App = () => {
  const { currentTab, setCurrentTab } = useTabs(0, sections);
  return (
    <div>
      <h1>useTabs</h1>
      {sections.map((section, mapIndex) => (
        <button onClick={() => setCurrentTab(mapIndex)} key={section.id}>
          {section.tab}
        </button>
      ))}
      <div>{currentTab.content}</div>
    </div>
  );
};
```
