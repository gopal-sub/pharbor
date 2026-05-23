/*
  Warnings:

  - Added the required column `website` to the `Credential` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdOn` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Credential" ADD COLUMN     "website" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "createdOn" TIMESTAMP(3) NOT NULL;
