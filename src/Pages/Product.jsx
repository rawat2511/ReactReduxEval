
const styleImg = {
    height: "200px",
    width: "280px"
}

const styleDiv = {
    width: "330px",
    margin: "20px",
    padding: "10px"
}

function Product({id, name, country, img, desc, price}) {
    return (
        <div style={styleDiv}>

            <h3>{id} - {name} - {country}</h3>
            <img style={styleImg} src={img} alt="image" />
            <h3>Price: ${price}</h3>
            <p>{desc}</p>
            <button  >ADD</button>


        </div>
    )
}

export default Product;