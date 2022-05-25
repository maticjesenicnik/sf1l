import SocialMediaPreview from "./SocialMediaPreview";

const SocialMediaContainer = () => {
  return (
    <>
      <h1 className="text-black font-extrabold mt-[20vh] m-auto text-4xl bg-white bg-opacity-75 w-fit p-5 rounded-lg">
        Spletna stran v razvoju
      </h1>
      <div className="flex flex-wrap gap-4 ml-10 mr-10 scroll-auto">
        <SocialMediaPreview
          image={"social-media/youtube.png"}
          alt={"youtube"}
          url={"https://www.youtube.com/slovenskaf1ligapc"}
          width={27}
        />
        <SocialMediaPreview
          image={"social-media/instagram.png"}
          alt={"instagram"}
          url={"https://www.instagram.com/slovenskaf1ligapc"}
          width={27}
        />
        <SocialMediaPreview
          image={"social-media/discord.png"}
          alt={"discord"}
          url={"https://discord.com/invite/Y6tFGCwCyP"}
          width={42}
        />
      </div>
    </>
  );
};

export default SocialMediaContainer;
