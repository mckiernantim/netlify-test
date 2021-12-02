import  QRCode from "qrcode"
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../Providers/UserProvider";
import { apiURL } from "../util/apiURL";
import {Link} from 'react-router-dom'

const API = apiURL();

const QrCode = () => {
    const [src, setSrc] = useState('')
    const user = useContext(UserContext);

    useEffect(() => {
        generateQR()
    }, [])
    
    const generateQR = async ()=>{
        
        try {
            QRCode.toDataURL(`${API}/users/${user.uid}/card`).then((data) =>{
                setSrc(data)
            })
            
        } catch (error) {
         console.log(error)   
        }
    }
    return (
      <section>
        <h1>QrCode</h1>
        <div className="cardDiv">
          <div className="card">
            <hr />
            <Link to="/external">
                <button>
                    <img src ={src} />
                </button>            
            </Link>

            <hr />
            <Link to="/dashboard">
                <button className="QRCodeBack">
                    <i class="fas fa-chevron-circle-left"></i>
                </button>            
            </Link>
          </div>
        </div>
      </section>
    );
}

export default QrCode;
