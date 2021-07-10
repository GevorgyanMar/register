import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './style.css';
import { useState } from "react";
import { useForm } from "react-hook-form";


const SinIn = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const { register, handleSubmit } = useForm();

    function changeName(evt) {
        setName(evt.target.value);
    }
    function changePassword(evt) {
        setPassword(evt.target.value);
    }
    if (name === "Mariam" && password === "Gevorgyan") {
        console.log(name + password)
    }
    else {
        console.log("false")
    }
    return (
        <div className="form-block">
            <form onSubmit={handleSubmit((data) => console.log(data))}>
                <p>{name}</p>
                <TextField id="outlined-basic"
                    value={name}
                    onChange={(evt) => changeName(evt)}
                    required
                    label="Name"
                    //inputRef={register}
                    {...register("Name")}
                    variant="outlined" />
                <p>{password}</p>
                <TextField id="outlined-basic"
                    value={password}
                    required
                    //inputRef={register}
                    {...register("Password")}
                    onChange={(evt) => changePassword(evt)}
                    label="Password"
                    variant="outlined" />

                <div className="form-button">
                    <Button variant="contained"
                        color="primary"
                        type="submit"
                    >
                        Sin In
                    </Button>
                    <Button variant="contained" color="secondary" type="button" >
                        Sin Up
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default SinIn;




