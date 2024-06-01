import express from 'express';
import { v4 as uuid } from 'uuid';

const app = express();

app.use(express);

let voluntarios = [];

// Obter todos os voluntários
app.get('/voluntarios', (request, response) => {
    return response.json(voluntarios);
});

// Adicionar um novo voluntário
app.post('/voluntarios', (request, response) => {
    // Recebe dados do novo voluntário
    const { name, email } = request.body;
    
    // Criando novo voluntário com ID único
    const voluntario = { id: uuid(), name, email };

    // Registra na array
    voluntarios.push(voluntario);

    // Retorna o voluntário
    return response.json(voluntario);
});

// Remover um voluntário específico
app.delete('/voluntarios/:id', (request, response) => {
    // Busca o voluntário
    const { id } = request.params;

    const voluntarioIndex = voluntarios.findIndex((voluntario) => voluntario.id === id);

    if (voluntarioIndex < 0) {
        return response.status(404).json({ error: 'Voluntário não encontrado.' });
    }

    // Exclui voluntário selecionado
    voluntarios.splice(voluntarioIndex, 1);

    // Retorna status de sucesso
    return response.status(204).send();
});

app.listen(3333, () => {
    console.log('Servidor rodando com sucesso na porta 3333!');
});




app.listen('3333', () =>{
    console.log('Servidor rodando com sucesso na porta 3333!')
})