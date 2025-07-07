import AlbumInfo from "./AlbumInfo";
import AlbumImage from "./AlbumImage";
import "./Songcard.css";
const SongCard= ({album})=>{
  return(
    <div className="songcard flex">
      <AlbumImage ></AlbumImage>
      <AlbumInfo im={album?.id?.name }></AlbumInfo>
    </div>
  )
}
export default SongCard;