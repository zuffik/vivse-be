-- CreateEnum
CREATE TYPE "UrlType" AS ENUM ('PICK', 'DOWNLOAD');

-- CreateTable
CREATE TABLE "User" (
  "id" TEXT NOT NULL,
  "email" TEXT NOT NULL,
  "name" TEXT,
  "password" TEXT NOT NULL,
  CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Album" (
  "id" TEXT NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "label" TEXT NOT NULL,
  "mainPhotoId" TEXT NOT NULL,
  CONSTRAINT "Album_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ImageFile" (
  "id" TEXT NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "original" TEXT NOT NULL,
  "small" TEXT NOT NULL,
  "large" TEXT NOT NULL,
  CONSTRAINT "ImageFile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Photo" (
  "id" TEXT NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "originalFileId" TEXT NOT NULL,
  "editedFileId" TEXT NOT NULL,
  "albumId" TEXT NOT NULL,
  "label" TEXT NOT NULL,
  CONSTRAINT "Photo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Url" (
  "token" TEXT NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "expiresAt" TIMESTAMP(3) NOT NULL,
  "type" "UrlType" NOT NULL,
  CONSTRAINT "Url_pkey" PRIMARY KEY ("token")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Photo_originalFileId_key" ON "Photo"("originalFileId");

-- CreateIndex
CREATE UNIQUE INDEX "Photo_editedFileId_key" ON "Photo"("editedFileId");

-- AddForeignKey
ALTER TABLE
  "Album"
ADD
  CONSTRAINT "Album_mainPhotoId_fkey" FOREIGN KEY ("mainPhotoId") REFERENCES "Photo"("id") ON DELETE RESTRICT ON
UPDATE
  CASCADE;

-- AddForeignKey
ALTER TABLE
  "Photo"
ADD
  CONSTRAINT "Photo_originalFileId_fkey" FOREIGN KEY ("originalFileId") REFERENCES "ImageFile"("id") ON DELETE RESTRICT ON
UPDATE
  CASCADE;

-- AddForeignKey
ALTER TABLE
  "Photo"
ADD
  CONSTRAINT "Photo_editedFileId_fkey" FOREIGN KEY ("editedFileId") REFERENCES "ImageFile"("id") ON DELETE RESTRICT ON
UPDATE
  CASCADE;

-- AddForeignKey
ALTER TABLE
  "Photo"
ADD
  CONSTRAINT "Photo_albumId_fkey" FOREIGN KEY ("albumId") REFERENCES "Album"("id") ON DELETE RESTRICT ON
UPDATE
  CASCADE;