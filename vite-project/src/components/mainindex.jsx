import React, { useEffect } from 'react';
import { useState } from 'react'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faPaperPlane, faCircleUser, faCommentDots, faBookmark } from '@fortawesome/free-regular-svg-icons';

// We create and export the mainpage function

export function Mainpage({Changeview}){

    // we create the state constant where the posts are saved

    const [publicaciones, setPublicciones] = useState([["prueva1","../../imagenes/publi.jpg"],
    ["prueva2","../../imagenes/publi.jpg"]])

    /* here we check if the localstorage exists if the publications constant exists it will change to what we have in the 
    localstorage if it does not exist we do the opposite we create the localsotarge and we put the publications constant 
    in it and we will do all this with the useeffect */

    useEffect(() => {
        if (localStorage.getItem("publicaciones")) {
            setPublicciones(JSON.parse(localStorage.getItem("publicaciones")));
        } else {
            localStorage.setItem("publicaciones", JSON.stringify(publicaciones));
        }
      }, []);

    // what the logout function does is eliminate the sessionstorage and redirect you to the login

    function logout (){
        sessionStorage.removeItem('user');
        Changeview('login')
    }

    /* what the function will do is create publications to begin with we need a constant where we will store the name and another 
    to store the value of the sessionstorage then if the name matches the sessionstorage then the publication is created otherwise 
    it will show you an alert that the user does not match */ 

    function createpubli() {
      
        const nombre = document.getElementById("nombre").value;
        const user = sessionStorage.getItem('user');
      
        if (user === nombre) {
          const newPubli = [nombre, "../imagenes/publi.jpg"];
          const updatedPubli = [...publicaciones, newPubli];
          
          setPublicciones(updatedPubli);
          document.getElementById("nombre").value = "";
          localStorage.setItem("publicaciones", JSON.stringify(updatedPubli));
        } else {
            alert("el usuario no coincide")
        }
    }

    // Delete the publication where the button we clicked is, but first check if the user who is logged in belongs to the publication
    function eliminatepubli(index) {

        const UserStorage = sessionStorage.getItem('user');
      
        if (UserStorage) {
            const updatedPubli = [...publicaciones];
            const [username] = publicaciones[index];
      
            if (username == UserStorage) {
                updatedPubli.splice(index, 1);
                setPublicciones(updatedPubli);
                localStorage.setItem('publicaciones', JSON.stringify(updatedPubli));
            }else{
                alert("esta publicacion no es tuya")
            }
        }
    }

    return(
        <div className='mainContainer'>
            <div className="m-3"></div> 

            <div>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light separation">
                        <div className="container-fluid">
                            <a className="navbar-brand h1 nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">fakeinsta</a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a>siguiendo</a><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-users separation2" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#7f5345" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <circle cx="9" cy="7" r="4" />
                                    <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                    <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
                                </svg></li>
                                <li><a>favoritos</a><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-star separation2" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#7f5345" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                                </svg></li>
                            </ul>
                            <div>
                                <div>
                                    <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"><FontAwesomeIcon icon={faPlus}/></button>
                                </div>
                            </div>
                            <div>
                                <button><FontAwesomeIcon icon={faHeart}/></button>
                            </div>
                            <div>
                                <button><FontAwesomeIcon icon={faPaperPlane}/></button>
                            </div>
                            <div>
                                <button type="button" className="btn btn-dark" onClick={() => logout() } >logout</button>
                            </div>
                        </div>
                    </nav>
                </div>

                <div className="m-3"></div>

                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">nombre de perfil</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                        <form onSubmit={createpubli}>
                            <label>cual es tu nombre</label>
                            <input type="text" name="nombre" id="nombre" />
                            <button type="submit">send</button>
                        </form>
                        </div>
                    </div>
                    </div>
                </div>
                
                <div id="father">
                    <div className="m-3"></div>
                    {publicaciones && publicaciones.map((publication , index) => (
                        <div className="separation" key={index}>
                            <div className="card">
                                <div className="container">
                                    <div className="row border border-dark">
                                        <div className="col"><button><FontAwesomeIcon icon={faCircleUser}/></button></div>
                                        <div className="col text-start">{publication[0]}</div>
                                        <div className="col"><button><FontAwesomeIcon icon={faBars}/></button></div>
                                        <div className="col"><button type="button" onClick={() => eliminatepubli(index)}><FontAwesomeIcon icon={faXmark}/></button></div>
                                    </div>
                                </div>
                                <div className="text-center border border-dark"><img src={publication[1]} className="rounded" /></div>
                                <div className="container">
                                    <div className="row border border-dark">
                                        <div className="col"><button><FontAwesomeIcon icon={faHeart}/></button></div>
                                        <div className="col"><button><FontAwesomeIcon icon={faCommentDots}/></button></div>
                                        <div className="col"><button><FontAwesomeIcon icon={faPaperPlane}/></button></div>
                                        <div className="col"><button><FontAwesomeIcon icon={faBookmark}/></button></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="m-3"></div>
                </div>

                <div className="m-3"></div>
                    
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light separation">
                        <div className="container-fluid">
                            <div>
                                <button type="button" className="btn btn-dark" id="trend">tendencia</button>
                            </div>
                        </div>
                    </nav>
                </div>  
            </div>
        </div>
    )
}