interface IProps {
  image: string;
  alt: string;
  url: string;
  width: number;
}

const SocialMediaPreview = ({ image, alt, url, width }: IProps) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="relative m-0 m-auto min-w-[300px] rounded-lg"
      style={{ maxWidth: width + "%" }}
    >
      <img className="mt-2 rounded-lg" src={image} alt={alt} />
    </a>
  );
};

export default SocialMediaPreview;
