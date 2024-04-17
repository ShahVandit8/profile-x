export default (action, state) => {
  localStorage.setItem("profileXLocalState", JSON.stringify(state));
};
