export class Utilisateur {
  public matricule?: number;
  public password: string;
  public nomUser: string;
  public prenomUser: string;
  public grade: string;

  constructor(psw: string, nom: string, prenom: string, grade: string, mat?: number){
    this.matricule = mat;
    this.password = psw;
    this.nomUser = nom;
    this.prenomUser = prenom;
    this.grade = grade;
  }
}
