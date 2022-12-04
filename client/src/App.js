import { BrowserRouter, Route, Switch } from "react-router-dom";
import styles from "./App.module.css";
import AllCakes from "./componentes/AllCakes/AllCakes";
import Cake from "./componentes/Cake/Cake";
import NewCake from "./componentes/NewCake/NewCake";
import UpdateCake from "./componentes/UpdateCake/UpdateCake";



function App() {
  return (
    <div className="container">
        <h5  className="flex justify-center font-bold text-slate-50 bg-[#440808] h-[40px] items-center w-[100xp]">ANTES DE REALIZAR TU PEDIDO REVISA NUESTRA AREA DE COBERTURA</h5>
        <div data-theme="autumn" className="sticky top-0  bg-[#FFFFFFDE]">
        <div div class="navbar bg-base-100  pl-32 bg-transparent">
        <div class="navbar-start w-[40%] bg-transparent ">
                <div class="dropdown ">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                   
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">
                  <a> <img src="/imagenes/logo.jpeg" alt="logo" className= {`${styles.img}  btn btn-ghost normal-case text-xl`}/> </a>
                        <li><a>Inicio</a></li>
                        <li tabindex="0">
                        <a className="justify-between">
                            Productos
                            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
                        </a>
                        <ul class="p-2  bg-[#F2F2F2] ">
                                <li className="hover:bg-red-400"><a>Cupcakes</a></li>
                                <li className="hover:bg-red-400"><a >Galletas</a></li>
                                <li className="hover:bg-red-400"><a >Tortas</a></li>
                                <li className="hover:bg-red-400"><a >Postres</a></li>
                            </ul>
                            
                        </li>
                       
                        <li><a>Contactenos</a></li>
                        <li><a>Domicilios</a></li>
                          
                    </ul>                      
                </div>
              
            </div>       
            
                <div class=" navbar-center   text-[18px]  hidden lg:flex ">
                    <div class=" menu menu-horizontal p-0  pl-[10px] pr-[10px]  ">
                        <li className="pt-[40px] pb-[10px] h-[10px] "><a href="#" class=" rounded-t-lg  border-b-2 border-transparent hover:text-red-500 dark:hover:text-gray-200 hover:border-red-600 ">Inicio</a></li>
                        <li tabindex="0"  className=" pt-[40px] pb-[10px] h-[10px] ">
                            <a href="#" class=" rounded-t-lg border-b-2 border-transparent hover:text-red-500 dark:hover:text-gray-200 hover:border-red-600  mr-[10px]">
                            Productos
                            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                            </a>
                            <ul class="p-2 mt-[43px] bg-[#F2F2F2] ">
                                <li className="hover:bg-red-400"><a>Cupcakes</a></li>
                                <li className="hover:bg-red-400"><a >Galletas</a></li>
                                <li className="hover:bg-red-400"><a >Tortas</a></li>
                                <li className="hover:bg-red-400"><a >Postres</a></li>
                            </ul>
                           
                        </li>
                         <li>
                            <img src="/imagenes/logo.jpeg" alt="logo" className= {`${styles.img}  col-3 img-fluid btn btn-ghost normal-case`}/> 
                        </li>
                        <li  className="  pt-[40px] pb-[10px] h-[10px] "><a href="#" class=" rounded-t-lg border-b-2 border-transparent hover:text-red-500 dark:hover:text-gray-200 hover:border-red-600  ml-[10px]">Contactenos</a></li>
                        <li  className=" pt-[40px] pb-[10px] h-[10px] "><a href="#" class=" rounded-t-lg border-b-2 border-transparent hover:text-red-500 dark:hover:text-gray-200 hover:border-red-600  ">Domicilios</a></li>
                    </div>
                </div>
                <div class="navbar-end">
    <div class="dropdown dropdown-end">
      <label tabindex="0" class="btn btn-ghost btn-circle">
        <div class="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span class="badge badge-sm indicator-item">8</span>
        </div>
      </label>
      <div tabindex="0" class="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div class="card-body">
          <span class="font-bold text-lg">8 Items</span>
          <span class="text-info">Subtotal: $999</span>
          <div class="card-actions">
            <button class="btn btn-primary btn-block">View cart</button>
          </div>
        </div>
      </div>
    </div>
    <div class="dropdown dropdown-end">
      <label tabindex="0" class="btn btn-ghost btn-circle avatar">
        <div class="w-10 rounded-full">
          <img src="https://placeimg.com/80/80/people" />
        </div>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a class="justify-between">
            Profile
            
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
        </div>
      </div>
      <div>
        <img src="/imagenes/banner.jpg" alt="logo" className= {`${styles.imagen} `}/> 
      </div>
      <br/>
      <div className="container">
        <h1 className="text-2xl pl-10">Productos destacados</h1>
      </div>
      
        <footer className="footer footer-center p-10 bg-[#B29B64] text-base-content rounded">
            <div className="grid grid-flow-col gap-4">
                <a className="link link-hover">Terminos y condiciones</a> 
                <a className="link link-hover">Contactenos</a> 
                <a className="link link-hover">Carrito de compras</a> 
                <a className="link link-hover">Quines somos</a>
            </div> 
            <div>
                <div className="grid grid-flow-col gap-4">
                <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a> 
                <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a> 
                <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                </div>
            </div> 
            <div>
                <p>Copyright © 2022 - All right reserved by "nombre del equipo"</p>
            </div>
        </footer>
      
      
      
      
      <BrowserRouter>

        <Switch>
          <Route path="/cakes" exact render={() => <AllCakes />} />
          <Route path="/cake/new" exact render={() => <NewCake />} />
          <Route path="/cake/:id" exact render={(routeProps) => <Cake {...routeProps} />} />
          <Route path="/cake/update/:id" render={() => <UpdateCake />}/>
        </Switch>

</BrowserRouter>
    </div>
  );
}

export default App;