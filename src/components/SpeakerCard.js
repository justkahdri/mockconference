import React from 'react';

const SpeakerCard = (props) => (
    <div className="col-md-6 col-lg-4 mb-4">
        <div className="card">
            <img className="card-img-top" src={props.avatar} alt={props.name + " Profile"} />
            <div className="card-body">
                <div className="badges text-right">
                    <span className="badge badge-warning mr-2">JavaScript</span>
                    <span className="badge badge-info mr-2">React</span>
                </div>
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Inventore ea similique ratione pariatur nisi optio.
                    Qui amet sint deserunt, eos aspernatur hic alias?
                    Neque, odio adipisci omnis quas laboriosam sit?
                    Quisquam provident dolorem aspernatur natus quo?
                    Animi voluptate veritatis dicta, aliquid vitae doloremque numquam a.
                </p>
            </div>
        </div>
    </div>
// <div className="col-md-6 col-lg-4 mb-4">
//     <div className="card">
//         <img className="card-img-top" src="assets/speakers/freddy.jpeg" alt="Freddy Profile"/>
//         <div className="card-body">
//             <div className="badges text-right">
//                 <span className="badge badge-primary">Bootstrap</span>
//                 <span className="badge badge-danger">Angular</span>
//             </div>
//             <h5 className="card-title">Freddy Vega</h5>
//             <p className="card-text">
//                 Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                 Inventore ea similique ratione pariatur nisi optio.
//                 Qui amet sint deserunt, eos aspernatur hic alias?
//                 Neque, odio adipisci omnis quas laboriosam sit?
//                 Quisquam provident dolorem aspernatur natus quo?
//                 Animi voluptate veritatis dicta, aliquid vitae doloremque numquam a.
//             </p>
//         </div>
//     </div>
// </div>
// <div className="col-md-6 col-lg-4 mb-4">
//     <div className="card">
//         <img className="card-img-top" src="assets/speakers/leonidas2.jpeg" alt="Leonidas Profile"/>
//         <div className="card-body">
//             <div className="badges text-right">
//                 <span className="badge badge-primary">Docker</span>
//                 <span className="badge badge-info">MySQL</span>
//             </div>
//             <h5 className="card-title">Leonidas Esteban</h5>
//             <p className="card-text">
//                 Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                 Inventore ea similique ratione pariatur nisi optio.
//                 Qui amet sint deserunt, eos aspernatur hic alias?
//                 Neque, odio adipisci omnis quas laboriosam sit?
//                 Quisquam provident dolorem aspernatur natus quo?
//                 Animi voluptate veritatis dicta, aliquid vitae doloremque numquam a.
//             </p>
//         </div>
//     </div>
// </div>
// <div className="col-md-6 col-lg-4 mb-4">
//     <div className="card">
//         <img className="card-img-top" src="assets/speakers/cvander.jpeg" alt="Christian Profile"/>
//         <div className="card-body">
//             <div className="badges text-right">
//                 <span className="badge badge-danger">Networking</span>
//                 <span className="badge badge-success">Node</span>
//             </div>
//             <h5 className="card-title">Christian Van Der Hanst</h5>
//             <p className="card-text">
//                 Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                 Inventore ea similique ratione pariatur nisi optio.
//                 Qui amet sint deserunt, eos aspernatur hic alias?
//                 Neque, odio adipisci omnis quas laboriosam sit?
//                 Quisquam provident dolorem aspernatur natus quo?
//                 Animi voluptate veritatis dicta, aliquid vitae doloremque numquam a.
//             </p>
//         </div>
//     </div>
// </div>
)

export default SpeakerCard;