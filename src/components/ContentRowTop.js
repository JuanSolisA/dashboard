import React from "react";
import imagenFondo from "../assets/images/mandalorian.jpg";
import ContentRowMovies from "./ContentRowMovies";
import GenresInDb from "./GenresInDb";
import ContentCard from "./ContentCard";

let tresCards = [
  {
    titulo: "Movies in Data Base",
    estiloTitulo: "text-primary ",
    color: "border-left-primary",
    cifra: 21,
    icono: "fas fa-film",
  },
  {
    titulo: "Total awards",
    estiloTitulo: "text-success",
    color: "border-left-success",
    cifra: 79,
    icono: "fas fa-award",
  },
  {
    titulo: "Actors quantity",
    estiloTitulo: "text-warning",
    color: "border-left-warning",
    cifra: 49,
    icono: "fas fa-user",
  }
];
let genInDb = [{
  genero: "Acción"
}, {
  genero: "Animación"
}, {
  genero: "Ciencia Ficción"
}, {
  genero: "Comedia"
}, {
  genero: "Documental"
}, {
  genero: "Drama"
}, {
  genero: "Fantasia"
}, {
  genero: "Infantiles"
}, {
  genero: "Musical"
}, {
  genero: "Hola Nacho"
}
];


function ContentRowTop() {
  return (
    <React.Fragment>
      {/*<!-- Content Row Top -->*/}
      <div className="container-fluid">
        <div className="d-sm-flex aligns-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
        </div>

        {/*<!-- Content Row Movies-->*/}
        <div className="row">
          {/*<!-- Movies in Data Base -->*/}
          {tresCards.map((card, i) => (
            <ContentRowMovies
              titulo={card.titulo}
              estiloTitulo={card.estiloTitulo}
              color={card.color}
              cifra={card.cifra}
              icono={card.icono}
              key={card + i}
            />
          ))}
        </div>
        {/*<!-- End movies in Data Base -->*/}
        {/*<!-- Content Row Last Movie in Data Base -->*/}
        <div className="row">
          {/*<!-- Last Movie in DB -->*/}
          <ContentCard titulo="LastMovie in Data Base">


            <div className="text-center">
              <img
                className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                style={{ width: 40 + "rem" }}
                src={imagenFondo}
                alt=" Star Wars - Mandalorian "
              />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dolores, consequatur explicabo officia inventore libero
              veritatis iure voluptate reiciendis a magnam, vitae, aperiam
              voluptatum non corporis quae dolorem culpa citationem ratione
              aperiam voluptatum non corporis ratione aperiam voluptatum
              quae dolorem culpa ratione aperiam voluptatum?
            </p>
            <a
              className="btn btn-danger"
              target="_blank"
              rel="nofollow"
              href="/"
            >
              View movie detail
            </a>
          </ContentCard>
          {/*<!-- End content row last movie in Data Base -->*/}
          {/*<!-- Genres in DB -->*/}
          < ContentCard titulo="Genres in Data Base">
            <div className="row">
              {genInDb.map((gen, i) => (
                <div className="col-lg-6 mb-4" key={gen + i}>
                  <div className="card bg-dark text-white shadow" >
                    <GenresInDb genero={gen.genero} />
                  </div>
                </div>
              ))}
            </div>
          </ContentCard >
        </div>
      </div>


      {/*<!--End Content Row Top-->*/}
    </React.Fragment >
  );
}
export default ContentRowTop;
