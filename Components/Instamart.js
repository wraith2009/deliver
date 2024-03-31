//reusable component of section

import { useState } from "react"
import instaImg from '../images/Instamart-FA .jpg'

// const Section = ({title, description, isVisible, setisVisible}) => {
//     // const [isVisible, setisVisible] = useState(false);
//     return(
//         <div>
//             <h3>{title}</h3>
//             {
//                 isVisible ? 
//                 <button onClick={() => setisVisible(false)}>Hide</button>
//                 :
//                 <button onClick={() => setisVisible(true)}>Show</button>
//             }
            
//             {isVisible && <p>{description}</p>}
//         </div>
        
//     )
// } 


const Instamart = () => {
    const [visibleSection, setvisibleSection] = useState("")
    return (
        <div className="mart-main">
            {/* <h1>Instamart</h1>
            <Section title={"About"}
            description={"This is the about section of instamart"}
            isVisible={visibleSection==="About"}
            setisVisible={() => setvisibleSection("About")}
            />
            
            <Section title={"product"}
            description={"This is the about section of instamart"}
            isVisible={visibleSection==="product"}
            setisVisible={() => setvisibleSection("product")}
            /> */}
            <img src={instaImg} />
        </div>
    )
}

export default Instamart;