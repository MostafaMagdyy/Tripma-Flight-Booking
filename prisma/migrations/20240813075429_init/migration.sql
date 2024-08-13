-- CreateTable
CREATE TABLE "Flight" (
    "flightId" SERIAL NOT NULL,
    "fromCity" TEXT NOT NULL,
    "toCity" TEXT NOT NULL,
    "type" BOOLEAN NOT NULL,
    "imgPath" TEXT NOT NULL,
    "subtotalPrice" DOUBLE PRECISION NOT NULL,
    "taxesAndFees" DOUBLE PRECISION NOT NULL,
    "airlineName" TEXT NOT NULL,
    "duration" TEXT NOT NULL,
    "fromToTime" TEXT NOT NULL,
    "totalAvailableSeats" INTEGER NOT NULL,

    CONSTRAINT "Flight_pkey" PRIMARY KEY ("flightId")
);

-- CreateTable
CREATE TABLE "Seat" (
    "flightId" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "seatNumber" TEXT NOT NULL,
    "available" BOOLEAN NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Seat_pkey" PRIMARY KEY ("flightId","type","seatNumber")
);

-- CreateTable
CREATE TABLE "FlightDeals" (
    "id" SERIAL NOT NULL,
    "placeName" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "imgPath" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "FlightDeals_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UniquePlaces" (
    "id" SERIAL NOT NULL,
    "placeName" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "imgPath" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "description" TEXT NOT NULL,
    "motivation" TEXT NOT NULL,

    CONSTRAINT "UniquePlaces_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CommentSection" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "rate" INTEGER NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "CommentSection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "imgPath" TEXT,
    "city" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Booking" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "flightId" INTEGER NOT NULL,
    "departingSeat" TEXT NOT NULL,
    "arrivingSeat" TEXT,
    "baggageFees" DOUBLE PRECISION NOT NULL,
    "upgradeFees" DOUBLE PRECISION NOT NULL,
    "total" DOUBLE PRECISION NOT NULL,
    "confirmationMessage" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Booking_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PassengerInfo" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "middleName" TEXT,
    "lastName" TEXT NOT NULL,
    "suffix" TEXT,
    "dateOfBirth" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "redressNumber" TEXT,
    "knownTravelerNumber" TEXT,
    "bookingId" INTEGER NOT NULL,

    CONSTRAINT "PassengerInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PaymentInfo" (
    "id" SERIAL NOT NULL,
    "paymentType" TEXT NOT NULL,
    "bookingId" INTEGER NOT NULL,
    "nameOnCard" TEXT NOT NULL,
    "cardNumber" TEXT NOT NULL,
    "ccv" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PaymentInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ShareItinerary" (
    "id" SERIAL NOT NULL,
    "bookingId" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ShareItinerary_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- AddForeignKey
ALTER TABLE "Seat" ADD CONSTRAINT "Seat_flightId_fkey" FOREIGN KEY ("flightId") REFERENCES "Flight"("flightId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommentSection" ADD CONSTRAINT "CommentSection_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_flightId_fkey" FOREIGN KEY ("flightId") REFERENCES "Flight"("flightId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PassengerInfo" ADD CONSTRAINT "PassengerInfo_bookingId_fkey" FOREIGN KEY ("bookingId") REFERENCES "Booking"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PaymentInfo" ADD CONSTRAINT "PaymentInfo_bookingId_fkey" FOREIGN KEY ("bookingId") REFERENCES "Booking"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShareItinerary" ADD CONSTRAINT "ShareItinerary_bookingId_fkey" FOREIGN KEY ("bookingId") REFERENCES "Booking"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
