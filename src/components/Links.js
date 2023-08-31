import react from "react";

function Links (props) {
    return (
        <>
        <h3>Links</h3>
        <a href={props.userGithub}>Github Link</a>
        <a href={props.userLinkedin}>Linkedin Link</a>
        </>
    )
}

export default Links;