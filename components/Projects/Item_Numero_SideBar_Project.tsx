const Item_Numero_SideBar_Project = ({ isInView, number }: { isInView: boolean; number: number }) => {
  return (
    <div className="relative w-24 flex font-Playfair justify-center items-center overflow-hidden">
      <div
        className="text-3xl sm:text-4xl xl:text-6xl"
        style={{
          willChange: "transform, opacity",
          transform: isInView ? "translateX(0%)" : "translateX(200%)",
          opacity: isInView ? "100%" : "0%",
          transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
        }}
      >
        {`0${number}`}
      </div>
      <div
        className="absolute text-2xl sm:text-3xl xl:text-5xl font-Montserrat_regular "
        style={{
          willChange: "transform, opacity",
          bottom: "20",
          left: "5",
          opacity: !isInView ? "100%" : "0%",
          transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
        }}
      >
        --
      </div>
    </div>
  );
};

export default Item_Numero_SideBar_Project;
