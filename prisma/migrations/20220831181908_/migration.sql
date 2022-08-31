/*
  Warnings:

  - A unique constraint covering the columns `[langCode]` on the table `Language` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `langCode` to the `Language` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Language_lang_key";

-- AlterTable
ALTER TABLE "Language" ADD COLUMN     "langCode" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Language_langCode_key" ON "Language"("langCode");
