

export default function Main({ handleClick, man, girl, all }) {



    return (
        <div className="content">
            <div className="row g-2 justify-content-center">
                {
                    man.map(items => (
                        <div key={items.id} className="card col-12 col-md-4 col-lg-2 align-items-center m-2">
                            <img src={items.image} alt="" />
                            <h4>{items.name}</h4>
                            <p>{items.birth_year}</p>
                            <p>{items.nationality}</p>
                            <p>{items.biography}</p>
                            <p>{items.awards.join(", ")}</p>
                        </div>
                    ))
                }

                {
                    girl.map(items => (
                        <div key={items.id} className="card col-12 col-md-4 col-lg-2 align-items-center m-2">
                            <img src={items.image} alt="" />
                            <h4>{items.name}</h4>
                            <p>{items.birth_year}</p>
                            <p>{items.nationality}</p>
                            <p>{items.biography}</p>
                            <p>{items.awards}</p>
                        </div>
                    ))
                }
                {
                    all.map(items => (
                        <div key={`${items.id} ${items.name}`} className="card col-12 col-md-4 col-lg-2 align-items-center m-2">
                            <img src={items.image} alt="" />
                            <h4>{items.name}</h4>
                            <p>{items.birth_year}</p>
                            <p>{items.nationality}</p>
                            <p>{items.biography}</p>
                        </div>
                    ))
                }
            </div>
            <button onClick={handleClick} className="btn btn-dark">Press</button>
        </div>
    )
}