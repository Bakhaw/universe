import AvatarImg from "../../assets/images/avatar.jpg";

function Avatar() {
  return (
    <img
      alt="Me"
      className="h-96 w-96 object-cover rounded-full border-2 border-very-dark-blue"
      src={AvatarImg}
    />
  );
}

export default Avatar;
