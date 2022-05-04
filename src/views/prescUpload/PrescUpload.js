import React, { useState} from "react";
import "./PrescUpload.css";
import SubHeader from "../../components/subHeader/subHeader";
import { uploadPres, getOrderid,handleUpload,getUser } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";
import * as ReactBootStrap from 'react-bootstrap';

export function PrescUpload() {
  //const { userDetails, setUser } = useContext(UserContext);
  //const userDetails = useContext(UserContext);
  const navigate = useNavigate();
  const user = getUser();
  const Id = user.userId;
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [address, setAddress] = useState("");
  const [OrderId, setOrderid] = useState("");
  const [loading,setLoading] = useState(false);
  const types = ["image/png", "image/jpeg"];
  

  const filehandler = (e) => {
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select an image file(png or jpeg)");
    }
  };

  getOrderid(Id, setOrderid);

  const upload = (e) => {
    e.preventDefault();

    try{
      if (file&&title&&address) {
        uploadPres(title, address, Id, OrderId);
        handleUpload(file, Id, OrderId,navigate);
        setLoading(true);
      } else {
        setError("Please mention your details and upload your prescription");
        return;
      }
    }catch{
      setError("please enter the address and title");
    }

  };

  if(loading){
    return(
      <div className="text-center m-5">
        <br/><br/><br/><br/><br/><br/><br/><br/>
        <div className="spinner-grow ld" role="status">
          <span className="sr-only"><ReactBootStrap.Spinner animation="grow text-secondar"/></span>
        </div>
        <div className="spinner-grow ld" role="status">
          <span className="sr-only"><ReactBootStrap.Spinner animation="grow text-secondar"/></span>
        </div>
        <div className="spinner-grow ld" role="status">
          <span className="sr-only"><ReactBootStrap.Spinner animation="grow text-secondar"/></span>
        </div>
        <div className="spinner-grow ld" role="status">
          <span className="sr-only"><ReactBootStrap.Spinner animation="grow text-secondar"/></span>
        </div>
      </div>

    );
  }else{

  return (

<div className="prescUpload">
    <div className="container">
      <div className="row justify-content-center">
          <div className="col col-md-12 text-center mb-5">
            <SubHeader />
          </div>
      </div>
        <div className="row justify-content-center ">
            <div className="col-md-12 col-lg-10">
              <div className="wrap d-md-flex">
              <div className="img imgpres"></div>
                  <div className="login-wrap p-4 p-md-5">
                    <div className="d-flex">
                      <div className="w-100"><h3 className="mb-4">Upload Your Prescription</h3> </div>
                    </div>
                      <form action="#" className="signin-form">
                        <div className="error">
                          <p className="text-danger">{error}</p>
                        </div>
                        <div className="form-group mb-3">
                            <label className="label" >Title</label>
                            <input type="text" className="form-control" placeholder="Title" value={title} onChange={(e) => {setTitle(e.target.value);}} />
                        </div>
                        <div className="form-group mb-3">
                          <label className="label" >Prescription</label>
                          <div id="Prescription">
                          <input type="file" className="form-control" placeholder="Prescription" onChange={filehandler} />
                          {/* <img src={UploadIcon} alt="" /> */}
                          </div>
                        </div>
                        <div className="form-group mb-3">
                          <label className="label" >address</label>
                          <textarea className="form-control" id="address" rows="4" cols="50" placeholder="type address" value={address} onChange={(e) => { setAddress(e.target.value);}} ></textarea>
                        </div>
                        <div className="form-group">
                          <button type="submit" onClick={upload} className="form-control btn btn-success rounded subbutton px-3"> UPLOAD</button>
                        </div>
                    </form>
                </div>
              </div>
            </div>
        </div>
    </div>
</div>

  );
  }
}
