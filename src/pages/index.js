import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";

const Home = () => {
  return (
    <div className="container bg-slate-200">
      <div className="body">
        <div className="heading md:font-serif mt-0 p-8">
          <h4>About me</h4>
          <h1 className="text-6xl font-black font-mono mb-8">
            Hi, my name is Luca Capruzzi.
          </h1>
          <p className="font-normal font-mono mb-16 text-stone-600 text-2xl flex justify-start flex-row">
            My name is Luca Capruzzi, I am a young Front-end Web Developer. Born
            in Rome in 1995, after an academic career in Languages, I am
            pursuing new experiences and challenges as web developer. If you are
            interested in getting to know me, and my work as a front-end
            developer, in the next section you will find my personal projects.
          </p>
        </div>

        {/* <div className="cards1 mt-8">
        <h1 className="p-6 flex justify-center mb-6 font-black font-mono text-fuchsia-500 text-5xl w-full ">
          Projects with React.js
        </h1>
        <div className="card  justify-center flex rounded-t-lg rounded-b-lg">
          <div className="card-image w-80 mx-16 mr-16 border-2 border-black rounded-t-lg rounded-b-lg">
            <Link href={"https://g-restaurant-gamma.vercel.app/"}>
              <img src="restaurant-image.png" className="rounded-t-lg" />
            </Link>
            <div className="card-body bg-blue-500 p-5 rounded-b-lg">
              <h1 className="font-bold">G-Restaurant App</h1>
              <p>
                This is my second React project, in which I took a Figma design
                and created a responsive, modern and interactive. For the
                project I have used the following skills: <br></br>
              </p>
              <div className="images flex justify-between m-2">
                <img src="html.svg" className="w-10 mt-2" />
                <img src="css.svg" className="w-10 mt-2" />
                <img src="javascript.svg" className="w-10 mt-2" />
                <img src="react.svg" className="w-10 mt-2" />
                <img src="node-js.svg" className="w-10 mt-2" />
              </div>
              <div className="button justify-center">
                <button
                  type="button"
                  className="bg-orange-500 rounded-l-2xl rounded-r-2xl h-10 mt-4"
                >
                  <Link href={"https://g-restaurant-gamma.vercel.app/"}>
                    <p className="font-serif w-30 font-bold text-center text p-2 hover:bg-stone-100 rounded-l-2xl rounded-r-2xl">
                      Click Here to View the Project
                    </p>
                  </Link>
                </button>
              </div>
            </div>
          </div>

          <div className="card-image w-80 mx-16 mr-16 border-2 border-black rounded-t-lg rounded-b-lg">
            <Link href={"https://gpt-3-phi.vercel.app/"}>
              <img src="gpt-3.png" className="rounded-t-lg" />
            </Link>
            <div className="card-body bg-blue-500 p-5 rounded-b-lg">
              <h1 className="font-bold">GPT-3 App</h1>
              <p>
                My first React project consisted in recreating this Figma design
                of an AI, with modern design and beautiful gradient colors. It
                gave me the chance to expand my react knowledge.
                <br></br>
              </p>
              <div className="images flex justify-between m-2">
                <img src="html.svg" className="w-10 mt-2" />
                <img src="css.svg" className="w-10 mt-2" />
                <img src="javascript.svg" className="w-10 mt-2" />
                <img src="react.svg" className="w-10 mt-2" />
                <img src="node-js.svg" className="w-10 mt-2" />
              </div>
              <div className="button justify-center">
                <button
                  type="button"
                  className="bg-orange-500 rounded-l-2xl rounded-r-2xl h-10 mt-4"
                >
                  <Link href={"https://gpt-3-phi.vercel.app/"}>
                    <p className="font-serif w-30 font-bold text-center text p-2 hover:bg-stone-100 rounded-l-2xl rounded-r-2xl">
                      Click Here to View the Project
                    </p>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cards2 mt-16 p-b-10">
        <h1 className="p-6 flex justify-center mb-6 font-black font-mono text-fuchsia-500 text-5xl w-full ">
          Projects with Click Academy
        </h1>
        <div className="card justify-center flex">
          <div className="card-image w-80 mx-16 mr-16 border-2 border-black rounded-t-lg rounded-b-lg">
            <Link href={"https://g-restaurant-gamma.vercel.app/"}>
              <img src="Logo.jpeg" className="rounded-t-lg h-64" />
            </Link>
            <div className="card-body bg-blue-500 p-5 rounded-b-lg">
              <h1 className="font-bold">JetHome Tour Operator</h1>
              <p>
                My second project with Click Academy consists of the homepage of
                a Tour operator. The design was created using mainly Bootstrap
                logic and functions. For the project I have used the following
                skills: <br></br>
              </p>
              <div className="images flex justify-between m-2">
                <img src="html.svg" className="w-10 mt-2" />
                <img src="css.svg" className="w-10 mt-2" />
                <img src="javascript.svg" className="w-10 mt-2" />
                <img src="bootstrap.svg" className="w-10 mt-2" />
              </div>
              <div className="button justify-center">
                <button
                  type="button"
                  className="bg-orange-500 rounded-l-2xl rounded-r-2xl h-10 mt-4"
                >
                  <Link href={"https://g-restaurant-gamma.vercel.app/"}>
                    <p className="font-serif w-30 font-bold text-center text p-2 hover:bg-stone-100 rounded-l-2xl rounded-r-2xl">
                      Find the Github repository
                    </p>
                  </Link>
                </button>
              </div>
            </div>
          </div>

          <div className="card-image w-80 mx-16 mr-16 border-2 border-black rounded-t-lg rounded-b-lg">
            <Link href={"https://g-restaurant-gamma.vercel.app/"}>
              <img src="museum.jpg" className="rounded-t-lg h-64 w-full" />
            </Link>
            <div className="card-body bg-blue-500 p-5 rounded-b-lg">
              <h1 className="font-bold">Museo Degli Etruschi di Roma</h1>
              <p>
                My first real project with Click Academy was a simple HTML/Css
                project of a Museum. In this project I learned the basic
                functions of CSS and HTML, and how to structure my projects in
                the future.
                <br></br>
              </p>
              <div className="images flex justify-center m-2">
                <img src="html.svg" className="w-10 mt-2 mr-4" />
                <img src="css.svg" className="w-10 mt-2" />
              </div>
              <div className="button justify-center">
                <button
                  type="button"
                  className="bg-orange-500 rounded-l-2xl rounded-r-2xl h-10 mt-4"
                >
                  <Link href={"https://g-restaurant-gamma.vercel.app/"}>
                    <p className="font-serif w-30 font-bold text-center text p-2 hover:bg-stone-100 rounded-l-2xl rounded-r-2xl">
                      Find the Github Depository
                    </p>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div> */}

        {/* cards */}

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <ProjectCard
            link="https://g-restaurant-gamma.vercel.app/"
            image0="restaurant-image.png"
            title="G-Restaurant App"
            description="This is my second React project, in which I took a Figma design and
            created a responsive, modern and interactive. For the project I have
            used the following skills:"
            image1="html.svg"
            image2="css.svg"
            image3="javascript.svg"
            image4="react.svg"
            image5="Node-js.svg"
          />
          <ProjectCard
            link="https://gpt-3-phi.vercel.app/"
            image0="gpt-3.png"
            title="GPT-3 APP"
            description="My first React project consisted in recreating this Figma design
                of an AI, with modern design and beautiful gradient colors. It
                gave me the chance to expand my react knowledge."
            image1="html.svg"
            image2="css.svg"
            image3="javascript.svg"
            image4="react.svg"
            image5="Node-js.svg"
          />
          <ProjectCard
            link="https://stalwart-snickerdoodle-228b7c.netlify.app"
            image0="Logo.jpeg"
            title="JetHome Tour Operator"
            description="My second project with Click Academy consists of the homepage of
                a Tour operator. The design was created using mainly Bootstrap
                logic and functions, with particular focus on Bootstrap and responsiveness
                  "
            image1="html.svg"
            image2="css.svg"
            image3="javascript.svg"
            image4="bootstrap.svg"
            image5=""
          />
          <ProjectCard
            link="https://github.com/LukeFBM/sitomuseo"
            image0="museum.jpg"
            title="Museo Etrusco"
            description="My first real project with Click Academy was a simple HTML/CSS
                project of a Museum. In this project I learned the basic
                functions of CSS and HTML, and how to structure my projects in
                the future."
            image1="html.svg"
            image2="css.svg"
            image3=""
            image4=""
            image5=""
          />

          <ProjectCard
            link="https://github.com/LukeFBM/to-do-app"
            image0="todo.png"
            title="To-do App"
            description="A basic and simple To-do react app. This project helped a lot 
            in the understanding of the most important functions of React, the use of States, props, and functionalities. 
            "
            image1="html.svg"
            image2="css.svg"
            image3="javascript.svg"
            image4="react.svg"
            image5="node-js.svg"
          />
        </div>
      </div>

      <div className="links ml-16 mt-16 pb-10 flex justify-start gap-8">
        <h4 classname="">LINKS</h4>
        <ul>
          <Link href={"https://github.com/LukeFBM"}>
            <li className="hover:text-amber-500">GitHub</li>
          </Link>
          <Link href={"curriculum2023L.pdf"} download="curriculum2023L.pdf">
            <li className="hover:text-amber-500">Curriculum Vitae</li>
          </Link>
          <Link href={"https://www.linkedin.com/in/luca-capruzzi-036838201/"}>
            <li className="hover:text-amber-500">Linkedin</li>
          </Link>
          <Link href={"https://www.instagram.com/lucacapruzzi/?hl=it"}>
            <li className="hover:text-amber-500">Instagram</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Home;
