import { useParams } from "react-router-dom";

const User = () => {
    const {userid} = useParams()
    return ( <>
    am user{userid}
    </> );
}
 
export default User;