import Form from "./Form";

const Header = () => {
  return (
    <div className=" flex flex-col items-center justify-center gap-5 lg:w-2/5 lg:items-start ">
      <img src={"/Logo2x.png"} className=" w-48 lg:w-64" />
      <div className="text-3xl font-medium leading-8 text-center text-primary lg:text-start ">
        A Suite of Business Support Services
      </div>
      <div className=" text-xl font-normal text-center leading-7 text-primary lg:text-start  ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt...Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed
      </div>
      <div className=" hidden lg:block">
        <Form />
      </div>
    </div>
  );
};

export default Header;
