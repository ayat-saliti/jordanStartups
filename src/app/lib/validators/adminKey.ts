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
    
    // this.admin = this.adminKey?.value;
    // var x = this.form.get('adminKey');
    // if(this.admin != 'admin2468')


    // const password = control.get('password')?.value;
    // const confirm = control.get('confirmPassword')?.value;

    // // check if invalid(we have password and confirmPassword but not equal)
    // if(password && confirm && password !== confirm){
    //     return {
    //         passwordDoesntMatch: true
    //     };
    // }
    // return null;

