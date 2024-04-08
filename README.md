Implementacion de los hooks:

#useContext:
El contexto fue utilizado para desarrollar la funcionalidad de alternar entre un modo oscuro y un modo claro, empezando por defecto en modo oscuro. Pudiendo cambiarlo mediante el boton amarillo con icono del sol

#useEffect:
Se utilizo en un custom hook llamado "useFetchData", dicho hook sirve para hacer una peticion a una API que devuelve información del videojuego Overwatch, para luego almacenar dicha información en un estado mediante useState. El custom hook se ejecuta en un principio realizando una peticion vacia a la API, sin embargo se vuelve a ejecutar cada vez que se preciona el boton azul con un dado giratorio. Con su resultado se obtiene información de un personaje del videojuego de manera aleatoria. 

#useReducer: 
Con este hook se realizo un contador como el que se muestra en el material de la clase. Lo que hace es mediante 3 tipos de acciones, adiciona de uno en uno al contador, restar de la misma manera o resetear el contador, volviendo a su estado original (0).

#useState:
Este hook fue utilizado en multiples secciones durante el desarrollo del trabajo, principalmente para almacenar la información obtenida con el useEffect, asi como el numero random que se utiliza para seleccionar de un array el nombre del personaje a buscar y para almacenar el estado del tema en el contexto del modo oscuro.

#Gestion de carpetas:

*assets: Se utilizo para guardar la imagen del dato

*components: Se crearon los componentes de los botones utilizados en la seccion del reducer (Buttom.jsx), el boton del dato que ejecuta la funcion de la peticion a la API (FetchButtom.jsx), el componente de las secciones para implementar de manera mas sencilla el cambio entre modo oscuro y claro (Section.jsx), el componente donde se aplica el hook useReducer para el contador (countReducer.jsx) y por ultimo el boton que cambia entre temas (ThemeButtom.jsx)

*context: Se coloco el contexto del proyecto, en el que se almacena el estado del tema mediante un booleano y la funcion para cambiarlo 

*data: Se almacena un array con los nombres de los personajes del videojuego Overwatch con el cual posteriormente mediante una funcion se genera un numero random que representara una posición del array y sera usado como parte del la query en la peticion a la API. 

*hooks: Se desarrollo un custom hook para realizar peticiones GET a una API mediante una query que variara aleatoriamente

// Se utilizo la biblioteca TailwindCSS mediante su CDN para el estilo de la aplicación.
