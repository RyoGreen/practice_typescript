/*
  Warnings:

  - Made the column `authorId` on table `Post` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "public"."Post" DROP CONSTRAINT "Post_authorId_fkey";

-- AlterTable
ALTER TABLE "public"."Post" ALTER COLUMN "authorId" SET NOT NULL;

-- CreateTable
CREATE TABLE "public"."StatusMapping" (
    "statusId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "StatusMapping_pkey" PRIMARY KEY ("statusId","userId")
);

-- CreateTable
CREATE TABLE "public"."Status" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Status_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Post" ADD CONSTRAINT "Post_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."StatusMapping" ADD CONSTRAINT "StatusMapping_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."StatusMapping" ADD CONSTRAINT "StatusMapping_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "public"."Status"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
