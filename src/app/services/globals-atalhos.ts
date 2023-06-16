import { ConsultaClienteComponent } from "../components/consulta-cliente/consulta-cliente.component";
import { Atalho } from "../models/atalho.model";

export const globalAtalhos: Atalho[] = [
   new Atalho({ keys: 'Alt.1', description: 'Teste Global 1', component: ConsultaClienteComponent }),
   new Atalho({ keys: 'Alt.2', description: 'Teste Global 2', component: ConsultaClienteComponent }),
   new Atalho({ keys: 'Alt.3', description: 'Teste Global 3', component: ConsultaClienteComponent }),
]