import React from 'react';
import {Image} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";

const ButtonLink = ({image, link}) => {
    return (
        <Link to={link}>
            <Button variant={"light"}>
                <Image src={image} alt={"link"}/>
            </Button>
        </Link>
    );
};

export default ButtonLink;