import { Link, useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import RightNav from "../components/layout-component/RightNav";

const NewsDetails = () => {
    const data = useLoaderData();
    const news = data.data[0]
    console.log(news)
    return (
        <div>
            <header>
                <Header></Header>
               
            </header>
            <main className="w-11/12 mx-auto gap-3 grid grid-cols-12">
                <section className="col-span-9">
                <h2 className="text-2xl font-semibold">Dragon News</h2>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src={news?.image_url}
                            className="rounded-none" />
                    </figure>
                    <div className="card-body pl-20">
                        <h2 className="card-title">{news?.title}</h2>
                        <p>{news?.details}</p>
                        <div className="card-actions">
                            <Link to={`/category/${news?.category_id}`} className="btn btn-neutral">Go back to category</Link>
                        </div>
                    </div>
                </div>
                </section>
                <aside className="col-span-3">
                    <RightNav></RightNav>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;