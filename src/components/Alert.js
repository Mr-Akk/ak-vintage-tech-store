import React, { useContext } from "react";
import {UserContext} from '../context/user';
import {FaWindowClose} from 'react-icons/fa'
export default function Alert() {
  let {alert , hideAlert} = useContext(UserContext);
 
  if(alert.show){
    let cls = "alert-container alert-show ";
    if(alert.type == 'danger'){
        cls+="alert-danger"
    }

return <div className={cls}>
<p>{alert.msg}</p>
<button className="alert-close">
  <FaWindowClose onClick={hideAlert}/>
</button>

</div>
  }
  return null;
}
