import Content from "./components/Content";
import Header from "./components/Header";

function App() {
  return (
    <div className="  flex w-screen h-screen overflow-x-hidden lg:items-center lg:justify-center">
      <div className=" flex flex-col w-screen h-fit px-5 py-8 gap-8 lg:flex-row lg:py-0 lg:px-10 max-w-[90rem] ">
        <Header />
        <Content />
      </div>
    </div>
  );
}

export default App;
