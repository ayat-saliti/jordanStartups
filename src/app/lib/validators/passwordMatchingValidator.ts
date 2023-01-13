import { ValidatorFn } from "@angular/forms";

export const passwordMatchingValidator :ValidatorFn = (control) => {
    const password = control.get('password')?.value;
    const confirm = control.get('confirmPassword')?.value;

    // check if invalid(we have paswword and confirmPassword but not equal)
    if(password && confirm && password !== confirm){
        return {
            passwordDoesntMatch: true
        };
    }
    return null;

}