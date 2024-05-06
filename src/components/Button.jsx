import ButtonSvg from "../assests/assets/svg/ButtonSvg";

const Button = ({ className, href, children, px, white }) => {
  const classes =
    "button relative inline-flex itens-center justify-center h-11 transition-colors hover:text-color-1 ${px || 'px-7'} ${white ? 'text-n-8' : 'text-n-1'} ${className || ''}";

  const spanClasses = "relative z-10";

  const renderButton = () => (
    <button className={classes}>
      <span className={spanClasses}>Something</span>
      {ButtonSvg(white)}
    </button>
  );
  return renderButton();
};

export default Button;
