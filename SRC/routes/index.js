// Arquivo index.js criado para "juntar" todas as rotas que tem o mesmo caminho

import { tickets } from "./tickets.js";  

import { parseRoutePath } from "../utils/parseRoutePath.js";

export const routes = [...tickets].map((route) => ({
...route,
path:parseRoutePath(route.path)
}

)
)