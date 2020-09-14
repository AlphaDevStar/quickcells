import React from "react";
import { Typography } from "@material-ui/core";
import { NavLayout } from "../components";
import '../css/home.css'

const HomepageContainer: React.FC = () => (
  <NavLayout disableContentContainer={true}>
    {/* Display the text in the first section*/}
    <section>
      <div className="container max-height">
        <img src="/images/background-images/home-header.svg" className="bkg-dot-check desktop"/>
        <img src="/images/background-images/mobile-home-header.svg" className="bkg-dot-check mobile-one"/>
        <img src="/images/background-images/dots.svg" className="bkg-dots" />
        <div className="description-cap">
          Les choses <span className="green-letters">complexes</span> sont finalement <span className="green-letters">simples</span> !
        </div>
        <div className="description-small">
          DÉCOUVREZ NOS SOLUTIONS.
        </div>
      </div>
    </section>

    {/* Display the video in this section*/}
    <section>
      <video width="100%" controls>
      </video>
    </section>

    {/* Display third section*/}
    <section>
      <div className="container">
        <div className="flex-container-center margin-100">
          <div className="dynamic-data-text margin-40-100">
            <div className="green-letters general-caption margin-bottom-14">Données dynamiques</div>
            <div className="sub-desc">Connectez facilement les graphiques et les contrôles grâce à un tableau de bord interactif. Connectez-vous à vos données en temps réel à l'aide de divers outils.</div>
          </div>
          <img src="/images/homepage-extra-image-data/dynamic.svg" className="dynamic-picture"/>
        </div>
        <img src="/images/background-images/dots.svg" className="bkg-dots-1" />
      </div>

      <div className="container">
        <div className="flex-container-col">
          <div className="productivity-text">
            <div className="green-letters general-caption margin-bottom-14">
              Gagnez en productivité
            </div>
            <div className="sub-desc1">
            Les outils mis à votre disposition par Quickcells ont été pensés dans un objectif précis : simplifier vos tâches et votre relation avec les tableurs afin de vous faire gagner du temps mais aussi d’interpréter plus facilement vos données. Ces deux actions combinées aboutissent à un gain de productivité considérable.
            </div>           
          </div>
          <div className="productivity-picture-show padding-56">
            <img src="/images/homepage-extra-image-data/insight1.svg" className="common-size"/>
            <img src="/images/homepage-extra-image-data/insight2.svg" className="common-size"/>
            <img src="/images/homepage-extra-image-data/insight3.svg" className="common-size"/>
          </div>
        </div>
        <img src="/images/background-images/dots.svg" className="bkg-dots-2" />
      </div>

      <div className="container">
        <img src="/images/cells/grey-white-background.jpg" className="bkg-dot-circle" />
        <div className="give-padding flex-container-col">
          <div className="solution-text">
            <div className="green-letters general-caption margin-bottom-14">
              2 Solutions pour vous ou votre entreprise
            </div>
            <div className="sub-desc">
              Que vous soyez indépendant, salarié ou chef d’entreprise, sachez que Quickcells dispose de la solution adaptée à vos besoins. L’idée est de garantir à nos clients de la flexibilité afin que vous ne consommiez que ce dont vous avez besoin. N’attendez plus pour découvrir les solutions Quickcells Graphs et Quickcells Solvers.
            </div>
          </div>
          <div className="flex-container-center">
            <a href="#" className="common-button-style common-button-font-style margin-right-120">GRAPHS</a>
            <a href="#" className="common-button-style common-button-font-style">SOLVERS</a>
          </div>
        </div>
      </div>
    </section>

    {/*This section shows services*/}
    <section className="service-bkg-color">
      <div className="flex-container-row">
        <div className="common-home-service-style">
          <img src="/images/naviguation-icons/check.svg" />
          <div className="common-home-service-caption service-common-margin">100<span className="common-home-service-caption-small-letter">%</span></div>
          <div className="common-home-service-text">
            <div className="common-home-service-sub-caption">D’exactitude</div>
            <div className="common-home-service-dec">Nous garantissons les résultats obtenus grâce à l’utlisation de QuickCells Solvers et Graphs.</div>
          </div>
        </div>
        <div className="common-home-service-style">
          <img src="/images/naviguation-icons/user.svg" />
          <div className="common-home-service-caption service-common-margin">500</div>
          <div className="common-home-service-text">
            <div className="common-home-service-sub-caption">Utilisateurs</div>
            <div className="common-home-service-dec">Nous dénombrons déjà plus de 500 utilisateurs satisfaits de nos solutions à travers le monde.</div>
          </div>
        </div>
        <div className="common-home-service-style">
          <img src="/images/naviguation-icons/calendar.svg" />
          <div className="common-home-service-caption service-common-margin">10<span className="common-home-service-caption-small-letter">h</span></div>
          <div className="common-home-service-text">
            <div className="common-home-service-sub-caption">Economisées</div>
            <div className="common-home-service-dec">En moyenne et par semaine pour des personnes utilisant les tableurs de façon intensive.</div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="container">
        <div className="flex-container-not-center padding-56">
          <div className="cycle-text margin-left-minus-80 cycle-text-order">
            <div className="cycle-caption green-letters margin-bottom-14">
              Un éco-système complet
            </div>
            <div className="cycle-desc">
              Les fonctionnalités développées grâce aux solutions Quickcells permettent de mettre en place un schéma d’utilisation vertueux des outils de tableurs classiques qui ne sont désormais plus perçus comme des contraintes mais comme des atouts.
            </div>
          </div>
          <img src="/images/homepage-extra-image-data/cycle.svg" className="cycle-picture"/>
        </div>
        <img src="/images/background-images/dots.svg" className="bkg-dots-3" />
      </div>

      <div className="container padding-56">
        <div className="flex-container-row testimonial-height">
          <div className="common-quote-style">
            <img src="/images/naviguation-icons/quote.svg" className="quote-form margin-bottom-50"/>
            <div className="client-testimonial margin-bottom-14">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”</div>
            <div className="client-name">Prénom Nom, Intitulé du poste, Societé.</div>
            <img src="/images/homepage-extra-image-data/client.svg" className="client-photo"/>
          </div>
          <div className="common-quote-style">
            <img src="/images/naviguation-icons/quote.svg" className="quote-form margin-bottom-50"/>
            <div className="client-testimonial margin-bottom-14">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”</div>
            <div className="client-name">Prénom Nom, Intitulé du poste, Societé.</div>
            <img src="/images/homepage-extra-image-data/client.svg" className="client-photo"/>
          </div>
          <div className="common-quote-style">
            <img src="/images/naviguation-icons/quote.svg" className="quote-form margin-bottom-50"/>
            <div className="client-testimonial margin-bottom-14">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”</div>
            <div className="client-name">Prénom Nom, Intitulé du poste, Societé.</div>
            <img src="/images/homepage-extra-image-data/client.svg" className="client-photo"/>
          </div>
        </div>
        <img src="/images/homepage-extra-image-data/circle.svg" className="testimonial-circle"/>
      </div>
    </section>

    <section className="service-bkg-color">
      <div className="container">
        <div className="flex-container-col">
          <p className="introduce-text">
            <span className="green-letters">QuickCells</span> est dès à présent disponible et compatible avec les solutions Google Sheets et Microsoft Excel.
          </p>
          <div className="flex-container-row">
            <img src="/images/homepage-extra-image-data/google.svg" className="google-picture-style"/>
            <img src="/images/homepage-extra-image-data/microsoft.svg" />
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="container padding-110">
        <div className="solve-text">
          <p className="green-letters solution-text-style">2 Solutions à découvrir : </p>
          <p className="solution-dec">Profitez d’une période d’essai gratuite !</p>
        </div>
        <div className="flex-container-center button-group">
            <a href="#" className="common-button-style common-button-font-style margin-right-120">GRAPHS</a>
            <a href="#" className="common-button-style common-button-font-style">SOLVERS</a>
          </div>
      </div>
    </section>
  </NavLayout>
);

export {
    HomepageContainer as default,
    HomepageContainer,
};
