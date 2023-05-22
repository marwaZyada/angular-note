import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './Components/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HomeComponent } from './Components/home/home.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { NoteDataComponent } from './Components/note-data/note-data.component';

import { SidenavComponent } from './Components/sidenav/sidenav.component';
import {MatButtonModule} from '@angular/material/button';
import { FilterPipe } from './core/pipes/filter.pipe';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { LoaderInterceptor } from './core/interceptor/loader.interceptor';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { LoginComponent } from './Components/login/login.component';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    HomeComponent,
    NotfoundComponent,
    NoteDataComponent,
    FilterPipe,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    ReactiveFormsModule,
    MatInputModule,
    HttpClientModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatCardModule,
    MatDividerModule,
    MatMenuModule,
    MatDialogModule

  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:LoaderInterceptor,
    multi:true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
