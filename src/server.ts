import { PrismaClient } from "@prisma/client";
import express, { json } from "express";

const prisma = new PrismaClient();

const app = express();

app.use(json());

app.get("/", async (req, res) => {
	const data = await prisma.user.create({
		data: { name: "Daniel Alves", email: "daniel@email.com" },
	});

	return res.json({ data });
});

app.post("/", (req, res) => {
	res.send("Well done!");
});

app.listen(3000, () => {
	console.log("The application is listening on port 3000!");
});
