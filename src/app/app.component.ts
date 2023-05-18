import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  length = 0
  password = ''
  includeLetters = false
  includeNumbers = false
  includeSymbols = false

  onChangeLength(event: Event) {
    let value = (event.target as HTMLInputElement).value
    const number = parseInt(value)

    if(!isNaN(number)) {
      this.length = number
    } else {
      this.length = 0
    }
  }
  
  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers
  }
  
  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols
  }
  
  onButtonClick() {
    const numbers = '0123456789'
    const letters = 'abcdefghijklmnopqrstuvwxyz'
    const symbols = '!@#$%^&*()'

    let validChars = ''
    if(this.includeLetters) {
      validChars += letters
    }
    if(this.includeNumbers) {
      validChars += numbers
    }
    if(this.includeSymbols) {
      validChars += symbols
    }

    let generatedPassword = ''
    for(let i=0;i<this.length;i++) {
      let index = Math.floor(Math.random() * validChars.length)
      generatedPassword += validChars[index]
    }
    
    this.password = generatedPassword
  }

}
