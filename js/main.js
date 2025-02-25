import { confirmation } from "./modules/confirmation";
import { togglePassword } from "./modules/togglePassword";
import { validation } from "./modules/validation";

document.addEventListener("DOMContentLoaded", () => {
    confirmation(); 
});

document.addEventListener("DOMContentLoaded", () => {
    togglePassword();
});

document.addEventListener("DOMContentLoaded", () => {
    validation();
});