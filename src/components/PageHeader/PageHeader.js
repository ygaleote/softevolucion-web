import React from "react";

import {  Container } from "reactstrap";

const style = {
  marginleft: '-5',
  paddingLeft: 0,
  listStyle: 'none'
};

export default function PageHeader() {
  return (
    <div className="page-header header-filter">
      <div className="squares square1" />
      <div className="squares square2" />
      <div className="squares square3" />
      <div className="squares square4" />
      <div className="squares square5" />
      <div className="squares square6" />
      <div className="squares square7" />
      <Container>
        <div className="content-center brand">
          <h1 className="h1-seo">Softevolucion</h1>
          <h3 className="d-none d-sm-block" style={style}>
            Somos tus aliados tecnologicos!!
          </h3>
          <h4 className="d-none d-sm-block" style={style}>
          Somos una consultora de software recién fundada que se especializa en la creación de soluciones tecnológicas innovadoras para satisfacer las necesidades de nuestros clientes. 
          Nos apasiona el desarrollo de software de calidad y estamos comprometidos en ofrecer productos y servicios de alto nivel para mejorar la eficiencia y productividad de tu negocio.
          </h4>
        </div>
      </Container>
    </div>
  );
}
