import { useEffect, useState } from 'react'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.css'

export function Login({Changeview}){

    useEffect(()=>{
        const session = sessionStorage.getItem('user')
        if(session){
            Changeview('mainpage')
        }
    },[])

    const [loginuser, setLoginUser] = useState([
        ["jose", "123"],
        ["diego", "456"],
        ["ivan", "789"],
        ["izaskun", "147"]
    ]);

    const [contra , setContra] = useState()
    const [usuario , setUsuario] = useState()

    function valuesthellogin(event){
        switch (event.target.id) {
            case "user":
              setUsuario(event.target.value);
              
            case "pass":
              setContra(event.target.value);   
        }
    }

    function loguser(conf,user,pass){
        let i = 0
        let login = false
        while (i < conf.length){
            let j = 0  
            if (conf[i][j] == user){
                j+=1
                if (conf[i][j] == pass){
                    console.log('logeado')
                    sessionStorage.setItem('user', user)
                    Changeview('mainpage')
                    login = true
                }else{
                    alert ('contraseña incorrecta')
                }
                i = conf.length
            }
            i+=1 
        }
    
        if (i == conf.length && login == false ){
            alert ('usurio no existe')
        }
    }

    return(
        <div className='loginContainer'>
            <div className="m-3"></div> 

            <div className="text-center separation">
                <div className="card">
                    <div className="container border p-2">
                        <div className="row">
                            <div className="display-1 col-12">fakeinsta</div>
                            <form>
                                <div className="form-group p-2">
                                    <p className="h5">introduce tu nombre de usuario</p>
                                    <input type="text" id='user' placeholder="nombre de usuario" onInput={valuesthellogin}/>
                                </div>
                                <div className="form-group p-2">
                                    <p className="h5">introduce tu contraseña</p>
                                    <input type="password" id='pass' placeholder="contraseña" onInput={valuesthellogin}/>
                                </div>
                                <div className="d-grid gap-2 col-2 mx-auto">
                                    <button type="button" className="btn btn-primary" onClick={() => loguser(loginuser, usuario, contra)}>login</button>
                                </div>
                                <div>
                                    <p>si no tienes una cuenta creada entra a aqui</p>
                                    <button type="button" className="btn btn-primary" onClick={ () => Changeview('register')}>register</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}