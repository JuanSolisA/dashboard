import React from "react";
import imagenFondo from "../assets/images/mandalorian.jpg";
import ContentRowMovies from "./ContentRowMovies";
import GenresInDb from "./GenresInDb";

function ContentRowTop() {
  let tresCards = [
    {
      titulo: "Movies in Data Base",
      estiloTitulo: "text-xs font-weight-bold text-primary text-uppercase mb-1",
      color: "card border-left-primary shadow h-100 py-2 ",
      cifra: "21",
      icono: "fas fa-film fa-2x text-gray-300",
    },
    {
      titulo: "Total awards",
      estiloTitulo: "text-xs font-weight-bold text-success text-uppercase mb-1",
      color: "card border-left-success shadow h-100 py-2",
      cifra: "79",
      icono: "fas fa-award fa-2x text-gray-300",
    },
    {
      titulo: "Actors quantity",
      estiloTitulo: "text-xs font-weight-bold text-warning text-uppercase mb-1",
      color: "card border-left-warning shadow h-100 py-2",
      cifra: "49",
      icono: "fas fa-user fa-2x text-gray-300",
    },
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
  }];





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
          {tresCards.map((card) => (
            <ContentRowMovies
              titulo={card.titulo}
              estiloTitulo={card.estiloTitulo}
              color={card.color}
              cifra={card.cifra}
              icono={card.icono}
            />
          ))}
        </div>
        {/*<!-- End movies in Data Base -->*/}

        {/*<!-- Content Row Last Movie in Data Base -->*/}
        <div className="row">
          {/*<!-- Last Movie in DB -->*/}
          <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h5 className="m-0 font-weight-bold text-gray-800">
                  Last movie in Data Base
                </h5>
              </div>
              <div className="card-body">
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
              </div>
            </div>
          </div>
          {/*<!-- End content row last movie in Data Base -->*/}
          {/*<!-- Genres in DB -->*/}
          <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h5 className="m-0 font-weight-bold text-gray-800">
                  Genres in Data Base
                </h5>
              </div>
              <div className="card-body">
                <div className="row">
                  {genInDb.map((gen) => (
                    <div className="col-lg-6 mb-4">
                      <div className="card bg-dark text-white shadow">
                        <GenresInDb genero={gen.genero} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/*<!--End Content Row Top-->*/}
    </React.Fragment>
  );
}
export default ContentRowTop;
