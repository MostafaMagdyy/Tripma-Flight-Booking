/*
  Warnings:

  - The primary key for the `Account` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `providerId` on the `Account` table. All the data in the column will be lost.
  - The primary key for the `Booking` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `CommentSection` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `FlightDeals` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `PassengerInfo` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `PaymentInfo` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `ShareItinerary` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `UniquePlaces` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[provider,providerAccountId]` on the table `Account` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `provider` to the `Account` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `id` on the `Account` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `userId` on the `Account` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id` on the `Booking` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `userId` on the `Booking` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id` on the `CommentSection` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `userId` on the `CommentSection` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id` on the `FlightDeals` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id` on the `PassengerInfo` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `bookingId` on the `PassengerInfo` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id` on the `PaymentInfo` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `bookingId` on the `PaymentInfo` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id` on the `ShareItinerary` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `bookingId` on the `ShareItinerary` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id` on the `UniquePlaces` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Account" DROP CONSTRAINT "Account_userId_fkey";

-- DropForeignKey
ALTER TABLE "Booking" DROP CONSTRAINT "Booking_userId_fkey";

-- DropForeignKey
ALTER TABLE "CommentSection" DROP CONSTRAINT "CommentSection_userId_fkey";

-- DropForeignKey
ALTER TABLE "PassengerInfo" DROP CONSTRAINT "PassengerInfo_bookingId_fkey";

-- DropForeignKey
ALTER TABLE "PaymentInfo" DROP CONSTRAINT "PaymentInfo_bookingId_fkey";

-- DropForeignKey
ALTER TABLE "ShareItinerary" DROP CONSTRAINT "ShareItinerary_bookingId_fkey";

-- DropIndex
DROP INDEX "Account_providerId_providerAccountId_key";

-- AlterTable
ALTER TABLE "Account" DROP CONSTRAINT "Account_pkey",
DROP COLUMN "providerId",
ADD COLUMN     "provider" TEXT NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL,
DROP COLUMN "userId",
ADD COLUMN     "userId" UUID NOT NULL,
ADD CONSTRAINT "Account_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Booking" DROP CONSTRAINT "Booking_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL,
DROP COLUMN "userId",
ADD COLUMN     "userId" UUID NOT NULL,
ADD CONSTRAINT "Booking_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "CommentSection" DROP CONSTRAINT "CommentSection_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL,
DROP COLUMN "userId",
ADD COLUMN     "userId" UUID NOT NULL,
ADD CONSTRAINT "CommentSection_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "FlightDeals" DROP CONSTRAINT "FlightDeals_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL,
ADD CONSTRAINT "FlightDeals_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "PassengerInfo" DROP CONSTRAINT "PassengerInfo_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL,
DROP COLUMN "bookingId",
ADD COLUMN     "bookingId" UUID NOT NULL,
ADD CONSTRAINT "PassengerInfo_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "PaymentInfo" DROP CONSTRAINT "PaymentInfo_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL,
DROP COLUMN "bookingId",
ADD COLUMN     "bookingId" UUID NOT NULL,
ADD CONSTRAINT "PaymentInfo_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "ShareItinerary" DROP CONSTRAINT "ShareItinerary_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL,
DROP COLUMN "bookingId",
ADD COLUMN     "bookingId" UUID NOT NULL,
ADD CONSTRAINT "ShareItinerary_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "UniquePlaces" DROP CONSTRAINT "UniquePlaces_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL,
ADD CONSTRAINT "UniquePlaces_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");

-- AddForeignKey
ALTER TABLE "CommentSection" ADD CONSTRAINT "CommentSection_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PassengerInfo" ADD CONSTRAINT "PassengerInfo_bookingId_fkey" FOREIGN KEY ("bookingId") REFERENCES "Booking"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PaymentInfo" ADD CONSTRAINT "PaymentInfo_bookingId_fkey" FOREIGN KEY ("bookingId") REFERENCES "Booking"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShareItinerary" ADD CONSTRAINT "ShareItinerary_bookingId_fkey" FOREIGN KEY ("bookingId") REFERENCES "Booking"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
