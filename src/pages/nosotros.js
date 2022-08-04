import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Nosotros from '../components/Nosotros/Nosotros'

const Contacto = () => {
    const [cargando, setCargando] = useState(true)
    
    useEffect( () => {
        const Nosotros = new Promise( (resolve,reject) => {
            setTimeout(() => {
              setCargando(false)
              reject('error')
            }, 1000)
        })
    }, [])
    
    return (
        <>
        <div className="flex flex-initial basis-4/5 font-bold text-5xl mt-4 mb-2 justify-center">
            CONTACTO
        </div>
        <div className="flex w-full flex-wrap justify-center items-stretch mt-20">
            { cargando ?
            <div className="flex w-screen items-center justify-center space-x-2">
                Cargando   
            </div>
            :
            <div>
                <Nosotros />
                <div className="font-semibold">

                <h2 class="counter counted animated fadeInUp" data-from="0" data-to="847" data-speed="2500">847</h2>
                    <form className="mt-5" style={{ display: "flex", alignItems: "center", flexDirection: "column"}}>
                        <div style={{ display: "flex", marginBottom: 8 , marginTop:8}}>
                            <label style={{ marginRight: 10 }}>Nombre</label>
                            <input style={{ color: 'black' }} type="text" />
                        </div>
                        <div style={{ display: "flex", marginBottom: 8 }}>
                            <label style={{ marginRight: 10 }}>Apellido</label>
                            <input style={{ color: 'black' }} type="text" />
                        </div>
                        <div style={{ display: "flex", marginBottom: 8 }}>
                            <label style={{ marginRight: 10 }}>Telefono</label>
                            <input style={{ color: 'black' }} type="number"/>
                        </div>
                        <div style={{ display: "flex", marginBottom: 8 }}>
                            <label style={{ marginRight: 10 }}>Email</label>
                            <input id="email" style={{ color: 'black' }} placeholder="example@mail.com" type="email"/>
                        </div>
                    </form>
                    <Link to={"/"}>
                        <button className="btn btn-outline-primary btn-lg mt-10">Enviar formulario</button>
                    </Link>
                </div>
            </div>
            }
        </div>
        </>
    )
  }
export default Contacto