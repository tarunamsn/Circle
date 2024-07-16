import db from "../lib/db";

export const follow = async (followerId: string, followingId: string) => {
   const existingFollow = await db.follow.findFirst({
      where: {
         followerId,
         followingId,
      },
   });

   if (existingFollow) {
      await db.follow.deleteMany({
         where: {
            followerId,
            followingId,
         },
      });

      return "SUCCESSFULLY UNFOLLOWED";
   }

   await db.follow.create({
      data: {
         followerId,
         followingId,
      },
   });

   return "SUCCESSFULLY FOLLOWED";
};
