import React from 'react';
import './TopoButton.css';
import { FiArrowUp } from 'react-icons/fi';

export default function TopoButton() {    
    window.onscroll = function() {
        scroll();
    };
    function scroll() {
        let btn = document.getElementById("btnTop");
        if (document.documentElement.scrollTop > 50) {
            btn.style.display = "block";
        } else {
            btn.style.display = "none";
        }
    };
    function backToTop() {
        document.documentElement.scrollTop = 0
    };

    return(          
        <FiArrowUp
            onClick={backToTop}
            id="btnTop"
            width={200}
        />      
    );
}