import React, { useCallback } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

// function send(){
//     const navigate = useNavigate();
//     const hadleOnClick = useCallback(() => navigate('/pickup',{replace: true}), [navigate]);
//     return(
//         <button type="button" onClick={}></button>
//     )
// }
function Call() {
  const navigate = useNavigate();
  const handleOnClick = useCallback(
    () => navigate("/pickup", { replace: true }),
    [navigate]
  );

  return (
    <div className="box-1">
      <div className="rectangle-1">
        <div className="face-1">
          <div className="img-1"> </div>
        </div>
        <div className="name"> Luke Trewin </div>
        <div className="phone">+61 401 234 8087</div>
      </div>
      <div className="img-2"></div>
      <div className="img-3"></div>
      <div className="button" onClick={handleOnClick}></div>
    </div>
  );
}

export default Call;
