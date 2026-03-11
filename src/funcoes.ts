// Exercício 1: CalcularIMC
function calcularIMC(peso: number, altura: number): number {
    return peso / (altura * altura);
}

// Exercício 2: Formatar Nome Completo
function formatarNome(nome: string, sobrenome?: string): string {
    if (sobrenome) {
        return `${nome} ${sobrenome}`;
    }
    return nome;
}

// Exercício 3: Verificar Maioridade
function verificarMaioridade(idade: number): boolean {
    return idade >= 18;
}

// Exercício 4: Interface de Produto
interface Produto {
    id: number;
    nome: string;
    preco: number;
}

function formatarProduto(produto: Produto): string {
    return `Produto: ${produto.nome} - R$ ${produto.preco.toFixed(2)}`;
}

// Exercício 5: Filtrar Números Pares
function filtrarPares(numeros: number[]): number[] {
    return numeros.filter(n => n % 2 === 0);
}

// Exercício 6: Converter Temperatura
type UnidadeTemperatura = "celsius" | "fahrenheit";

function converterTemperatura(valor: number, unidade: UnidadeTemperatura): number {
    if (unidade === "celsius") {
        // Celsius p/ Fahrenheit
        return (valor * 9 / 5) + 32;
    } else {
        // Fahrenheit p/ Celsius
        return (valor - 32) * 5 / 9;
    }
}

// Exercício 7: Contar Ocorrências (Genérico)
function contarOcorrencias<T>(array: T[], elemento: T): number {
    return array.filter(item => item === elemento).length;
}

// Exercício 8: Interface de Aluno
interface Aluno {
    nome: string;
    notas: number[];
    matricula: string;
}

function calcularMedia(aluno: Aluno): number {
    const soma = aluno.notas.reduce((acc, nota) => acc + nota, 0);
    return soma / aluno.notas.length;
}

// Exercício 9: Tipo de Resposta de API (Genérico)

type ApiResponse<T> = {
    sucesso: boolean;
    dados: T | null;
    erro: string | null;
};

interface Usuario {
    id: number;
    nome: string;
    email: string;
}

function buscarUsuarios(): ApiResponse<Usuario[]> {
    return {
        sucesso: true,
        dados: [
            { id: 1, nome: "Zé Nedin Zidane-se", email: "zenedin@email.com" },
            { id: 2, nome: "Kilimanja Arrola", email: "kilimanja@email.com" }
        ],
        erro: null
    };
}

// Exercício 10: Componente Tipado de Lista de Tarefas
interface Tarefa {
    id: number;
    titulo: string;
    concluida: boolean;
}

interface ListaTarefasProps {
    tarefas: Tarefa[];
    onToggle: (id: number) => void;
}

export function ListaTarefas({ tarefas, onToggle }: ListaTarefasProps) {
    type Filtro = "todas" | "pendentes" | "concluidas";
    
    let filtroAtual: Filtro = "todas";

    console.log(`Log: Exibindo ${tarefas.length} tarefas.`);
}