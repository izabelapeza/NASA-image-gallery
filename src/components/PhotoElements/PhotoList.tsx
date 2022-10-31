import PhotoCard from "./PhotoCard";
import { Photo } from "../../types/photo";

interface Props {
  photoList: Photo[];
  openDialog: (currentPhoto: Photo) => void;
}

export default function PhotoList({ photoList, openDialog }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center justify-items-stretch gap-6 max-w-[1440px]">
      {photoList.map((photo: Photo) => (
        <div
          onClick={() => {
            openDialog(photo);
          }}
          key={photo.data[0].nasa_id}
        >
          <PhotoCard
            imageUrl={photo.links[0].href}
            title={photo.data[0].title}
            dateCreated={photo.data[0].date_created}
          />
        </div>
      ))}
    </div>
  );
}
