import { Component } from '@angular/core';
import { CalculatorService } from '../services/calculator.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  constructor(private calculatorService: CalculatorService) {}

  get results() {
    return this.calculatorService.resultData;
  }
}
