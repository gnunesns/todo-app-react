export function NovaTarefa(){
    return(
        <div>
                <h1>Lista de tarefas</h1>
                <form>
                    <label for="tarefa">Nova Tarefa</label>
                    <input type="text" id="tarefa" autocomplete="off" placeholder="Insira aqui uma tarefa"></input>
                    <button type="submit" id="add_tarefa"><span>Nova Tarefa</span><i class="fa fa-plus-square"></i></button>
                </form>
           
        </div>
    )
}