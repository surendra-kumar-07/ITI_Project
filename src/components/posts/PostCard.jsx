import React from "react";
import { Link } from "react-router-dom";

const PostCard = ({$id, title, featuredImage}) => {
  return (
    <>
    <Link to={`/post/${$id}`}>
      <div className="grid grid-cols-2 gap-2">
        <div className=" rounded">
          <img className="w-full rounded-md md:w-60" src={featuredImage} alt="Post-Image" />
        </div>
        <div className="">
          <h1 className="font-semibold underline mb-1  cursor-pointer">
            {title}
          </h1>
          <span className="text-sm">6dhfdf fd20220</span>
        </div>
      </div>
      </Link>
    </>
  );
};

export default PostCard;
