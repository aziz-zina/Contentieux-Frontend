import { Frais } from './frais';
export class Risque {
  public numRisque?: number;
  public montantInitial: number;
  public fraisTotales: number;
  public soldePrincipal: number;
  public etatRisque: string;
  public tabFrais: Frais[];

  constructor(mi: number, ft: number, sp: number, etat: string, tab: Frais[], num?: number){
    this.numRisque = num;
    this.montantInitial = mi;
    this.fraisTotales = ft;
    this.soldePrincipal = sp;
    this.etatRisque = etat;
    this.tabFrais = tab;
  }
}
