import { useState } from "react";

const useForm = (initialValue, callback) => {


    const [values, setValues] = useState(initialValue);
	
	const handleChange = (e) =>{
		const{name, value} = e.target;
		console.log(value);

		setValues((prevState) => ({
			...prevState,
			[name]: value,
		}));
	
	};

    const handleSubmit = (e) =>{
        e.preventDefault();
        callback();
    }


    return {
        values,
        handleChange,
        handleSubmit,

    };
}

export default useForm