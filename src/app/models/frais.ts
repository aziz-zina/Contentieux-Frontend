import { Risque } from './risque';
export class Frais {
  public numFrais?: number;
  public typeFrais: String;
  public montantFrais: number;
  public dateFrais: Date;
  public etatFrais: String;
  public numPiece: number;
  public cin: number;
  public risque: Risque;

  constructor(type: String, montant: number, date: Date, etat: String, cin:number, numP: number, risque: Risque,num?: number){
    this.numFrais = num;
    this.typeFrais = type;
    this.montantFrais = montant;
    this.dateFrais = date;
    this.etatFrais = etat;
    this.risque = risque;
    this.numPiece = numP;
    this.cin = cin;
  }
}
