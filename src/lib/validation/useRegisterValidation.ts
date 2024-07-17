import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export interface IRegister {
    fullname: string,
    email: string,
    password: string
}

const UseRegisterValidation = () => {
    const initialValue: IRegister = {
        fullname: "",
        email: "",
        password: ""
    }

    const schema = yup.object().shape({
        fullname: yup.string().required(),
        email: yup.string().email().required("Please Input Your Email"),
        password: yup.string().required("Please Input Your Password").min(8, "Password must be at least 8 characters")
    })

    return useForm<IRegister>({
        defaultValues: initialValue,
        mode: "all",
        reValidateMode: "onBlur",
        resolver: yupResolver(schema)
    });
};

export default UseRegisterValidation;