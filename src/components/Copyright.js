export function Copyright() {
  return (
    <div className="copyright">
      <a href="mailto:denysmogyliuk@gmail.com" className="copyright__link">
        Made by Denys Mogyliuk
      </a>
      <a
        href="https://www.linkedin.com/in/denys-mogyliuk-796630216/"
        className="copyright__link-linked"
      >
        <img
          className="copyright__link-image"
          src={"./logos/linked.png"}
          alt={"linked"}
          height="20"
        />
      </a>
    </div>
  );
}
