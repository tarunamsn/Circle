import { SubmitErrorHandler, SubmitHandler } from "react-hook-form";
import { IRegister } from "../../../../lib/validation/useRegisterValidation";
import { useNavigate } from "react-router-dom";
import { API } from "../../../../lib/api";
import { toast } from "react-toastify";

interface IProps {
    reset: () => void;
}

export const useRegisterFunction = ({ reset }: IProps) => {
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<IRegister> = async (data) => {
        try {
            console.log(data);
            const res = await API.post("/auth/register", data);
            reset();
            console.log(res);
            toast.success("🎉 SUCCESSFULLY REGISTERED!", {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                onClose: () => navigate("/auth/login"),
            });
        } catch (error) {
            toast.error(
                "REGISTRATION FAILED. PLEASE CHECK YOUR INPUT AND TRY AGAIN.",
                {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                }
            );
            console.log(error);
        }
    };

    const onErrorSubmit: SubmitErrorHandler<IRegister> = (data) => {
        console.log(data);
        toast.warning("AN ERROR OCCURED. PLEASE CHECK YOUR INPUT AND TRY AGAIN.", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    };

    return {
        onSubmit,
        onErrorSubmit,
    };
};
