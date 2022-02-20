import AvatarImg from "../../assets/images/avatar.jpg";

function Avatar() {
  return (
    <img
      alt="Me"
      className="h-80 w-80 sm:h-96 sm:w-96 max-w-none object-cover rounded-full border-2 border-very-dark-blue"
      src={AvatarImg}
    />
  );
}

export default Avatar;
