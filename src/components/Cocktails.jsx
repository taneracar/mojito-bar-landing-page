import { useGSAP } from "@gsap/react";
import { cocktailLists, mockTailLists } from "../constants";
import gsap from "gsap";

const Cocktails = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#cocktails",
        start: "top 30%",
        end: "bottom 80%",
        scrub: true,
      },
    });
    tl.from("#c-left-leaf", {
      x: -100,
      y: 100,
    }).from("#c-right-leaf", {
      x: 100,
      y: 100,
    });
  });

  return (
    <section id="cocktails" className="noisy">
      <img
        src="/images/cocktail-left-leaf.png"
        alt="left leaf"
        id="c-left-leaf"
      />
      <img
        src="/images/cocktail-right-leaf.png"
        alt="left leaf"
        id="c-right-leaf"
      />
      <div className="list">
        <div className="popular">
          <h2>Most Populer Cocktails</h2>
          <ul>
            {cocktailLists.map(({ id, name, country, detail, price }) => (
              <li key={id}>
                <div className="md:me-28">
                  <h3>{name}</h3>
                  <p>
                    {country} | {detail}
                  </p>
                </div>
                <span>{price}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="loved">
          <h2>Most Loved Mocktails</h2>
          <ul>
            {mockTailLists.map(({ id, name, country, detail, price }) => (
              <li key={id}>
                <div className="me-28">
                  <h3>{name}</h3>
                  <p>
                    {country} | {detail}
                  </p>
                </div>
                <span>{price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Cocktails;
