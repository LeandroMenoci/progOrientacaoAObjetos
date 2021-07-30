import { Cliente } from './Cliente.js';
import { Gerente } from './Funcionarios/Gerente.js';
import { Diretor } from './Funcionarios/Diretor.js';
import { SistemaAutenticacao } from './SistemaAutenticacao.js';

const diretor = new Diretor("Rodrigo", 10000, 123123456789);
diretor.cadastrarSenha("123456789")
const gerente = new Gerente("Ricardo", 5000, 123456456789);
gerente.cadastrarSenha("123")

const cliente = new Cliente("Lais", 123456789789, "456")
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456789");
console.log(gerenteEstaLogado, diretorEstaLogado)

const clienteEstaLogado = SistemaAutenticacao.login(cliente, "456");
console.log(clienteEstaLogado)


