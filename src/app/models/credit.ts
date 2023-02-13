export class Credit {
  public numCredit?: number;
  public soldeCredit: number;
  public etatCredit: String;

  constructor(solde: number, etat: String, num: number){
    this.numCredit = num;
    this.soldeCredit = solde;
    this.etatCredit = etat;
  }
}
