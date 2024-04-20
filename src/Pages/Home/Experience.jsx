import data from "../../data/index.json";

export default function Experience() {
  return (

    <section id="Experience" className="education--section">

      <div className="education--container">
      <h2 className="education--section--heading">My Experience</h2>
      <p className="sub--title">My work experience was an opportunity to cultivate a diverse range of skills.</p>
      </div>

      <div className="education--section--container">
        {data?.experience?.map((item, index) => (
          <div key={index} className="education--section--card">
            <div className="education--section--card--author--detail">
              <img src={item.src} alt="educ img"/>
              <div>
                <p className="text-md education--author--name">
                  {item.title}
                </p>
                <p className="subsub-title">
                  {item.company} <br /> {item.date}
                </p>
              </div>
            </div>
            <div>
                <p>{item.description}</p>
                <hr />
                <p><b>Keywords: </b> {item.technologies}</p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
