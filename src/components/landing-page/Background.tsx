const Background = (): JSX.Element => {
  return (
    <div
      className="fixed"
      style={{
        backgroundImage: "url(/background.png)",
        width: "100vw",
        height: "100vh",
      }}
    >
      <img
        srcSet="/logo.png"
        className="fixed"
        style={{
          width: "10vw",
          margin: "30px",
        }}
        alt={"logo"}
      />
    </div>
  );
};

export default Background;
