import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignInComponent} from "./components/sign-in/sign-in.component";

const routes: Routes = [
    {
        path: '', component: SignInComponent,
        // children: [
        //     { path: '', component: SignInComponent },
        //     { path: 'set-password', component: SetPasswordComponent },
        // ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {
}
