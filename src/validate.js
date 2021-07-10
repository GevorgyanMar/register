const Validation = (values)=>{
    let errors={};
    if(!values.fullname){
        errors.fullname="Name is required.";
    }
    if(!values.email){
        errors.email="Email is required.";
    }else if(!/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(values.email)){
        errors.email="Email is invalid.";
    }
    if(!values.password){
        errors.password="Password is required.";
    }else if(values.password.length<5){
        errors.password="Password is must be than five characters.";
    }
    return errors;
}

export default Validation;