import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";

export default function SinglePost() {
    const [singlePost, setSinglePost] = useState(null);
    const { slug } = useParams(); 

    return 
}