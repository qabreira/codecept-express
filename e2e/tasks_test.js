// const { faker } = require('@faker-js/faker')

const { haveTask } = require("../pages/tasks")

Feature('tasks')

Scenario('deve conseguir cadastrar uma nova tarefa', ({ I, tasksPage }) => {

    const taskName = 'fazer compras'

    I.sendDeleteRequest('/helper/tasks/' + taskName)
    I.seeResponseCodeIsSuccessful()

    tasksPage.create(taskName)
    tasksPage.haveTask(taskName)

})

Scenario('não permite cadastro de tarefas com nome duplicado', ({ I, tasksPage }) => {

    // dado que eu tenho uma nova tarefa
    const task = {
        name: 'ler um livro',
        is_done: false
    }

    I.sendDeleteRequest('/helper/tasks/' + task.name)
    I.seeResponseCodeIsSuccessful()

    // mas eu já cadastrei essa tarefa anteriormente e não percebi
    I.sendPostRequest('/tasks', task)
    I.seeResponseCodeIsSuccessful()

    // quando eu tento realizar o cadastro novamente
    tasksPage.create(task.name)

    // então recebo uma mensagem informado sobre a duplicidade
    tasksPage.popUpHaveText('Task already exists!')

})