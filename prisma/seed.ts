import { prisma } from "../src/lib/prisma";

async function seed() {
    await prisma.event.create({
        data: {
            id: "1eb11c6e-6e72-4123-b1ad-3e6e176369ba",
            title: "Unite Summit",
            slug: "unite-summit",
            details: "Um evento para devs apaixonados(das) por código!",
            maximumAttendees: 120,
        }
    })


}

seed().then(() => {
    console.log("Database seeded!")
    prisma.$disconnect()
})