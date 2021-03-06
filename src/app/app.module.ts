import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomeComponent} from './screens/home/home.component';
import {NgbActiveModal, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NavbarComponent} from './components/navbar/navbar.component';
import {BootstrapIconsModule} from 'ng-bootstrap-icons';
import {Cash, Person, Plus, Trash, Pencil} from 'ng-bootstrap-icons/icons';
import {GoalsOptionsComponent} from './components/goals-options/goals-options.component';

import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {environment} from '../environments/environment';
import {GoalsListComponent} from './components/goals-list/goals-list.component';
import {UserDetailsModalComponent} from './screens/user-details-modal/user-details-modal.component';
import {CommonModule} from '@angular/common';
import {AddGoalModalComponent} from './screens/add-goal-modal/add-goal-modal.component';
import {EditGoalModalComponent} from './screens/edit-goal-modal/edit-goal-modal.component';
import { ConfirmDeleteModalComponent } from './screens/confirm-delete-modal/confirm-delete-modal.component';

const icons = {
  Cash,
  Person,
  Plus,
  Trash,
  Pencil
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    GoalsOptionsComponent,
    GoalsListComponent,
    UserDetailsModalComponent,
    AddGoalModalComponent,
    EditGoalModalComponent,
    ConfirmDeleteModalComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    NgbModule,
    BootstrapIconsModule.pick(icons),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
  ],
  exports: [BootstrapIconsModule],
  providers: [NgbActiveModal],
  bootstrap: [AppComponent]
})

export class AppModule {

}
