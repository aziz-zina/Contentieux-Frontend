import { Risque } from './risque';
export class Debiteur {
  public numCtx?: number;
  public etatCtx: String;
  public soldeCtx: number;
  public nomCtx: String;
  public prenomCtx: String;
  public lesRisques: Risque[]

  constructor(etat: String, solde: number, nom: String, prenom: String, tab: Risque[], num?: number){
    this.numCtx = num;
    this.etatCtx = etat;
    this.nomCtx = nom;
    this.prenomCtx = prenom;
    this.soldeCtx = solde;
    this.lesRisques = tab;
  }
}
