import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  imports: [],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  current: string = '0'
  n1: string = '0'
  n2: string = ''
  op: string = '';
  ja = '';
  digit(d: string) {
    this.current = Number(this.current + d).toString();
  }
  operator(o: string) {
    this.n1 = this.current;
    this.current = '0'
    this.op = o;
    this.n2 = '';
  }
  equal() {
    let a = Number(this.n1);
    let b = Number(this.current);
    switch (this.op) {
      case '+':
        this.ja = (a + b).toString();
        this.n2 = this.current;
        this.current = '';
        this.current = this.ja;
        break;
      case '-':
        this.ja = (a - b).toString();
        this.n2 = this.current;
        this.current = '';
        this.current = this.ja;
        break;
      case '*':
        this.ja = (a * b).toString();
        this.n2 = this.current;
        this.current = '';
        this.current = this.ja;
        break;
      case '/':
        this.ja = (a / b).toString();
        this.n2 = this.current;
        this.current = '';
        this.current = this.ja;
        break;
      case '%':
        this.ja = (a % b).toString();
        this.n2 = this.current;
        this.current = '';
        this.current = this.ja;
        break;
      default:
        break;
    }
  }
  ac() {
    this.current = '0'
    this.n1 = '0'
    this.n2 = ''
    this.op = ''
    this.ja = '';
  }
  dot() {
    if (!this.current.includes('.')) {
      this.current += '.';
    }
  }
  onBackspace(): void {
    this.n1 = '';
    this.n2 = '';
    this.op = '';
    if (this.current.length > 1) {
      this.current = this.current.slice(0, -1);
    }
    else if (this.current.length === 1) {
      this.current = '0'
    }
  }
}
