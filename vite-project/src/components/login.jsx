import { useEffect, useState } from 'react'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.css'

// We create and export the login function

export function Login({Changeview}){

    // We use the useEffect to check if the sessionStorage exists and if it exists it will redirect us to the main page

    useEffect(()=>{
        const session = sessionStorage.getItem('user')
        if(session){
            Changeview('mainpage')
        }
    },[])

    // here we create a state constant that will be where the users and their passwords are stored

    const [loginuser, setLoginUser] = useState([
        ["jose", "123"],
        ["diego", "456"],
        ["ivan", "789"],
        ["izaskun", "147"]
    ]);

    // Here we create another 2 status constants that together with the other one that we have created, we will use them to login

    const [contra , setContra] = useState()
    const [usuario , setUsuario] = useState()

    // In this function we collect the value of 2 inputs and store them in the variables from before depending on the case

    function valuesthellogin(event){
        switch (event.target.id) {
            case "user":
              setUsuario(event.target.value);
              
            case "pass":
              setContra(event.target.value);   
        }
    }

    /* The loguser function has 2 variables, a boolean initialized to false and the i initialized to 0 that will be increased, 
    it also has a loop that creates the variable j initialized to 0 and that goes through conf (the loginuser state constant) 
    and checks if the position of conf matches user (the user state constant), if it matches enters and checks if the position 
    of conf matches pass (the state constant against), if it matches you shows a message in the console creates the sessionstorage 
    with the username changes the view to the main page and the Boolean becomes true, if it does not match it will show you an 
    incorrect password alert, once you have entered one of those cases the i is equal to the length of conf and then it is increased 
    once more so that it does not enter the condition that we have outside the loop, what this condition does is that if it has gone 
    through conf and login is false and we enter it means that the user we have put does not exist */

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