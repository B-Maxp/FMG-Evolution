import "./Header.css";

function Header() {
  return (
    <header>
      <button type="button">
        <img src="../public/hibou_bg_remove.png" alt="logo hibou" />
      </button>
      <nav>
        <button type="button">Mes prestations</button>
        <button type="button">Qui suis-je</button>
        <button type="button">Contact</button>
      </nav>
    </header>
  );
}

export default Header;
