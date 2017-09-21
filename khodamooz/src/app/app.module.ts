import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { ServicesModule } from './services/services.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdDialogModule, MdInputModule } from '@angular/material';
import { SignupComponent } from './auth/signup/signup.component';


@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        SignupComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        NgbModule.forRoot(),
        ServicesModule,
        BrowserAnimationsModule,
        MdButtonModule,
        MdDialogModule,
        MdInputModule
    ],
    providers: [],
    bootstrap: [AppComponent],
    entryComponents: [LoginComponent,SignupComponent]
})
export class AppModule {
}
