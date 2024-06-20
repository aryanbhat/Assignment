interface Props {
  image: string;
  title: string;
  content: string;
}

function Box({ image, title, content }: Props) {
  return (
    <div className=" bg-primary w-full mx-auto flex flex-col px-8 py-6 rounded-lg gap-4 lg:px-4 lg:py-3 xl:px-8 xl:py-6 ">
      <div className=" flex items-center gap-5 ">
        <img src={image} className=" lg:w-12 xl:w-16" />
        <div className=" text-xl lg:text-base xl:text-xl text-secondary whitespace-prewrap">
          {title}
        </div>
      </div>
      <div className=" text-white text-xl lg:text-base xl:text-xl leading-8  ">
        {content}
      </div>
    </div>
  );
}

export default Box;
