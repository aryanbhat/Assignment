import Box from "./Box";
import boxjson from "../Json/box.json";
import Form from "./Form";

function Content() {
  return (
    <div className=" flex flex-col items-center justify-center gap-5 lg:grid lg:grid-cols-3 lg:w-fit ">
      {boxjson.map((elem, idx) => {
        return (
          <Box
            key={idx}
            image={elem.image}
            title={elem.title}
            content={elem.content}
          />
        );
      })}
      <div className="lg:hidden w-full">
        <Form />
      </div>
    </div>
  );
}

export default Content;
