import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const user = await prisma.user.findUnique({
    where: {
      userName: username,
    },
  });
  if (user) {
    const pass = user?.password == password;
    if (pass == true) {
      res.json(user);
    } else {
      res.json("user not found");
    }
  } else {
    res.json("user not found");
  }
};
