import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import BtnWsp from './BtnWsp'

function Home() {
  return (
    <div className='flex flex-col' >
      <Navbar/>
      <div className='w-full'>
      <section className="bg-white dark:bg-gray-900 p-8 md:p-16 text-gray-800 dark:text-gray-300 mt-8">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-semibold text-center text-primary mb-8">Política de Seguridad y Privacidad del sitio Web de W2</h1>

        <h2 className="text-2xl font-semibold mt-6">Política de confidencialidad básica</h2>
        <p className="mt-4">
          Cuando se necesite información personal para usar o interactuar con nuestro sitio Web, la política de W2 establece que la misma, su nombre, dirección de correo electrónico, y/o número telefónico es privada y confidencial. La información personal que usted le proporciona a W2 se archiva en un sitio seguro, al cual sólo tiene acceso el personal autorizado y se usa sólo con el fin para el cual usted la proporcionó. Jamás les proporcionamos las direcciones de correo electrónico a terceros.
        </p>

        <h2 className="text-2xl font-semibold mt-6">Divulgación de información a terceros</h2>
        <p className="mt-4">
          La información personal se recopila como una de las funciones del sitio Web de W2, y no se comparte con terceros, excepto cuando se hace en cumplimiento del propósito para el cual usted la proporcionó o en caso de que sea solicitada por una entidad jurídica.
        </p>

        <h2 className="text-2xl font-semibold mt-6">Recopilación y uso de información</h2>
        <p className="mt-4">
          El sitio Web de W2 les pide a los usuarios que proporcionen cierta información identificable para poder usar ciertas funciones, cuando usted la proporciona, está de acuerdo en que la misma se compile y se use como dicta esta Política de Privacidad.
        </p>
        <p className="mt-4">
          La información que nos proporciona puede consistir en datos que usted ingresa cuando solicite alguna información sobre los servicios de W2, esta información puede incluir datos de contacto (nombre, teléfono y dirección de correo electrónico). Dicha información se usará en el procesamiento de ese pedido y si es necesario, para ponernos en contacto con usted con respecto al progreso del mismo. Al hacer el pedido, usted acepta y admite que dicho pedido pudiera ser procesado, suministrado o atendido por otras personas o entidades ajenas a W2; y que esos terceros usarán la información que se les proporcione de acuerdo a los límites establecidos por W2.
        </p>
        <p className="mt-4">
          W2 puede usar su información para ponerse en contacto con usted en referencia al estado de su solicitud y cualquier otro pedido que usted haga. Además, tanto W2 como nuestros agentes pueden contactarlo con respecto a servicios y características adicionales, o podemos pedirle opinión acerca de su experiencia con W2.
        </p>

        <h2 className="text-2xl font-semibold mt-6">Ubicación de información identificable</h2>
        <p className="mt-4">
          Nuestro sitio Web no ubica, recoge ni distribuye información personal acerca de sus visitantes, pero sí compila regularmente un conjunto de estadísticas que muestran la cantidad de visitantes a nuestro sitio Web, las solicitudes de información particular del sitio que recibimos, y los proveedores de servicios de Internet (ISP) de donde provienen dichas solicitudes. Este conjunto de estadísticas es usado por el personal interno de apoyo técnico de W2 para ofrecer mejor información y servicios al público. Las estadísticas en conjunto también se les ofrecen a las instituciones que otorgan permiso para que utilicemos su contenido en nuestro sitio Web.
        </p>

        <h2 className="text-2xl font-semibold mt-6">Cookies</h2>
        <p className="mt-4">
          Como la mayoría de los sitios Web, el de W2 utiliza “cookies” (pequeños ficheros de datos originados en la computadora del usuario) para que usted pueda navegar con mayor rapidez. Si entiende debidamente la forma en que se tiene acceso al sitio, puede mejorarlo continuamente para que responda a los intereses del usuario. Sin embargo, W2 no puede controlar el uso de los “cookies” por parte de anunciantes o terceros que procesan datos para W2. Si no desea que se compile información por medio del uso de esos ficheros, gran parte de los buscadores cuentan con un procedimiento simple que le permite rechazarlos o aceptarlos. Tenga en cuenta que podría necesitar esos “cookies” para usar ciertas características existentes en el sitio Web de W2.
        </p>

        <h2 className="text-2xl font-semibold mt-6">Sitios Web de terceros</h2>
        <p className="mt-4">
          Aunque el sitio Web de W2 pudiera proporcionarle enlaces a otros portales, no tenemos la obligación de advertirle que está visitando otro sitio Web. En caso de que opte por acceder a uno de esos sitios, W2 no se responsabiliza con ninguna acción ni política de los mismos. Además, tenga en cuenta que la política de privacidad y las prácticas de seguridad de un tercero pudieran ser diferentes a los principios establecidos por W2. W2 no asume responsabilidad alguna, ni controla, apoya ni garantiza aspecto alguno de su uso del sitio en cuestión. Le recomendamos que lea la política de privacidad de esa tercera entidad antes de ofrecerle información personal identificable.
        </p>

        <h2 className="text-2xl font-semibold mt-6">Cambios en nuestra Política de Privacidad</h2>
        <p className="mt-4">
          W2 se reserva el derecho de hacer cambios sin previo aviso a nuestra Política de Privacidad en cualquier momento y por cualquier razón. Cualquier cambio en la Política de Privacidad será incorporado a esta página para que usted esté siempre actualizado con respecto a nuestra política. Además, podemos ponernos en contacto con usted por correo electrónico para comunicarle cualquier cambio.
        </p>

        <h2 className="text-2xl font-semibold mt-6">Seguridad del sitio Web</h2>
        <p className="mt-4">
          W2 pone en práctica medidas de seguridad que corresponden con las mejores prácticas actuales para proteger su sitio Web, el correo electrónico y la lista de direcciones. Entre las mismas figuran medidas técnicas de procedimiento, de supervisión y ubicación, con el propósito de proteger los datos contra el uso indebido, acceso o divulgación no autorizados, pérdida, alteración o destrucción.
        </p>
        <p className="mt-4">
          Estamos conscientes de que pudieran producirse incidentes de uso indebido o incursiones de programas no autorizados, como les ocurre a casi todo sitio Web. En esos casos, nuestros propósitos son trabajar rápidamente para aislar el problema, garantizar o restablecer la funcionalidad adecuada, y reducir al mínimo cualquier inconveniencia a nuestros usuarios. Como es apropiado y necesario, W2 les notificará a las autoridades pertinentes estos incidentes de uso indebido o incursiones de programas no autorizados en su sitio Web.
        </p>
        <p className="mt-4">
          Le agradecemos que reporte cualquier problema llamando al (01) 27 960 72. Aunque en ocasiones no podemos darle respuesta a cada informe, lo tomaremos muy en serio y lo investigaremos exhaustivamente.
        </p>
      </div>
    </section>
      </div>
      <Footer/>
      <BtnWsp />

    </div>
  )
}

export default Home