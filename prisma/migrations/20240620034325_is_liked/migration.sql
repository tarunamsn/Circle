-- AlterTable
ALTER TABLE "Follow" ALTER COLUMN "isFollow" SET DEFAULT false;

-- AlterTable
ALTER TABLE "Thread" ADD COLUMN     "isLiked" BOOLEAN NOT NULL DEFAULT false;
