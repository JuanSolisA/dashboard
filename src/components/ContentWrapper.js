import React from 'react';
import TopBar from './TopBar';
import ContentRowTop from './ContentRowTop';
import Footer from './Footer';
import Table from './Table';
import TableInfo from './TableInfo';
function ContentWrapper() {

    let info = [{
        titulo: "Billi",
        duracion: "123",
        rating: "5",
        genero: ["Drama", "Comedia"],
        premios: "2"
    },
    {
        titulo: "Billi",
        duracion: "123",
        rating: "5",
        genero: ["Drama", "Comedia"],
        premios: "2"
    },
    ]

    return (
        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <TopBar />
                    <ContentRowTop />
                    <Table>
                        {info.map((inf, i) => (
                            <TableInfo titulo={inf.titulo} duracion={inf.duracion} rating="5" genero={inf.genero} premios="2" key={inf + i} />
                        ))}
                    </Table>
                    <Footer />
                </div>
            </div>
        </React.Fragment>
    )
}
export default ContentWrapper;