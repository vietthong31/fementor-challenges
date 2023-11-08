import Button from "./Button";

function IconButton({ icon, label, handleClick, ...rest }) {
  return (
    <Button aria-label={label} onClick={handleClick} content={icon} {...rest} />
  );
}

export default IconButton;
