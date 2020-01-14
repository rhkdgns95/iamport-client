import React from "react";
import { Link } from "react-router-dom";

export default () => (
    <div>
        <h1>Hello! I-AM-PORT HOME.</h1>
        <Link to={"/payment"}>결제하기</Link>
    </div>
);