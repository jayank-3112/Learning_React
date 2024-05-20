
import MyHeading1 from "./components/MyHeading";
import { MyHeading2 as CustomHead2, MyHeading3, MyHeading4 } from "./components/MyHeading";
const a = "Page-1"
function App() {
  const name = 'Jayank Mahaur';
  const element = <h2>Hello, {name}</h2>;  
  return (
    <>
      <div>
        <MyHeading1 name = "Chotu" text="Nice One" price = {2000}/>
        <h1>Welcome to {a} </h1>
        {element}
      </div>
      <div>
        <CustomHead2 value = {3000}/>
        <MyHeading3 />
        <MyHeading4 />
      </div>
    </>
  );
};
export default App;
