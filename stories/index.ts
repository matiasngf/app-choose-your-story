import { StoriesInterface } from './stories'

const stories: StoriesInterface = {
  'aventuras-francisto-julia': {
    title: 'Las aventuras de Francisco y Julia',
    blocks: {
      start: {
        body: 'Francisco espera a que su mamá lo vaya a buscar al colegio. Está sentado en la escalera con el guardapolvo celeste de siempre. Cuando llegue a su casa, va a tomar la merienda y correr a su habitación donde otra tarde de aventuras lo espera, pero no sin antes pasar a ver a Julia, su nueva prima.\nAyer recorrieron los mares en busca de tesoros, pero hoy, hoy los espera el bosque. Francisco pone en su mochila el hacha roja, para cortar las ramas que se interpongan en su camino, la cámara de fotos, para registrar todo su viaje, una lupa para ver bien de cerca, y las cantimploras: una amarilla para él, y otra violeta para Julia. Ah, y los anteojos de sol, infaltables. Ya está listo el equipaje para descubrir los misterios que la selva esconde.\n ¿Están preparados?',
        options: [
          {
            id: 'volver-habitacion',
            body: 'Volver a la habitación.'
          },
          {
            id: 'ir-bosque',
            body: 'Ir al bosque.'
          }
        ]
      },
      'volver-habitacion': {
        body: 'Francisco y Julia deciden que hoy están muy cansados para la aventura que habían pensado. En cambio, abren la persiana de la habitación y se dejan llevar por los juegos que propone la tía Lila. Primero toman la merienda y después, se suben a la alfombra mágica que la tía Lila tiene preparada para ellos para recorrer toda la casa.',
        options: []
      },
      'ir-bosque': {
        body: 'Francisco oscurece su habitación al momento en que entra en la selva desde un costado al cruzar el cable que marca el perímetro. Siente el ruido que hace el pasto en cada paso debajo de sus pies. Camina muy despacio para no perderse nada. Mira a la derecha, a la izquierda, camina hacia atrás. Siente un ruido a lo lejos y agarra con fuerza su hacha. No ve nada en el horizonte, pero no se va a quedar con la duda. \n Julia toma la iniciativa y se tira al piso, se desplaza cuerpo a tierra. Ahora sí puede ver el camino que las hormigas hicieron entre el pasto que hoy está amarillento por el calor del sol. Las sigue con su lupa hasta el hormiguero y descubre que llevan hojas en sus lomos hacia el interior del hormiguero. Francisco sabe que cuando las hormigas hacen eso, es porque una tormenta se acerca, pero ese sólo indicio no es suficiente para estar seguros.',
        options: [
          {
            id: 'suficiente-aventura',
            body: 'Suficiente aventura por un día.'
          },
          {
            id: 'buscar-indicios',
            body: 'Buscan otros indicios.'
          }
        ]
      },
      'suficiente-aventura': {
        body: ' Los dos ya están muy cansados y tienen hambre. Julia le pide a Francisco que busquen algo para comer, así que él, recordando todo lo que sabe sobre las hormigas, se dispone a seguirlas para ver dónde encuentran su comida. \n Agachados, siguen el camino que las hormigas dejan en la tierra hasta que llegan a un campo repleto de manzanos. No es lo que Julia espera, porque no le gusta ninguna fruta, pero tiene tanto, pero tanto hambre, que decide…',
        options: [
          {
            id: 'darle-oportunidad',
            body: 'Darle una oportunidad.'
          },
          {
            id: 'volver-habitacion',
            body: 'Definitivamente NO.'
          }
        ]
      },
      'darle-oportunidad': {
        body: 'Julia busca algún lugar en dónde lavar la manzana que Francisco le ayuda a sacar de uno de los árboles. No tardan mucho en encontrar un río de agua dulce. Después de limpiar bien la fruta, Julia le da un mordisco para descubrir que no era tan grave. Ahora que ya se siente mucho mejor, Francisco le pregunta qué opina y julia responde: \n Son muy ricas, como vos decis siempre, pero no me gustan. \n Le regala una sonrisa y vuelven juntos al bosque para seguir buscando indicios',
        options: [
          {
            id: 'buscar-indicios',
            body: 'Buscan otros indicios.'
          }
        ]
      },
      'buscar-indicios': {
        body: 'Miran al cielo y ven nubes, pero no tan oscuras como para preocuparse. Se disponen a la búsqueda de otros indicios, por ejemplo, alguaciles, prueba máxima de una próxima tormenta. Un árbol enorme se atraviesa en el camino. Se miran sorprendidos.  \n Cómo puede ser que esas criaturas tan grandes vivan sin desprenderse del suelo. Intentan preguntarle al árbol, pero después de gritar, patalear y golpear el tronco, no consiguen respuesta. Julia busca alguien con quien hablar y piensa que obtendría mejores resultados con un animal.  \n Escuchan que algo se mueve entre las ramas más altas de ese árbol y vuelven a buscar sus binoculares para ver a larga distancia. Ven que eso que se mueve es….Es ¡Un mono! que salta de rama en rama ayudado por su cola. Julia alza su voz haciendo que llegue bien alto. El mono baja a su encuentro y se dispone a escuchar a estos nuevos visitantes de la selva: \n -Francisco: ¿Cómo te llamas? \n -Mono: Me llamo Ramiro. ¿Vinieron para aprender sobre nosotros? \n -Francisco: Sí, queremos saber por qué ese árbol no nos contesta, pero vos sí. Estoy seguro de que, si hablara con otros animales, también me contestarían pero, en cambio, aquellos que están fijos al suelo, no dicen una sola palabra. \n -Ramiro: Eso es porque las plantas no tienen cuerdas vocales. Los animales sí y por eso podemos responderles pero, sin embargo, no todos de la misma manera. Por ejemplo, los leones rugen, los gansos graznan y las ranas croan. Los únicos que podemos hablar con ustedes de esta manera somos los monos, los animales más parecidos a los humanos.  \n -¿Cómo viven las pantas?- Quiso saber Julia. \n -Ramiro: Las plantas toman agua de la tierra por medio de sus raíces y la llevan a todas las ramas y hojas. Si quieren ver cómo son por dentro, pueden rascar con el hacha este tronco. Pero tengan cuidado porque los árboles también sienten. \n Francisco y Julia no quieren lastimar a nadie, pero tienen mucha curiosidad por saber cómo son por dentro. Así que hacen lo que le dice Ramiro y, con mucho cuidado, separan una parte de la corteza marrón del tronco. Se encuentran con algo que los maravilla. Por dentro, ese tronco inmenso también tiene partes verdes y vetas alargadas.  \n Julia ya está muy cansada y tienen hambre, por lo que se despide de Ramiro y toma de la mano a Francisco para volver a la habitación, contar todo lo que aprendieron en esta aventura y prepararse para la que los espera mañana.',
        options: []
      }
    }
  }
}

export default stories
