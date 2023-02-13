import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MessageService } from 'primeng/api';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { InputNumberModule } from 'primeng/inputnumber';
import { MegaMenuModule } from 'primeng/megamenu';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { TabMenuModule } from 'primeng/tabmenu';
import { ToastModule } from 'primeng/toast';
import { AfficherClientComponent } from './afficher-client/afficher-client.component';
import { AfficherDebiteurComponent } from './afficher-debiteur/afficher-debiteur.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChercherClientComponent } from './chercher-client/chercher-client.component';
import { ConsultationComponent } from './consultation/consultation.component';
import { ConsulterDebiteurComponent } from './consulter-debiteur/consulter-debiteur.component';
import { ConsulterFraisComponent } from './consulter-frais/consulter-frais.component';
import { HomeComponent } from './home/home.component';
import { InfoFraisComponent } from './info-frais/info-frais.component';
import { InfoComponent } from './info/info.component';
import { ListeFraisComponent } from './liste-frais/liste-frais.component';
import { UpdateFraisComponent } from './update-frais/update-frais.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { FrontPageComponent } from './front-page/front-page.component';
import {PasswordModule} from 'primeng/password';


@NgModule({
  declarations: [
    AppComponent,
    AfficherClientComponent,
    ChercherClientComponent,
    ConsulterDebiteurComponent,
    AfficherDebiteurComponent,
    HomeComponent,
    ConsultationComponent,
    InfoComponent,
    ConsulterFraisComponent,
    InfoFraisComponent,
    ListeFraisComponent,
    UpdateFraisComponent,
    NavbarComponent,
    LoginComponent,
    FrontPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    MenuModule,
    HttpClientModule,
    TableModule,
    FormsModule,
    ToastModule,
    BrowserAnimationsModule,
    InputNumberModule,
    RippleModule,
    AccordionModule,
    TabMenuModule,
    DialogModule,
    MegaMenuModule,
    MenubarModule,
    CalendarModule,
    DynamicDialogModule,
    DropdownModule,
    PasswordModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
