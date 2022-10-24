import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import PhotoList from "../components/PhotoList";
import { motion } from "framer-motion";

export default function App() {
  const [photoList, setPhotoList] = useState<any>(null); // add type
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

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div>
        <Navbar />
        <main>
          <div className="px-8 py-4 max-w-[1440px] mx-auto">
            {isLoading ? <div>is loading...</div> : <></>}
            {!isLoading && photoList?.length ? (
              <PhotoList photoList={photoList} />
            ) : (
              <></>
            )}
          </div>
        </main>
      </div>
    </motion.div>
  );
}
