import { IProfile } from "../../types/app";

interface IAuthState {
   isLogin: boolean;
   token: string;
   profile: IAuthor;
}
