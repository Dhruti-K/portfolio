class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML=
        `<nav>
            <ul class="nav">
            <li>
                <a href="/home">Home</a>
            </li>
            <li>
                <a href="/poems">Poetry</a>
            </li>
            <li class="nav-title">
                <a href="/home">Portfolio of Dhruti K</a>
            </li>
            <li>
                <a href="singing.html">Singing</a>
            </li>
            <li>
                Page 4
            </li>
            </ul>
        </nav>
        <br>
        <br>
        <div class="title-block">
          <h1><a href="/home" class="title">Dhruti K</a></h1>
          <h2>A Collection of Works</h2>
        </div>`;
  }
}

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML=
        `<div class="credit">
          <br>
          <br>
          <p>
            This website was made from scratch, using HTML, CSS, and JavaScript, by Dhruti.
          </p>
          <br>
        </div>`;
  }
}

customElements.define('header-el', Header);
customElements.define('footer-el', Footer);