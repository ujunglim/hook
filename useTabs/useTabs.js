export const useTabs = (initialTab, allTabs) => {
    const [currentIndex, setCurrentIndex] = useState(initialTab);
    if (!allTabs || !Array.isArray(allTabs)) {
      return;
    }
    return {
      currentTab: allTabs[currentIndex],
      setCurrentTab: setCurrentIndex
    };
  };