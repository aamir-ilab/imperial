
// Angular
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
// RxJS
import { Observable } from 'rxjs';import { tap } from 'rxjs/operators';
declare var window:any;
@Injectable()
export class AuthGuard implements CanActivate
 {  
       constructor(private router: Router) { 

       }
        canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {
            console.log('/////////// Can Activate  ////////////')
                    // if(route.queryParams && route.queryParams.token) {
                    //    window.location.href = '/';   
                    // } 
                    // else{     
                        if(!localStorage.getItem('loggedIn'))
                            this.router.navigateByUrl('/login');
                        // return this.store.pipe(select(isLoggedIn),tap(loggedIn => {
                        //     if (!loggedIn) {
                        //         this.router.navigateByUrl('/auth/login');                       
                        //     }                   
                        // }));      
                    // }  
                    return true;       

    }
}