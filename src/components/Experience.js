import React from 'react';

function Experience()
{
    const misExperiencias=[
        {
            // Primer trabajo(mas reciente)
            puesto:"Desarrollador Frontend",
            empresa: "Tech Solutions",
            ubicacion: "Tongoy",
            periodo: "Enero 2024 - Presente",
            reponsabilidades:[
                            "Responsabilidad 1",
                            "Responsabilidad 2",
                            "Responsabilidad 3",
                            "Responsabilidad 4"
                            ]
        },
        {
         // Segundo trabajo trabajo(mas reciente)
            puesto:"Desarrollador Junior",
            empresa: "Duoc UC",
            ubicacion: "Los Vilos",
            periodo: "Junio 2023 - Diciembre 2023",
            reponsabilidades:[
                            "Responsabilidad 1",
                            "Responsabilidad 2",
                            "Responsabilidad 3",
                            "Responsabilidad 4"
                            ]
        }
    ];

    return(
        <section className='mb-5'>
            <div className='card-shadow-sm'>
                <div className='card-header bg-white'>
                    <h2 className='h4- mb-0 text-primary'>
                        Experiencia Laboral:
                    </h2>
                </div>
                <div className='card-body'>
                    {/* Mapeo experiencias: recorre las experiencias, bloque html, creando un tipo de ciclo for 
                    */}
                    {
                      misExperiencias.map((trabajo, index)=> (

                        <h3>
                            {trabajo.puesto}
                        </h3>
                      )
                        
                        )     
                    }
                    
                </div>
            </div>
        </section>
    );


}

export default Experience;