-- CreateTable
CREATE TABLE "Placeholder" (
    "id" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "format" TEXT NOT NULL,

    CONSTRAINT "Placeholder_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_PlaceholderToTranslation" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Placeholder_key_key" ON "Placeholder"("key");

-- CreateIndex
CREATE UNIQUE INDEX "_PlaceholderToTranslation_AB_unique" ON "_PlaceholderToTranslation"("A", "B");

-- CreateIndex
CREATE INDEX "_PlaceholderToTranslation_B_index" ON "_PlaceholderToTranslation"("B");

-- AddForeignKey
ALTER TABLE "_PlaceholderToTranslation" ADD CONSTRAINT "_PlaceholderToTranslation_A_fkey" FOREIGN KEY ("A") REFERENCES "Placeholder"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlaceholderToTranslation" ADD CONSTRAINT "_PlaceholderToTranslation_B_fkey" FOREIGN KEY ("B") REFERENCES "Translation"("id") ON DELETE CASCADE ON UPDATE CASCADE;
