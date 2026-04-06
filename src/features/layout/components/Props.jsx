import React from 'react';

function getImageUrl(person) {
    return `https://i.imgur.com/${person.imageId}s.jpg`;
}

function Avatar({ person, size }) {
    return (
        <div className="d-flex flex-column align-items-center mx-auto" style={{ textAlign: 'center', margin: '20px', maxWidth: 260 }}>
            <img
                className="avatar img-fluid shadow-sm"
                src={getImageUrl(person)}
                alt={person.name}
                width={size}
                height={size}
                style={{ borderRadius: '50%', objectFit: 'cover' }}
            />
            <h5 className="mt-3 mb-1 fw-bold">{person.name}</h5>
            <h6 className="text-muted mb-2" style={{ fontWeight: 600 }}>{person.title}</h6>
            <p className="text-muted small mb-0 px-2">{person.description}</p>
        </div>
    );
}

export default function Props() {
    return (
        <div className="container py-4 py-md-5">
            {/* Título adaptable con fs- (font-size) de Bootstrap */}
            <h1 className="text-center mb-3 fs-2 fs-md-1">Renderizado de Avatares con Props en React</h1>
            
            <p className="lead text-center text-muted mx-auto px-2" style={{ maxWidth: 800 }}>
                Este componente demuestra cómo utilizar props en React para transferir datos desde un componente padre hacia componentes hijos de forma eficiente.
            </p>

            {/* Contenedor flex optimizado para móviles */}
            <div className="d-flex flex-wrap justify-content-center align-items-start mt-4" 
                 style={{ gap: '30px 60px' }}>
                
                <Avatar
                    size={100}
                    person={{
                        name: 'Katsuko Saruhashi',
                        title: 'Geoquímica',
                        description: 'Primera mujer en ser elegida para la Academia de Ciencias de Japón.',
                        imageId: 'YfeOqp2'
                    }}
                />

                <Avatar
                    size={100} // Estandarizado un poco para mejor impacto visual en móvil
                    person={{
                        name: 'Aklilu Lemma',
                        title: 'Científico etíope',
                        description: 'Fue reconocido por descubrir un tratamiento natural eficaz contra la esquistosomiasis.',
                        imageId: 'OKS67lh'
                    }}
                />

                <Avatar
                    size={100}
                    person={{
                        name: 'Lin Lanying',
                        title: 'Ingeniera de materiales',
                        description: 'Contribuyó significativamente al desarrollo de la industria de semiconductores en China.',
                        imageId: '1bX5QH6'
                    }}
                />
            </div>
        </div>
    );
}