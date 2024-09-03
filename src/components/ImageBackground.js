import "../App.css";
export default function ImageBackground({ src, alt }) {
  return <img src={src} alt={alt} className="backgroundImage" />;
}
