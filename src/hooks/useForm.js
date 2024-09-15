import { useState } from "react";

const useForm = (initialValue) => {


    const [values, setValues] = useState(initialValue);
	
	const handleChange = (e) =>{
		const{name, value} = e.target;
		console.log(value);

		setValues((prevState) => ({
			...prevState,
			[name]: value,
		}));
	
	};

    const handleSubmit = (callback) => {
        return (e) =>{
        e.preventDefault();
        console.log("handleSubmit called")
        callback();
    }};


    return {
        values,
        handleChange,
        handleSubmit,

    };
}

export default useForm