import "./accordion.scss";
import {getAllNews} from "@/app/api/news.api";
 const Accordion = async () => {
    const data = await getAllNews();
     return (
        <div>
            {data.articles.map((el:any, index: number) => {
                if (index === 0) {
                    return (
                        <div key={index} className="accordion" style={{backgroundImage: `url(${el.urlToImage})`}}>
                            <div className="accordion__textbox">
                                <h1><a href={el.url}>{el.title}</a></h1>
                                <h3>{el.description}</h3>
                                <h3>{el.publishedAt}</h3>
                            </div>
                        </div>
                    );
                }
            })}
        </div>
    );
};

export default Accordion;