import React from 'react';

function About()
{
     const miDescripcion =`Desarrollador apasionado por crear 
                        soluciones web innovadoras y eficientes. Con experiencia en 
                        Jacascript, React y Node.js.`;
    return (
        <section className ='mb-5'>
            <div className='card shadow-sm'>
                <div className='card-header bg-white'>
                    <h2 className='h4- mb-0 text-primary'>
                        Acerca de mí
                    </h2>
                </div>
                <div className='card-body'>
                    <p className='card-text lead mb-0'>
                       {miDescripcion}
                    </p>
                </div>
            </div>
        </section>
    );
}
export default About;
