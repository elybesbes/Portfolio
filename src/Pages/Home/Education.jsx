import data from "../../data/index.json";

export default function Education() {
  return (

    <section id="Education" className="education--section">

      <div className="education--container">
      <h2 className="education--section--heading">My Education</h2>
      <p className="sub--title">My educational journey has been one of self-discovery and growth.</p>
      </div>

      <div className="education--section--container">
        {data?.education?.map((item, index) => (
          <div key={index} className="education--section--card">
            <div className="education--section--card--author--detail">
              <img className="education--section--img"src={item.src} alt="educ img"/>
              <div>
                <p className="text-md education--author--name">
                  {item.name}
                </p>
                <p className="subsub-title">
                  {item.diploma} <br />
                  {item.date}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
