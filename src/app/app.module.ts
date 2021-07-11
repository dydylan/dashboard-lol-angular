import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './composants/header/header.component';
import { FooterComponent } from './composants/footer/footer.component';
import { ManageTeamComponent } from './composants/manage-team/manage-team.component';
import { LoginComponent } from './composants/login/login.component';
import { SignupComponent } from './composants/signup/signup.component';
import { CharacterComponent } from './composants/character/character.component';
import { FightComponent } from './composants/fight/fight.component';
import { EditProfileComponent } from './composants/edit-profile/edit-profile.component';
import { MyTeamComponent } from './composants/fight/my-team/my-team.component';
import { HisTeamComponent } from './composants/fight/his-team/his-team.component';
import { SeeTeamComponent } from './composants/see-team/see-team.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ManageTeamComponent,
    LoginComponent,
    SignupComponent,
    CharacterComponent,
    FightComponent,
    EditProfileComponent,
    MyTeamComponent,
    HisTeamComponent,
    SeeTeamComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
