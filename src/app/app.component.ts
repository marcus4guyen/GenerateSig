import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as web3 from 'web3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  registryAddress: FormControl = new FormControl();
  docAddress: FormControl = new FormControl();
  verifierAddress: FormControl = new FormControl();
  signerAddress: FormControl = new FormControl();
  documentProof: string;
  generatedString: string;
  canDisplay: boolean;

  constructor() {
    this.registryAddress.valueChanges.subscribe(
      val => {
        if (!this.isHexValue(val)) {
          this.registryAddress.setErrors({message: 'Invalid Registry address. Example: 0x12345abcd'});
        }
      }
    );

    this.docAddress.valueChanges.subscribe(
      val => {
        if (!this.isHexValue(val)) {
          this.docAddress.setErrors({message: 'Invalid Dac address. Example: 0x12345abcd'});
        }
      }
    );

    this.verifierAddress.valueChanges.subscribe(
      val => {
        if (!this.isHexValue(val)) {
          this.verifierAddress.setErrors({message: 'Invalid Verifier address. Example: 0x12345abcd'});
        }
      }
    );

    this.signerAddress.valueChanges.subscribe(
      val => {
        if (!this.isHexValue(val)) {
          this.signerAddress.setErrors({message: 'Invalid Signer address. Example: 0x12345abcd'});
        }
      }
    );
  }

  generateSig() {
    this.generatedString = this.docAddress.value + this.verifierAddress.value + this.documentProof;
  }

  copyToClipboard() {
    document.querySelector('textarea').select();
    document.execCommand('copy');
  }

  isHexValue(value: string): boolean {
    const regExp = new RegExp(/0[xX][0-9a-fA-F]+/);
    return regExp.test(value);
  }
}
