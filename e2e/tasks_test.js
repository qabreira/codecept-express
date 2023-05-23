// const { faker } = require('@faker-js/faker')

Feature('tasks')

Scenario.only('deve conseguir cadastrar uma nova tarefa',  ({ I }) => {

    const taskName = 'fazer compras'

    I.amOnPage('/')

    I.fillField('input[placeholder$=Task]', taskName)
    I.click('Create')

    I.see(taskName, '.task-item')

});