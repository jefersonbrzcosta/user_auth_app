import { PrismaClient } from "@prisma/client"

const db_client = new PrismaClient()

export { db_client }
