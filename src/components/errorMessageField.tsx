import { useUnit } from "effector-react";
import { $err } from "../store/model";


export const ErrorMessage = () => {
  const errMessage = useUnit($err)

  return <div className='errorText'>
    { errMessage }
  </div>
}