import { SubmitErrorHandler, SubmitHandler } from "react-hook-form";
import { ILoginForm } from "../../../../lib/validation/useLoginValidation";
import { useAppDispatch } from "../../../../store/index";
import { loginAsync } from "../../../../store/async/auth";
import { toast } from "react-toastify";

interface IProps {
   reset: () => void;
}

export const useLoginFunction = ({ reset }: IProps) => {
   const dispatch = useAppDispatch();

   const onSubmit: SubmitHandler<ILoginForm> = (data) => {
      console.log(data);
      dispatch(loginAsync(data));
      reset();
   };

   const onErrorSubmit: SubmitErrorHandler<ILoginForm> = (data) => {
      console.log(data);
      toast.warning("Please check your inputs and try again.", {
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
