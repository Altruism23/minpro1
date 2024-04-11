import { Router, Request, Response } from "express";
import { userRouter } from "./routers/user.router";
import { loginRouter } from "./routers/login.router";

const router = Router();

//api test
router.get("/", (req: Request, res: Response) => {
  res.status(200).send({
    status: "ok",
    message: "Welcome to my API",
  });
});

router.use("/users", userRouter);
router.use("/login", loginRouter);

export default router;
