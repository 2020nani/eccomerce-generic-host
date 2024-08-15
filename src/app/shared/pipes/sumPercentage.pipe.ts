import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sumPercentage',
})
export class SumPercentagePipe implements PipeTransform {
  transform(valor1: number, valor2: number, total: number): string {
    const soma = valor1 + valor2;
    const porcentagem = (soma / total) * 100;
    return `${porcentagem.toFixed(2)}%`;
  }
}
