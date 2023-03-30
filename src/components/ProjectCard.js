import React from "react";
import Link from "next/link";

const ProjectCard = (props) => {
  return (
    <div className="card justify-center flex rounded-t-lg rounded-b-lg">
      <div className="card-image w-3/5 h-2/3 shadow-lg rounded-t-lg rounded-b-lg">
        <Link href={props.link}>
          <img src={props.image0} className="rounded-t-lg h-56 w-full" />
        </Link>
        <div className="card-body bg-slate-100 p-5 rounded-b-lg">
          <h1 className="font-bold underline decoration-solid font-serif mb-2">
            {props.title}
          </h1>
          <p className="font-thin leading-7 text-stone-800">
            {props.description}
          </p>
          <div className="images flex justify-between m-2">
            <img src={props.image1} className="w-10 mt-2" />
            <img src={props.image2} className="w-10 mt-2" />
            <img src={props.image3} className="w-10 mt-2" />
            <img src={props.image4} className="w-10 mt-2" />
            <img src={props.image5} className="w-10 mt-2" />
          </div>
          <div className="button flex justify-center gap-8">
            <button
              type="button"
              className="bg-orange-500 rounded-l-2xl rounded-r-2xl w-2/3 h-10 mt-4"
            >
              <Link href={props.link}>
                <p className="font-serif  font-bold text-center p-2 hover:bg-stone-100 rounded-l-2xl rounded-r-2xl">
                  View the Project here
                </p>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
