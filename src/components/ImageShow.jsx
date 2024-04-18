function ImageShow({image}){
    return(
        <div>
            <img scr={image.urls.small} alt={image.alt_description}/>
        </div>
    )
}
export default ImageShow