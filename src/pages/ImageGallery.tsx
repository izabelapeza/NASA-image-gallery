import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Layout/Navbar";
import PhotoList from "../components/PhotoElements/PhotoList";
import { Photo } from "../types/photo";
import BaseDialog from "../components/BaseDialog";
import { AnimatePresence, motion } from "framer-motion";
import BaseLoader from "../components/BaseLoader";
import NoSearchResultsAlert from "../components/NoSearchResultsAlert";

export default function App() {
  const [photoList, setPhotoList] = useState<Photo[] | null>(null);
  const [currentPhoto, setCurrentPhoto] = useState<Photo | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { id } = useParams();

  useEffect(() => {
    let souce = axios.CancelToken.source();
    if (id) {
      setIsLoading(true);
      axios
        .get(`https://images-api.nasa.gov/search?q=${id}&media_type=image`, {
          cancelToken: souce.token,
        })
        .then((res) => {
          setPhotoList(res.data.collection.items);
          setIsLoading(false);
        })
        .catch(() => {
          setIsLoading(false);
        });
    }
    return () => souce.cancel();
  }, [id]);

  const openDialog = (photo: Photo) => setCurrentPhoto(photo);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div>
        <Navbar />
        <main>
          <div className="px-8 py-4 max-w-[1440px] mx-auto">
            {isLoading ? (
              <BaseLoader />
            ) : photoList?.length ? (
              <PhotoList photoList={photoList} openDialog={openDialog} />
            ) : (
              <NoSearchResultsAlert />
            )}
          </div>
        </main>
        <AnimatePresence>
          {currentPhoto !== null ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              key="modal"
            >
              <BaseDialog
                closeDialog={() => {
                  setCurrentPhoto(null);
                }}
                photo={currentPhoto}
              />
            </motion.div>
          ) : (
            <></>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
