import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhoneAlt, faHome } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


const colorWhite = '#FFFAFA';
const colorPrimary = '#3C4360';
const mobileBreakpoint = '600px';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Rasmus Bengtsson</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Systemutvecklare met förståelse för affären, användaren och tekniken" />
      </Head>

      <aside>
        <div className="photoContainer">
          <img src="/rasmus.png" alt="Porträtt på Rasmus Bengtsson" title="Rasmus Bengtsson" />
        </div>
        <h1 className="mobile-show">Rasmus Bengtsson</h1>
        <section id="aboutme">
          <h2>Om mig</h2>
          <p>Som systemutvecklare har jag förståelse för både affären, användaren och tekniken.</p>
          <p>På fritiden tycker jag om att träna, resa eller träffa vänner och familj.</p>
        </section>
        <section id="contact">
          <h2>Kontakt</h2>
          <ul>
            <li>
              <FontAwesomeIcon icon={faEnvelope} />
              <a href="mailto:r@smus.be">r@smus.be</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faPhoneAlt} />
              <a href="tel:+46739475200">073 947 52 00</a>
            </li>
            <li>
              <FontAwesomeIcon icon={faGithub} />
              <a href="https://github.com/rasmusbe">rasmusbe</a>
            </li>
            <li className="web">
              <FontAwesomeIcon icon={faHome} />
              <a href="https://rasmus.be">rasmus.be</a>
            </li>
          </ul>
        </section>
        <section id="skills">
          <h2>Kunskaper</h2>
          <h3>Tekniker</h3>
          <ul>
            <li>PHP</li>
            <li>WordPress</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>React Native</li>
            <li>HTML</li>
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>XML</li>
            <li>Cordova</li>
            <li>PhoneGap</li>
            <li>Git</li>
          </ul>
          <h3>Operativsystem</h3>
          <ul>
            <li>MacOS</li>
            <li>Linux</li>
            <li>Windows</li>
          </ul>
          <h3>Program</h3>
          <ul>
            <li>Microsoft Office</li>
            <li>Adobe Photoshop</li>
          </ul>
        </section>
      </aside>
      <main>
          <h1 className="mobile-hide">Rasmus Bengtsson</h1>
          <section>
            <h2>Arbetslivserfarenhet</h2>
            <ul>
              <li>
                <div className="title">
                  <h3>CTO / Lead Developer</h3>
                  <span className="duration">Jan 2018 - Pågående</span>
                </div>
                <p>
                  <strong>TidyApp, Stockholm.</strong>&nbsp;
                  Digital förmedlingsplattform för uppdrag inom hushållsnära tjänster. Mitt anvsar inkluderar att ersätta hela den tekniska plattformen.
                </p>
              </li>
              <li>
                <div className="title">
                  <h3>Lead Developer</h3>
                  <span className="duration">Sep 2014 - Dec 2017</span>
                </div>
                <p>
                  <strong>Isotop, Stockholm.</strong>&nbsp;
                  Teknikbyrå som bygger värdeskapande plattformar för webb och mobil. Jag ansvarade bland annat för lansering av e-handel åt en kund i ca 20 länder.
                </p>
              </li>
              <li>
                <div className="title">
                  <h3>Ansvarig Webbutveckling</h3>
                  <span className="duration">Dec 2013 - Sep 2014</span>
                </div>
                <p>
                  <strong>Oslagbar Produktion, Stockholm.</strong>&nbsp;
                  Digital produktionsbyrå för webb och mobila enheter. Drevs som aktiebolag av mig och en kollega som en avknoppning från mitt tidigare bolag Social Solutions.
                </p>
              </li>
              <li>
                <div className="title">
                  <h3>Ansvarig Webbutveckling</h3>
                  <span className="duration">Dec 2010 - Dec 2013</span>
                </div>
                <p>
                  <strong>Social Solutions, Stockholm.</strong>&nbsp;
                  Digital medie- och produktionsbyrå för allt inom webb, sociala medier och mobila enheter där jag ansvarade för webbutvecklingen.
                </p>
              </li>
            </ul>
          </section>
          <section>
            <h2>Utbildning</h2>
            <ul>
              <li>
                <div className="title">
                  <h3>Civilingenjör, Medieteknik 270hp</h3>
                  <span className="duration">2005 - 2011</span>
                </div>
                <p>
                  <strong>Kungliga Tekniska Högskolan, Stockholm</strong><br />
                  Specialiserat mig inom människa-datorinteraktion och interaktiva medier.
                </p>
              </li>
              <li>
                <div className="title">
                  <h3>Tekniskt basår</h3>
                  <span className="duration">2004 - 2005</span>
                </div>
                <p>
                  <strong>Kungliga Tekniska Högskolan, Stockholm</strong>
                </p>
              </li>
              <li>
                <div className="title">
                  <h3>Gymnasieutbildning, Media-programmet</h3>
                  <span className="duration">2001 - 2004</span>
                </div>
                <p>
                  <strong>Mobila Gymnasiet Kista, Stockholm</strong>
                </p>
              </li>
            </ul>
          </section>
          <section>
            <h2>Förtroendeuppdrag</h2>
            <ul>
              <li>
                <div className="title">
                  <h3>Vice Ordförande</h3>
                  <span className="duration">2020 - Pågående</span>
                </div>
                <p>
                  <strong>BRF Moroten 1-3</strong><br />
                  Invald i styrelsen med ansvar för IT och teknik samt vice ordförande.
                </p>
              </li>
            </ul>
          </section>
          <section>
            <h2>Språk</h2>
            <ul id="languages">
              <li>
                <h3>Svenska</h3>
                <p>
                  Modersmål
                </p>
              </li>
              <li>
                <h3>Engelska</h3>
                <p>
                  Flytande
                </p>
              </li>
            </ul>
          </section>
          <section>
            <h2>Övrig information</h2>
            <h3>Körkort</h3>
            <p>Jag har svenskt körkort för personbil.</p>
            <h3>Referenser</h3>
            <p>Lämnas på begäran.</p>
          </section>
      </main>

      <style jsx>{`
        .container {
          width: 800px;
          margin: 0 auto;
          display: flex;
        }

        aside {
          flex: 0 0 35.1966%;
          margin-right: 3%;
          background-color: ${colorPrimary};
          color: ${colorWhite};
          padding: 15px;
        }

        aside h2 {
          margin-bottom: 0;
        }

        aside h3 {
          margin-bottom: 5px;
        }

        #contact li {
          margin: .5em 0;
          display: flex;
        }

        #contact li.web {
          display: none;
        }

        #contact a {
          color: ${colorWhite};
          text-decoration: none;
          display: inline-block;
          margin-left: 10px;
        }

        #skills ul,
        #contact ul {
          padding: 0;
          margin: 0;
          list-style: none;
        }

        #skills ul li {
          display: inline-block;
          background-color: ${colorWhite};
          color: ${colorPrimary};
          border-radius: 6px;
          padding: 3px 6px;
          margin: 3px;
        }

        .photoContainer {
          background-color: ${colorWhite};
          border-radius: 50%;
          padding: 5px;
          overflow: hidden;
          margin: 10px;
        }

        .photoContainer img {
          position: relative;
          top: 10px;
        }

        h1 {
          line-height: 300%;
          text-align: center;
          color: ${colorWhite};
          background-color: ${colorPrimary};
        }

        main ul {
          padding-left: 15px;
        }

        main .title {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
        }

        main h3 {
          margin: 0;
        }

        main .title + p {
          margin-top: .5em;
        }

        main h2 {
          margin-bottom: 5px;
        }

        main #languages {
          display: flex;
          list-style: none;
          padding-left: 0;
        }

        main #languages li {
          margin-right: 4em;
        }

        @media only screen and (max-width: ${mobileBreakpoint}) {
          .container {
            flex-direction: column;
            width: 100%;
          }

          aside {
            margin-right: 0;
          }

          main {
            margin: 0 15px;
          }

          main .title {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        @media only print {
          aside {
            color: ${colorPrimary};
            background: none;
            border-right: 1px solid ${colorPrimary};
          }

          #contact li.web {
            display: flex;
          }

          #contact a {
            color: ${colorPrimary}
          }

          aside h3 {
            margin-bottom: 5px;
          }

          #skills ul {
            list-style: disc;
          }

          #skills ul li {
            background: none;
            padding: 0;
            margin: 0 0 0 1em;
            display: list-item;
          }

          #skills ul li::after {
            content: " ";
          }
        }

      `}</style>

      <style global jsx>{`
        html,
        body {
          padding: 0;
          margin: 0;
          background-color: ${colorWhite};
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }

        img {
          max-width: 100%;
          max-height: 100%;
        }

        svg {
          width: 1.5rem;
        }

        .mobile-show {
          display: none;
        }

        h2 + p,
        h3 + p,
        h2 + ul,
        h3 + ul {
          margin-top: 0;
        }

        main section {
          page-break-inside: avoid;
        }

        @media only screen and (max-width: ${mobileBreakpoint}) {
          .mobile-show {
            display: block;
          }

          .mobile-hide {
            display: none;
          }
        }

      `}</style>
    </div>
  )
}
