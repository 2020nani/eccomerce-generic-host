import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[formatPrice]',
})
export class FormatPriceDirective {
  private elemento: HTMLInputElement;

  constructor(private el: ElementRef) {
    this.elemento = this.el.nativeElement;
  }

  @HostListener('input', ['$event'])
  onInputChange(event: Event): void {
    const valorSemFormato = this.elemento.value.replace(/[^\d]/g, '');
    const valorFormatado = this.formatarParaReais(valorSemFormato);
    this.elemento.value = valorFormatado;
  }

  private formatarParaReais(valor: string): string {
    if (valor.length === 0) return '';

    const valorNumerico = parseFloat(valor) / 100;
    return valorNumerico.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  }
}
