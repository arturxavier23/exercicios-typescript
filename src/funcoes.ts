// 1
export function somar(a: number, b: number): number {
  return a + b;
}

// 2
export function subtrair(a: number, b: number): number {
  return a - b;
}

// 3
export function multiplicar(a: number, b: number): number {
  return a * b;
}

// 4
export function dividir(a: number, b: number): number | string {
  if (b === 0) return "Divisão por zero";
  return a / b;
}

// 5
export function ehPar(n: number): boolean {
  return n % 2 === 0;
}

// 6
export function saudacao(nome: string): string {
  return `Olá, ${nome}`;
}

// 7
export function media(valores: number[]): number {
  const soma = valores.reduce((a, b) => a + b, 0);
  return soma / valores.length;
}

// 8
export function maiusculo(texto: string): string {
  return texto.toUpperCase();
}

// 9
export function maiorNumero(lista: number[]): number {
  return Math.max(...lista);
}

// 10
interface Usuario {
  nome: string;
  idade: number;
}

export function mostrarUsuario(usuario: Usuario): string {
  return `${usuario.nome} tem ${usuario.idade} anos`;
}

