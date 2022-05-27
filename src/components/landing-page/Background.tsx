import SocialMediaContainer from "./SocialMediaContainer";

const Background = (): JSX.Element => {
  return (
    <div
      className="fixed"
      style={{
        backgroundImage: "url(/checkered_flag.jpg)",
        width: "100vw",
        height: "100vh",
        overflow: "auto",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <img
        srcSet="/logo.png"
        className="fixed"
        style={{
          minWidth: "100px",
          width: "10vw",
          margin: "30px",
        }}
        alt={"logo"}
      />

      <SocialMediaContainer />
    </div>
  );
};

export default Background;
