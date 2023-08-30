export function convertToReal2 (num: number): string {
  return `R$ ${num.toFixed(2).replace(".", ",")}`
}

export function convertToReal (num: number): string {
  return num.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })
}
