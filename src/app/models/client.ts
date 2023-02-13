import { Credit } from './credit';
export class Client {
  public idClient?: number;
  public nomClient: String;
  public prenomClient: String;
  public etatClient: String;
  public lesCredit: Credit[];

  constructor(nom: String, prenom: String, etat: String, tab: Credit[],id?: number){
    this.idClient = id;
    this.nomClient = nom;
    this.prenomClient = prenom;
    this.etatClient = etat;
    this.lesCredit = tab;
  }
}
