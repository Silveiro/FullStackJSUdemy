import { error } from "node:console";
import Veterinario from "../Models/Veterinario.js";

const registrar = async (req,res) => {
    

    const {email} = req.body;
    const existeUsuario = await Veterinario.findOne({email});
    if (existeUsuario){
        const error = new Error("Usuario ya registrado");
        return res.status(400).json({msg: error.message});
    }

    try{
        const veterinario = new Veterinario(req.body);
        const veterinarioGuardado = await veterinario.save();

        res.json({msg: "Registrando usuariooo"})
        console.log(veterinarioGuardado)

    }catch(error){
        console.log(error);
    }
    
};

const perfil = (req,res) => {
    
    res.send("desde PERFILILLO")
}

const confirmar = async (req, res) =>{
    const {token} = req.params;
    const usuarioConfirmar = await Veterinario.findOne({token});
    if(!usuarioConfirmar){
        const error = new Error("token no valido")
     return res.status(404).json({msg: error.message})
    }
    try{
        usuarioConfirmar.token = null;
        usuarioConfirmar.confirmado = true;
        await usuarioConfirmar.save();
        console.log(usuarioConfirmar)
        return res.json({msg: "usuario Confirmadooo"});
    }catch (error){
        console.log(error)
    }
}

const autenticar = async (req,res) =>{
    const {email,password} = req.body;
    //comprobar si el usuario existe
    const usuario = await Veterinario.findOne({email});
    
    if(!usuario){
        const error = new Error("El Usuario NO existe")
       return  res.json({msg: "El usuario NO existe"})
    }
    if(usuario.confirmado === false){
        const error = new Error("Tu cuenta NO ha sido confirmada")
        return res.json({msg: "El usuario NO Ha confirmado"})
    }
    if(await usuario.comprobarPassword(password)){
        return res.json({msg: "Password Correcto"});
        
    }else{
        return res.json({msg: "Password Inorrecto"});        
    }

}



export { 
    registrar, perfil,confirmar,autenticar
}