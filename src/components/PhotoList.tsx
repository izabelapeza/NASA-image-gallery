interface Props {
  photoList: any; // type to do
  openDialog: (currentPhoto: any) => void;
}

export default function PhotoList({ photoList, openDialog }: Props) {
  return (
    <div className="grid grid-cols-1 grid-cols-2 md:grid-cols-3 justify-center justify-items-center gap-6 max-w-[1440px]">
      {photoList.map((photo: any) => (
        <div
          className="h-[200px] w-[100%] bg-center rounded shadow"
          style={{ backgroundImage: `url(${photo.links[0].href})` }}
          key={photo.data[0].nasa_id}
          onClick={() => {
            openDialog(photo);
          }}
        />
      ))}
    </div>
  );
}
