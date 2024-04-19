function ImageShow({image}){
    console.log(image.urls.small)
    return(
        <div>
            <img src={image.urls.regular} alt={image.alt_description}/>
        </div>
    )
}
export default ImageShow