import AvatarImg from "../../assets/images/avatar.jpg";

function Avatar() {
  return (
    <img
      alt="Me"
      className="shrink-0 h-80 w-80 lg:h-96 lg:w-96 max-w-none object-cover rounded-full border-4 border-very-dark-blue bg-very-dark-blue"
      src={AvatarImg}
    />
  );
}

export default Avatar;
