import {create} from "../controllers/tickets/create.js"
export const tickets = [
 { method:"POST",
  path: "/tickets",
  // controller  vai executaralguma coisa quando essa rota for chamada
controller: create,

}
  
]