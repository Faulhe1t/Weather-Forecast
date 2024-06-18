import { useUnit } from "effector-react";
import { $err } from "../Store/model";


export const ErrorMessage = () => {
  const errMessage = useUnit($err)

  return <div className='errorText'>
    { errMessage }
  </div>
}