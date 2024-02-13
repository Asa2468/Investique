import logo from '../assets/logo.png';
export default function Header() {
  return (
    <header>
      <div id="header">
        <img src={logo} alt="Logo showing a chess piece" />
        <h1><span id="invest">INVEST</span><span id="opia">IQUE</span></h1>
      </div>
      <div>
        <p id="slogan">The Financial Mastermind: Our Move, Your Win</p>
      </div>
    </header>
  );
}