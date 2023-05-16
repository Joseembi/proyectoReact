import { useState } from 'react'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.css'

export function Register({Changeview}) {
  return (
    <div className="registeContainer">
      <div className="m-3"></div>
        <div className="text-center separation">
          <div className="card">
            <div className="container border p-2">
              <div className="row">
                <div className="display-1 col-12">fakeinsta</div>
                <form action="newuser.html" method="post" id="createuser">
                  <div className="form-group p-2">
                    <p> cual quieres que sea tu nombre de usuario:</p>
                    <input type="text" name="user" id="user"/>
                  </div>
                  <div className="form-group p-2">
                      <p>escribe aqui el password:</p>
                      <input type="password" name="createpassword" id="createpassword"/>
                    </div>
                    <div className="form-group p-2">
                      <p>confirma tu password:</p>
                      <input type="password" name="confpassword" id="confpassword"/>
                    </div>
                  <button type="button" className="btn btn-primary">register</button>
                  <div>
                    <p>si ya tienes una cuenta inicia sesion</p>
                    <button type='button' className="btn btn-primary" onClick={ () => Changeview('login')}>return to login</button>
                  </div>
                </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
