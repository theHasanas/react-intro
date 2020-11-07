import Ghost from "./components/Ghost";
import List from "./components/List";
import PageTitle from "./components/PageTitle";
import ProfileCard from "./components/ProfileCard";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div>
      {/* <PageTitle /> */}

      <Ghost />

      <TodoList />

      <ProfileCard />

      <List title={"English music"} items={["Beatles", "Dio", "Wu Tang"]} />

      <List title={"Spanish music"} items={["Shakira", "Enriqe"]} />

      <List
        title={"Daily routine"}
        items={["wake up", "code", "sleep"]}
        ordered={true}
        type="I"
      />

      <p>Design by Aziz Alsaffar</p>
    </div>
  );
}

export default App;
