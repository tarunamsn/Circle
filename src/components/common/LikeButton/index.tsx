import React from "react";
import { API } from "../../../lib/api";
import { Box, IconButton } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";

interface IProps {
   threadId?: number;
}

const LikeButton: React.FC<IProps> = ({ threadId }) => {
   const [liked, setLiked] = React.useState(false);
   const [likeCount, setLikeCount] = React.useState(0);

   const checkLike = async () => {
      try {
         const { data } = await API.get(`/like/${threadId}`);
         setLiked(data.like === null ? false : true);
         setLikeCount(data.totalLike);
      } catch (error) {
         console.log(error);
      }
   };

   const handleLike = async () => {
      try {
         const res = await API.post(
            `like`,
            {
               threadId: threadId,
            },
            {
               headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
               },
            }
         );

         console.log(res);
         await checkLike();
      } catch (error) {
         console.log(error);
      }
   };

   React.useEffect(() => {
      checkLike();
   }, []);

   return (
      <Box sx={{ display: "flex", gap: 1 }}>
         <IconButton aria-label="delete" onClick={() => handleLike()}>
            {liked ? <Favorite sx={{ color: "red" }} /> : <FavoriteBorder />}{" "}
         </IconButton>
         {likeCount}
      </Box>
   );
};

export default LikeButton;
