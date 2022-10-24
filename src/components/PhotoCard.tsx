interface Props {
  imageUrl: string;
  title: string;
  dateCreated: string;
  onClickAction: (currentPhoto: any) => void;
}

export default function PhotoCard({
  imageUrl,
  title,
  dateCreated,
  onClickAction,
}: Props) {
  return (
    <div
      className="flex cursor-pointer hover:scale-[102%] transition"
      onClick={onClickAction}
    >
      <div className="rounded-lg shadow-lg bg-white dark:bg-[#1d181e] w-full">
        <div
          className="h-[200px] w-[100%] bg-center rounded-t"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div className="p-6">
          <h5 className="text-gray-900 dark:text-zinc-100 text-xl font-medium mb-2">
            {title}
          </h5>
          <p className="text-gray-600 dark:text-zinc-500 text-sm mb-2">
            {dateCreated.split("T")[0]}
          </p>
        </div>
      </div>
    </div>
  );
}
