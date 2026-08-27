const express = require("express");

const router = express.Router();

const petController = require("../controllers/petsController");


router.post("/", petController.cadastrar);

router.get("/", petController.listar);

router.get("/:id", petController.buscar);

router.put("/:id", petController.atualizar);

router.delete("/:id", petController.deletar);


module.exports = router;