import { PrismaClient } from "@prisma/client";
import express, { json } from "express";

const prisma = new PrismaClient();

const app = express();

app.use(json());

app.get("/", async (req, res) => {
	return res.send("Well done!");
});

app.post("/", async (req, res) => {
	const { email, name, street, country } = req.body;
	const user = await prisma.user.create({
		data: { email, name, address: { create: { street, country } } },
		include: { address: true },
	});
	return res.json({ user });
});

app.listen(3000, () => {
	console.log("The application is listening on port 3000!");
});
