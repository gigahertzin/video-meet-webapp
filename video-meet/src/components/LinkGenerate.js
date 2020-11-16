import React, { Component , useState} from 'react'
import ReactDOM from 'react-dom'

export default function LinkGenerate() {
    let [url,setUrl]=useState("");
    function generateLink() {
        let linkObj = document.getElementById("link");

        let linkString = "";
        while (linkString === "" || checkInDb(linkString)) {
            linkString = generateString();
            console.log(linkString);
        }
        //linkObj.value = `http://localhost:3000/${linkString}`;
        setUrl( `http://localhost:3000/${linkString}`);
        document.getElementById("myModal").style.display = "block";

    }
    function generateString() {
        let linkString = "";
        for (let i = 0; i < 9; i++) {
            if (i === 3 || i === 6) linkString = linkString + "-";
            linkString = linkString + randomchar();
        }
        return linkString;
    }
    function randomchar() {
        return String.fromCharCode(Math.floor(Math.random() * 25) + 97);
    }
    function checkInDb(linkString) {
        return false;
    }
    return (
        <>
            <button onClick={generateLink} type="button" class="btn btn-room btn-success col-md-4 col-sm-12 ">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 172 172" style={{ fill: "#000000" }}><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{ mixBlendMode: "normal" }}><path d="M0,172v-172h172v172z" fill="none"></path><g id="original-icon" fill="#ffffff" opacity="0" visibility="hidden"><path d="M15.90104,43c-8.81836,0 -15.90104,7.08268 -15.90104,15.90104v68.53125c0,8.81836 7.08268,15.90104 15.90104,15.90104h105.93229v-100.33333zM163.48958,50.16667l-34.48958,21.5v43l34.48958,21.5h8.51042v-86z"></path></g><g id="subtracted-icon" fill="#ffffff"><path d="M121.83333,43v100.33333l-37.16667,0v-28.66667h28.66667v-43h-28.66667v-28.66667zM15.90104,143.33333c-8.81836,0 -15.90104,-7.08268 -15.90104,-15.90104v-68.53125c0,-8.81836 7.08268,-15.90104 15.90104,-15.90104h25.76562v28.66667h-28.66667v43h28.66667l0,28.66667zM172,50.16667v86h-8.51042l-34.48958,-21.5v-43l34.48958,-21.5z"></path></g><g><g id="IOS_copy" fill="#ffffff"><path d="M99,86h-28.66667v-28.66667h-14.33333v28.66667h-28.66667v14.33333h28.66667v28.66667h14.33333v-28.66667h28.66667z"></path></g><g id="IOS_copy" fill="#000000" opacity="0"><path d="M84.66667,71.66667v-14.33333v-14.33333h-14.33333h-14.33333h-14.33333v14.33333v14.33333h-14.33333h-14.33333v14.33333v14.33333v14.33333h14.33333h14.33333v14.33333v14.33333h14.33333h14.33333h14.33333v-14.33333v-14.33333h14.33333h14.33333v-14.33333v-14.33333v-14.33333h-14.33333z"></path></g></g></g></svg>
                <span className="room-name-span">New Room</span>
            </button><PortalsModel url={url} />
                
        </>
    )
}


function PortalsModel({url}) {
    console.log(url);
    function spanclick() {
        document.getElementById("myModal").style.display = "none";
    }
    function copytext() {
        var copyText = document.getElementById("myInput");
        copyText.select();
        copyText.setSelectionRange(0, 99999)
        document.execCommand("copy");
    }

    

        return ReactDOM.createPortal(
            <div id="myModal" className="modal">
                <div className="modal-content">
                    <span onClick={spanclick} className="close">&times;</span>
                    <h2 style={{ marginBottom: "10px" }}>Here's the link to your Room</h2>
                    <br></br>
                    <p style={{ color: "#5f6368", marginBottom: "12px", font: "400 14px / 20px Roboto,RobotoDraft,Helvetica,Arial,sans-serif" }}>Copy this link and send it to people you want to Room with. Be sure to save it so you can use it later, too.</p>
                    <div style={{ display: "flex", padding: ".5em 1em .5em 0em", background: "#f1f3f4", borderRadius: "5px" }}>
                        <span className="col-11" id="urlLink"><input type="text" value={url} id="myInput" disabled /></span>
                        <div className="col-1 copy-div ">
                            <span className="copy-icon" onClick={copytext} data-toggle="tooltip" data-placement="right" title="want to copy" >
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 172 172" style={{ fill: "#000000" }}><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{ mixBlendMode: "normal" }}><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#5f6368"><path d="M28.66667,14.33333c-7.91917,0 -14.33333,6.41417 -14.33333,14.33333v93.16667c0,3.956 3.21067,7.16667 7.16667,7.16667c3.956,0 7.16667,-3.21067 7.16667,-7.16667v-93.16667h93.16667c3.956,0 7.16667,-3.21067 7.16667,-7.16667c0,-3.956 -3.21067,-7.16667 -7.16667,-7.16667zM57.33333,43c-7.91917,0 -14.33333,6.41417 -14.33333,14.33333v86c0,7.91917 6.41417,14.33333 14.33333,14.33333h86c7.91917,0 14.33333,-6.41417 14.33333,-14.33333v-86c0,-7.91917 -6.41417,-14.33333 -14.33333,-14.33333zM57.33333,57.33333h86v86h-86z"></path></g></g></svg>

                            </span>
                        </div>
                    </div>
                </div>
            </div>
            ,
            document.body
        );
    
}


