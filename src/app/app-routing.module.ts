import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ManageTeamComponent } from "./composants/manage-team/manage-team.component";
import { LoginComponent } from "./composants/login/login.component";
import { SignupComponent } from "./composants/signup/signup.component";
import { FightComponent } from "./composants/fight/fight.component";
import { EditProfileComponent } from "./composants/edit-profile/edit-profile.component";
import { SeeTeamComponent } from "./composants/see-team/see-team.component";

const routes: Routes = [
  { path: '', redirectTo: '/manage-team', pathMatch: 'full' },
  { path: 'manage-team', component: ManageTeamComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignupComponent },
  { path: 'fight', component: FightComponent },
  { path: 'edit-profile', component: EditProfileComponent },
  { path: 'see-team', component: SeeTeamComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
