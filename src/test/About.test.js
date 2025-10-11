import About from "../components/About";
//importa About.js desde la direccion About
import {render, screen} from '@testing-library/react';//importa el renderizado y la pantalla desde la libreria testing desde react recorrer la pista
import '@testing-library/jest-dom'; // importacion para habilitar el testing



//crear descriptor
describe('Componente About - Pruebas Front', ()=>{
  //Prueba 1: Renderizado sin herrores
  // Renderizado === Que se dibuje que aparesca

  test('Test 1: Componente renderiza sin errores',()=>{
    render(<About/>)
  });//Fin Checklist



  //Prueba 2: Muestra titulo Ok
  test('Test 2: Muestra titulo "Acerca de Mi"',()=>{

    //Si se quiere saber si el titulo esta bien lo primero en rebisar es

    render(<About/>);

    //se deve definir la constante a evaluar screen.getByText(/titulo que deve ser/i) 

    // i = ignora mayusculas hace que el contenido este bien 

    const titulo = screen.getByText(/Acerca de Mí/i);

        expect(titulo).toBeInTheDocument();

  });

   // ´rueba 3 : Estructura card correcta
   test('Test3: Tiene estructura de card de BootStrap',()=>{
        const {container}=render(<About/>);
        const card= container.querySelector('.card');

        expect (card).toBeInTheDocument();
        expect (card).toHaveClass('shadow-sm');
   })



//fin descriptor este es la estructura del documento de la prueba


});
 