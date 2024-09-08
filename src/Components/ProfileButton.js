import Button from "@mui/material/Button";

const ProfileButton = ({ name, button_function }) => {
  return (
    <Button
      className="container-sidebar-buttons"
      variant="text"
      onClick={button_function}
    >
      <li>{name}</li>
    </Button>
  );
};

export default ProfileButton;
