import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";
const Home = () => {
  return (
    <>
      <div className="home" id="hero">
        <main>
          <h1>Stellar Support</h1>
          <p>Elevating your expectations,one service at a time.</p>
        </main>
      </div>
      <div className="home2">
        <img src={vg} alt="image" />
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            facere possimus iste. Ipsum consequatur eveniet voluptas ad id
            animi, porro commodi? Iusto amet molestias officiis! Soluta ut
            blanditiis at fugit?
          </p>
        </div>
      </div>
      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In
            perspiciatis dolor voluptate ratione velit, repellat quas tempora
            quos voluptatem sed voluptatibus, error quis hic cum iusto id
            adipisci, architecto ad. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Ullam neque, optio eaque quo tenetur non? Deserunt
            nihil fuga similique facilis, veritatis, rem omnis recusandae sed
            error ipsa, suscipit nobis temporibus. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Quisquam laborum dolorem esse dolorum
            laudantium adipisci accusantium soluta repellendus quas ut ratione
            dolor voluptatibus inventore ipsum atque, ab ex! Temporibus,
            accusamus.
          </p>
        </div>
      </div>
      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
