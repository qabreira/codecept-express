Feature('home')

Scenario('webapp deve estar on-line', ({ I }) => {
    I.amOnPage('/')
    I.seeTitleEquals('Gerencie suas tarefas com Mark L')
})