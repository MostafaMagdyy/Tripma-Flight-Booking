const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  // Fetch a subset of flights from the database
  const flights = await prisma.flight.findMany({
    take: 15, // Number of flights to seed seats for
    select: {
      flightId: true,
    },
  });

  for (const flight of flights) {
    // Seed both Economy and Business seats for each flight
    await seedSeats(flight.flightId, "Economy");
    await seedSeats(flight.flightId, "Business");
  }

  console.log("Seats have been seeded successfully.");
}

async function seedSeats(flightId, seatType) {
  // Define the maximum number of rows and calculate the remaining rows for each flight
  const maxRows = 35;

  // Get existing rows for the current flight to ensure we don't exceed the limit
  const existingRows = await getTotalRowsForFlight(flightId);

  // Calculate available rows for new seats
  const rowsLeft = maxRows - existingRows;
  const minRows = seatType === "Business" ? 3 : 10;
  const rows = Math.min(
    Math.floor(Math.random() * (maxRows - minRows + 1)) + minRows,
    rowsLeft
  );

  const seatsPerRow = seatType === "Business" ? 4 : 6;

  // Create a set to track unique seat numbers for this flight
  const uniqueSeatNumbers = new Set();

  const seats = [];

  for (let row = 1; row <= rows; row++) {
    for (let seat = 1; seat <= seatsPerRow; seat++) {
      let seatNumber;
      do {
        seatNumber = `${String.fromCharCode(64 + seat)}${row}`; // e.g., A1, B2
      } while (uniqueSeatNumbers.has(seatNumber));

      uniqueSeatNumbers.add(seatNumber);

      seats.push({
        flightId: flightId,
        type: seatType,
        seatNumber: seatNumber,
        available: true, // Or set based on availability logic
        price: seatType === "Business" ? 500 : 100, // Example pricing
      });
    }
  }

  // Insert seats into the database
  await prisma.seat.createMany({
    data: seats,
    skipDuplicates: true, // To avoid duplication errors if running the seed multiple times
  });
}

async function getTotalRowsForFlight(flightId) {
  // Get the total number of unique rows (seats) already seeded for this flight
  const seats = await prisma.seat.findMany({
    where: {
      flightId: flightId,
    },
    select: {
      seatNumber: true,
    },
  });

  const seatRows = new Set(seats.map((seat) => seat.seatNumber.slice(1))); // Extract row numbers
  return seatRows.size;
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
