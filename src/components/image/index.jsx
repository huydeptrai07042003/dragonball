function Image({ src, alt, onLoad }) {
    return <img className="w-full h-full object-cover object-center" src={src} onLoad={onLoad} alt={alt} />;
}

export default Image;
