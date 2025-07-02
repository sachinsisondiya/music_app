import AlbumInfo from "./AlbumInfo";
import AlbumImage from "./AlbumImage";
import "./Songcard.css";
const SongCard= ({album})=>{
  console.log(album);
  return(
    <div className="songcard">
      <AlbumImage></AlbumImage>
      <AlbumInfo></AlbumInfo>
    </div>
  )
}
export default SongCard;