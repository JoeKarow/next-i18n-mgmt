/*
  Warnings:

  - Added the required column `text` to the `Translation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Translation" ADD COLUMN     "text" TEXT NOT NULL;
