function Button({ content, handleClick, ...rest }) {
  return (
    <button onClick={handleClick} {...rest}>
      {content}
    </button>
  );
}

export default Button;
