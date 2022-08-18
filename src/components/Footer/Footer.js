import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin, FaEnvelope, FaPhone, FaWhatsapp, FaHome } from "react-icons/fa";
import  './footer.css';

const footer = () => {


  return (
    <footer className="text-center text-white">
            
            <div className="container p-4">
        
                <section className="mb-4">
                
                    <a className="btn btn-outline-light btn-floating m-1 fs-3" href="https://www.facebook.com/" role="button" target="blank">
                        <FaFacebookF>Facebook</FaFacebookF>
                    </a>
                
                    <a className="btn btn-outline-light btn-floating m-1 fs-3" href="https://twitter.com/?lang=es" role="button" target="blank">
                        <FaTwitter >Twitter</FaTwitter>
                    </a>
                
                    <a className="btn btn-outline-light btn-floating m-1 fs-3" href="https://www.instagram.com/?hl=es-la" role="button" target="blank">
                        <FaInstagram>Instagram</FaInstagram>
                    </a>
            
                    <a className="btn btn-outline-light btn-floating m-1 fs-3" href="https://ar.linkedin.com/" role="button" target="blank">
                        <FaLinkedin>Linkedin</FaLinkedin>
                    </a>
                
                </section>
        
                <section className="mb-1">
                    <h5 className="text-uppercase fw-bold fs-1">Contacto</h5>
                    <p className='mr-3 fs-5'><FaHome /> CABA, Buenos Aires, Argentina</p>
                    <p className='mr-3 fs-5'><FaEnvelope /> contacto@wheelcollector.com.ar</p>
                    <p className='mr-3 fs-5'><FaPhone /> +54 9 11 2024 3550</p>
                    <p className='mr-3 fs-5'><FaWhatsapp /> +54 9 11 2024 3549</p>
                </section>
                           
            </div>
        
            <div className="bg-secondary text-center p-2 derechos" id="zocalo">
                Todos los derechos reservados @ Wheelcollector
            </div>
        
        </footer>
  )
}

export default footer
