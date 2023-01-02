import React from "react";

function MyButton() {
    function handleClick() {
        console.log("The button was clicked!");
    }
    
    return (
        <a href="/pesquisa" style={{}}>
        <button
        style={{
            hover:"Shadow",
            width: "300px",
            height: "60px",
            display: "block",
            margin: "0 auto",
            backgroundColor: "#55b5eb",
            color: "white",
            fontSize: "70px",
            fontWeight: "bold",
            fontSize: "16px",
            padding: "12px",
            borderRadius: "20px",
        }}
        onClick={handleClick}
        >
        Dar opinião ou sugestão
        </button>
        </a>
        );
    }
    
    export default MyButton;
    