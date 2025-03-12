class projectController {
    constructor(){

    }

    async create(req, res){
        try {
            res.status(200).json({message: 'Projecto creado'});
        } catch (error) {
            res.status(500).json({message: 'Internal server error'}); 
        }
    }

    async update(req, res){
        try {
            res.status(200).json({message: 'Projecto actualizado'});
        } catch (error) {
            res.status(500).json({message: 'Internal server error'});
        }
    }

    async delete(req, res){
        try {
            res.status(200).json({message: 'Projecto eliminado'});
            
        } catch (error) {
            res.status(500).json({message: 'Internal server error'});
        }
    }

    async getAll(req, res){
        try {
            res.status(200).json({message: 'Listado de proyectos'});
        } catch (error) {
            res.status(500).json({message: 'Internal server error'});
        }
    }
    
    async getOne(req, res){
        try {
            res.status(200).json({message: 'Proyecto seleccionado'});
        } catch (error) {
            res.status(500).json({message: 'Internal server error'});
        }
    }
}

export default new projectController();