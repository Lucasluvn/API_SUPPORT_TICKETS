import {create} from "../controllers/tickets/create.js"

import { index } from "../controllers/tickets/index.js"


export const tickets = [
 { method:"POST",
  path: "/tickets",
  // controller  vai executaralguma coisa quando essa rota for chamada
controller: create,

},
{ method:"GET",
  path: "/tickets",
  // controller  vai executar alguma coisa quando essa rota for chamada
controller: index,

}
  
]