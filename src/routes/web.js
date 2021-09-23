import express from "express";
import fs from "fs";
import { DBService } from "../services/db";

const router = express.Router();

router.get("/vista", async (req, res) => {
  const arrayProductos = await DBService.get();
  console.log(arrayProductos);

  res.render("main", arrayProductos);
});

router.get("/ingreso", (req, res) => {
  res.render("ingreso");
});

router.get("/vista-test", (req, res) => {
  res.render("vista-test");
});

export default router;
