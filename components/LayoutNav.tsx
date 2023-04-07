const LayoutNav = ({ children, Anim }: { children: any; Anim: boolean }) => {
  const string = children.props.children;
  let array: string[] = [];
  for (let i = 0; i < string.length; i++) {
    array.push(string.charAt(i));
  }
  return (
    <>
      <div>
        {array.map((item: string, index: number) => (
          <span
            key={index}
            // className={`${styles.letter} ${Anim ? styles.anim : ""}
            // }`}
            className={`inline-block transition-transform duration-500 ${
              Anim ? "-translate-y-full" : ""
            }`}
            style={{ transitionDelay: `${index * 0.03}s` }}
          >
            {item}
          </span>
        ))}
      </div>
      <div>
        {array.map((item: string, index: number) => (
          <span
            key={index}
            // className={`${styles.letter} ${Anim ? styles.anim : ""}
            // }`}
            className={`inline-block transition-transform duration-500  ${
              Anim ? "-translate-y-full" : ""
            }`}
            style={{
              transitionDelay: `${index * 0.03}s`,
              fontFamily: "serif",
              fontWeight: "500",
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </>
  );
};

export default LayoutNav;
