import { ValidatorFn } from "@angular/forms";

export const adminKeyValidator : ValidatorFn = (control) => {
   const key = control.get('adminKey')?.value;
   const x = 'admin2468';

   if(key && key !== x){
    return{
        adminKeyDoesntMatch: true
    };
}
    return null;
   }
    

