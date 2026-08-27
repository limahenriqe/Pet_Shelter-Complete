const Pet = require("../models/pets");


exports.cadastrar = async (req, res) => {

    try {
        const pet = await Pet.create(req.body);
        res.status(201).json(pet);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Erro ao cadastrar pet"
        });
    }
};


exports.listar = async (req, res) => {
    try {
        const pets = await Pet.findAll();
        res.status(200).json(pets);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Erro ao listar pets"
        });
    }
};


exports.buscar = async (req, res) => {
    try {
        const { id } = req.params;
        const pet = await Pet.findByPk(id);
        if (!pet) {
            return res.status(404).json({
                message: "Pet não encontrado"
            });
        }
        res.status(200).json(pet);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Erro ao buscar pet"
        });
    }
};


exports.deletar = async (req, res) => {
    try {
        const { id } = req.params;
        const pet = await Pet.findByPk(id);
        if (!pet) {
            return res.status(404).json({
                message: "Pet não encontrado"
            });
        }
        await pet.destroy();
        res.status(200).json({
            message: "Pet excluído com sucesso"
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Erro ao excluir pet"
        });
    }
};


exports.atualizar = async (req, res) => {

    try {
        const { id } = req.params;
        const pet = await Pet.findByPk(id);
        if (!pet) {
            return res.status(404).json({
                message: "Pet não encontrado"
            });
        }
        await pet.update(req.body);
        res.status(200).json(pet);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Erro ao atualizar pet"
        });
    }
};