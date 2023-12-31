import "./App.css";
import { Link } from "react-router-dom";

import Counter from "./teme/tema2/ExercitiuCounter";
import InputField from "./teme/tema3/InputField";
import CharacterCounter from "./teme/tema4/CharacterCounter";
import TodoList from "./teme/tema5/ToDoListRezolvare";
import SearchFilter from "./teme/tema6/SearchFilterRezolvare";
import ColorSwitcher from "./teme/tema7/ColorSwitcher";
import Nav from "./NavBar";

function App() {
  return (
    <div>
      <Nav />
      <TodoList />
    </div>
  );
}
export default App;
