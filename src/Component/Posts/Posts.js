import React, {useState} from 'react'

function Posts(){
    const [listPost , setListPost] = useState({
        id:0,
        title:'asd',
        manufacturer:'audi',
        model:'a4',
        description:'valami leírás',
        picture:'www.asd.asd/asd.jpg'

    })


    return(
        <div className="card" >
            <div className="card-body">
                <h5 className="card-title">{listPost.manufacturer}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{listPost.model}</h6>
                <h6 className="card-subtitle mb-2 text-muted">{listPost.title}</h6>
                <p className="card-text">{listPost.description}</p>
                <a className="card-link">Card link</a>
                <a className="card-link">Another link</a>
  </div>
</div>

    )
}
export default Posts