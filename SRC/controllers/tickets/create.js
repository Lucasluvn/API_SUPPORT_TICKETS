import {randomUUID} from "node:crypto"


// colacando os parametros entre parentese eu posso passar los em qualquer ordem 
export function create({request,response}) {
  const {equipment,description, user_name,
  } = request.body

  const ticket = {
    id: randomUUID(),
    equipment,
    description,
    user_name,
    status: "open",
    created_at: new Date(),
    updated_at: new Date(),
}
 return response.end(JSON.stringify(ticket))
}