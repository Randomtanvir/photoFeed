import Image from "next/image";
import Link from "next/link";
import React from "react";

const PhotoCard = ({ photo }) => {
  return (
    <Link href={`/photos/${photo.id}`} className="group">
      <Image width={700} height={700} src={photo?.url} alt={photo.title} />

      <div className="title-container">
        <h4 className="title">The Beautiful Nature</h4>
      </div>
    </Link>
  );
};

export default PhotoCard;
