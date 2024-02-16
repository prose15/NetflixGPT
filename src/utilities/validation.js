export const checkValidateSignIn = (email,password) =>{
    const emailValidation = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
    const passwordValidation = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
    if(!emailValidation) return "Invalid Email";
    if(!passwordValidation) return "Invalid Password";
    return null
}
export const checkValidateSignUp = (name,email,password) =>{
    const nameValidation = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name)
    const emailValidation = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
    const passwordValidation = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
    if(!emailValidation) return "Invalid Email";
    if(!passwordValidation) return "Invalid Password";
    if(!nameValidation) return "Invalid name";
    return null
}