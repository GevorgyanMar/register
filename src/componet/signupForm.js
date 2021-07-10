 import TextField from '@material-ui/core/TextField';
 import Button from '@material-ui/core/Button';
 import './style.css';
 import {useEffect, useState} from "react";
 import Validation from '../validate';
import ImageUploading from './imageUploading';



const SignupForm = ({submitForm}) => {
    const [value, setValue] =useState({
        fullname:"",
        email:"",
        password:""
    });
    const [errors, setErrors] = useState({});
    const [dataIsCorrect,setDataIsCorrect] = useState(false);
    const handleChange = (e) =>{
        setValue({
            ...value,
            [e.target.name]:e.target.value,

        })
    }
    const handleFormSubmit = (e) =>{
        e.preventDefault();
        setErrors(Validation(value));
        setDataIsCorrect(true);
    }
    useEffect(()=>{
      if(Object.keys(errors).length===0 && dataIsCorrect ){
          submitForm(true)
      }
    },[errors]);
    return (

        <div className="form-block-sinUp">
<ImageUploading/>
            <form  noValidate autoComplete="off">
                <div className="input-block">
                     <TextField id="outlined-basic"
                               label="Full Name"
                               variant="outlined"
                               name="fullname"
                               value={value.fullname}
                               onChange={handleChange}
                     />
                    {errors.fullname && <p>{errors.fullname}</p>}
                </div>

             <div className="input-block">
                  <TextField id="outlined-basic"
                            label="Email"
                            variant="outlined"
                            name="email"
                            value={value.email}
                            onChange={handleChange}
                 />
                 {errors.email && <p>{errors.email}</p>}
             </div>
         <div className="input-block">
              <TextField id="outlined-basic"
                        label="Password"
                        variant="outlined"
                        name="password"
                        value={value.password}
                        onChange={handleChange}
             />
             {errors.password && <p>{errors.password}</p>}
         </div>
            </form>
            <div className="form-button">
                <Button variant="contained" color="primary" onClick={handleFormSubmit}>
                   Sin Up
                </Button>
                <Button variant="contained" color="secondary">
                    Go Back
                </Button>
            </div>
        </div>
    )
}
export default SignupForm;