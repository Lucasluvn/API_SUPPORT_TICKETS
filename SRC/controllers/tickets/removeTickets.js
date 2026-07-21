export function removeTickets({request,response,database}){
  const {id} = request.params
  database.delete("tickets",id)
  return response.end(id)

}