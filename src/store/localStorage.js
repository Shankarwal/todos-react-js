export const loadState = () => {
  try {
    const serialState = localStorage.getItem("appState");
    if (serialState === {}) {
      return {
        todos: [],
        visibilityFilter: "all",
      };
    }
    return JSON.parse(serialState);
  } catch (err) {
    // console.log("error");
    return {
      todos: [],
      visibilityFilter: "all",
    };
  }
};

export const saveState = (state) => {
  try {
    const serialState = JSON.stringify(state);
    localStorage.setItem("appState", serialState);
  } catch (err) {
    console.log(err);
  }
};
