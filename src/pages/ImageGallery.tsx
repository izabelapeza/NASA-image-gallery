import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BaseDialog from "../components/BaseDialog";
import Navbar from "../components/Navbar";
import PhotoList from "../components/PhotoList";
import { AnimatePresence, motion } from "framer-motion";

export default function App() {
  const [photoList, setPhotoList] = useState<any>(null); // add type
  const [currentPhoto, setCurrentPhoto] = useState<any>(null); // add type
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

  const openDialog = (photo: any) => setCurrentPhoto(photo);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div>
        <Navbar />
        <main>
          <div className="px-8 py-4 max-w-[1440px] mx-auto">
            {isLoading ? <div>is loading...</div> : <></>}
            {!isLoading && photoList?.length ? (
              <PhotoList photoList={photoList} openDialog={openDialog} />
            ) : (
              <></>
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
