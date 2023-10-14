
import React from "react";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  ListGroupItem,
  ListGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

import IndexNavbar from "components/Navbars/IndexNavbar";
import Footer from "components/Footer/Footer.js";


export default function LandingPage() {
  React.useEffect(() => {
    document.body.classList.toggle("landing-page");
    return function cleanup() {
      document.body.classList.toggle("landing-page");
    };
  }, []);
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <div className="page-header">
          <div className="content-center">
            <Row className="row-grid justify-content-between align-items-center text-left">
              <Col lg="7" md="7">
                <h1 className="text-white">
                  Softevolucion <br />
                  <span className="text-white">Tus Aliados tecnologicos!!</span>
                </h1>
                <p className="text-white mb-3">
                Somos una consultora de software recién fundada que se especializa en la creación de soluciones tecnológicas innovadoras para satisfacer las necesidades de nuestros clientes. 
                Nos apasiona el desarrollo de software de calidad y estamos comprometidos en ofrecer productos y servicios de alto nivel para mejorar la eficiencia y productividad de tu negocio.
                </p>
              </Col>
              <Col lg="5" md="7">
                <img
                  alt="..."
                  className="img-fluid"
                  src={require("assets/img/robot.png")}
                />
              </Col>
            </Row>
          </div>
        </div>
        <section className="section section-lg">
          <section className="section">
            <img
              alt="..."
              className="path"
              src={require("assets/img/path4.png")}
            />

            <Container>
              <Row className="row-grid justify-content-between">

              <div class="p-4 text-gray-600">
                <h1 class="mb-8 text-center text-3xl font-bold text-white-900">Nuestros servicios:</h1>

                <ul class="grid place-content-center sm:grid-cols-2 gap-8">
                  <li class="flex">
                    <div class="px-4 text-5xl font-extralight text-white-700">01.</div>
                    <div>
                      <div class="text-xl font-bold text-white-800">Desarrollo de aplicaciones móviles y web</div>
                      <p class="max-w-xs py-2 text-sm text-white-900">
                          - Desarrollo de aplicaciones móviles nativas para iOS y Android.
                          - Desarrollo de aplicaciones web personalizadas.
                          - Diseño de interfaces de usuario intuitivas y atractivas.
                          - Integración de sistemas y tecnologías para mejora de la experiencia de usuario.</p>
                    </div>
                  </li>
                  <li class="flex">
                    <div class="px-4 text-5xl font-extralight text-white-700">02.</div>
                    <div>
                      <div class="text-xl font-bold text-white-800">Soluciones de inteligencia artificial y aprendizaje automático:</div>
                      <p class="max-w-xs py-2 text-sm text-white-900">
                        Implementación de algoritmos de aprendizaje automático para análisis predictivo y clasificación de datos.
                        Desarrollo de chatbots y asistentes virtuales para mejorar la atención al cliente.
                        Optimización de procesos a través de la automatización de tareas repetitivas.
                      </p>
                    </div>
                  </li>
                  <li class="flex">
                    <div class="px-4 text-5xl font-extralight text-white-700">03.</div>
                    <div>
                      <div class="text-xl font-bold text-white-800">Consultoría y asesoramiento tecnológico:</div>
                      <p class="max-w-xs py-2 text-sm text-white-900">Evaluación de infraestructuras tecnológicas y recomendaciones para su mejora.
                            Análisis de requisitos y definición de estrategias tecnológicas.
                            Elaboración de planes de implementación y gestión de proyectos.
                      </p>
                    </div>
                  </li>
                  <li class="flex">
                    <div class="px-4 text-5xl font-extralight text-white-700">04.</div>
                    <div>
                      <div class="text-xl font-bold text-white-800">Soporte técnico y mantenimiento:</div>
                      <p class="max-w-xs py-2 text-sm text-white-900">WServicio de atención al cliente para resolver dudas técnicas y brindar soporte técnico.
                          Actualizaciones y mejoras continuas de software.
                          Monitoreo y gestión proactiva de problemas técnicos.
                      </p>
                    </div>
                  </li>
                  
                </ul>
              </div>
              </Row>
            </Container>
          </section>
        </section>
        <section className="section section-lg">
          <img
            alt="..."
            className="path"
            src={require("assets/img/path4.png")}
          />
          <img
            alt="..."
            className="path2"
            src={require("assets/img/path5.png")}
          />
          <img
            alt="..."
            className="path3"
            src={require("assets/img/path2.png")}
          />
          <Container>
            <Row className="justify-content-center">
              <Col lg="12">
                <h1 className="text-center">Beneficios</h1>
                <Row className="row-grid justify-content-center">
                  <Col lg="3">
                    <div className="info">
                      <div className="icon icon-primary">
                        <i className="tim-icons icon-money-coins" />
                      </div>
                      <h4 className="info-title">Ahorro de tiempo y dinero</h4>
                      <hr className="line-primary" />
                      <p>
                        puedemos optimizar los procesos y utilizar tecnologías eficientes para ayudar a las empresas a ahorrar tiempo y reducir costos en el desarrollo y mantenimiento de software.
                      </p>
                    </div>
                  </Col>
                  <Col lg="3">
                    <div className="info">
                      <div className="icon icon-warning">
                        <i className="tim-icons icon-chart-pie-36" />
                      </div>
                      <h4 className="info-title">Reducción de la complejidad financiera</h4>
                      <hr className="line-warning" />
                      <p>
                      La consultora de software puede ayudar a las empresas a simplificar su pila tecnológica, eliminando la complejidad innecesaria y optimizando los recursos financieros.
                      </p>
                    </div>
                  </Col>
                  <Col lg="3">
                    <div className="info">
                      <div className="icon icon-success">
                        <i className="tim-icons icon-single-02" />
                      </div>
                      <h4 className="info-title">Enfoque en la seguridad y protección de datos</h4>
                      <hr className="line-success" />
                      <p>
                      Las consultoras de software comprenden la importancia de la seguridad y pueden implementar medidas de protección de datos para garantizar la confidencialidad, integridad y disponibilidad de la información de la empresa.
                      </p>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
        <Footer />
      </div>
    </>
  );
}
