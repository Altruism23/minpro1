import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createUser = async (req: Request, res: Response) => {
  try {
    const result = await prisma.user.create({
      data: req.body,
    });
    res.status(201).send({
      status: "ok",
      result,
    });
  } catch (err) {
    res.status(400).send({
      status: "error",
      message: err,
    });
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const user = await prisma.user.findMany();
    res.status(200).send({
      status: "ok",
      user,
    });
  } catch (err) {
    res.status(400).send({
      status: "error",
      message: err,
    });
  }
};

export const getUserId = async (req: Request, res: Response) => {
  try {
    const userId = await prisma.user.findMany({
      where: {
        id: +req.params.id,
      },
    });
    res.status(200).send({
      status: "ok",
      userId,
    });
  } catch (err) {
    res.status(400).send({
      status: "error",
      message: err,
    });
  }
};
