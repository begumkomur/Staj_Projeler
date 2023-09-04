function ImageItem({imageProps}) {
    console.log(imageProps);
    return <div>
        <img className="imageListImg" src={imageProps.urls.small} alt={imageProps.alt_description} />
    </div>;
}

export default ImageItem;